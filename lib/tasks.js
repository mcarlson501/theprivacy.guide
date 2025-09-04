import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const tasksDirectory = path.join(process.cwd(), 'content/tasks');

/**
 * Get all task data from markdown files
 * @returns {Promise<Array>} Array of task objects with metadata and HTML content
 */
export async function getAllTasksData() {
  try {
    // Check if tasks directory exists
    if (!fs.existsSync(tasksDirectory)) {
      console.warn('Tasks directory does not exist:', tasksDirectory);
      return [];
    }

    // Get file names under /content/tasks
    const fileNames = fs.readdirSync(tasksDirectory);
    
    // Filter for .md files only
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.warn('No markdown files found in tasks directory');
      return [];
    }

    const allTasksData = await Promise.all(
      markdownFiles.map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(tasksDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Validate required frontmatter fields
        const requiredFields = ['title', 'description', 'category', 'time', 'points'];
        const missingFields = requiredFields.filter(field => !matterResult.data[field]);
        
        if (missingFields.length > 0) {
          console.warn(`Task ${id} is missing required fields:`, missingFields);
        }

        // Combine the data with the id and HTML content
        return {
          id,
          contentHtml,
          ...matterResult.data,
          // Ensure numeric fields are numbers
          points: Number(matterResult.data.points) || 0,
        };
      })
    );

    // Sort tasks by category priority first, then by points (descending), then by title
    return allTasksData.sort((a, b) => {
      // Define category priority order
      const categoryOrder = ['Quick Win', 'Essential', 'Social Media', 'Advanced', 'Other'];
      
      const categoryA = a.category || 'Other';
      const categoryB = b.category || 'Other';
      
      const indexA = categoryOrder.indexOf(categoryA);
      const indexB = categoryOrder.indexOf(categoryB);
      
      // Sort by category priority first
      if (indexA !== indexB) {
        // If both categories are in the order array, sort by their position
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        
        // If only one is in the order array, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        // If neither is in the order array, sort alphabetically by category
        return categoryA.localeCompare(categoryB);
      }
      
      // Within the same category, sort by points (descending)
      if (b.points !== a.points) {
        return b.points - a.points;
      }
      
      // If same category and same points, sort by title
      return a.title.localeCompare(b.title);
    });

  } catch (error) {
    console.error('Error reading tasks data:', error);
    return [];
  }
}

/**
 * Get a single task by ID
 * @param {string} id - The task ID (filename without .md extension)
 * @returns {Promise<Object|null>} Task object with metadata and HTML content
 */
export async function getTaskData(id) {
  try {
    const fullPath = path.join(tasksDirectory, `${id}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Task file not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and HTML content
    return {
      id,
      contentHtml,
      ...matterResult.data,
      // Ensure numeric fields are numbers
      points: Number(matterResult.data.points) || 0,
    };

  } catch (error) {
    console.error(`Error reading task data for ${id}:`, error);
    return null;
  }
}

/**
 * Get task categories with counts
 * @returns {Promise<Array>} Array of category objects with counts
 */
export async function getTaskCategories() {
  try {
    const allTasks = await getAllTasksData();
    const categoryMap = new Map();

    allTasks.forEach(task => {
      const category = task.category || 'Other';
      if (categoryMap.has(category)) {
        categoryMap.set(category, categoryMap.get(category) + 1);
      } else {
        categoryMap.set(category, 1);
      }
    });

    // Define the preferred order of categories
    const categoryOrder = ['Quick Win', 'Essential', 'Social Media', 'Advanced', 'Other'];

    return Array.from(categoryMap.entries())
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort((a, b) => {
        const indexA = categoryOrder.indexOf(a.name);
        const indexB = categoryOrder.indexOf(b.name);
        
        // If both categories are in the order array, sort by their position
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        
        // If only one is in the order array, prioritize it
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        
        // If neither is in the order array, sort alphabetically
        return a.name.localeCompare(b.name);
      });

  } catch (error) {
    console.error('Error getting task categories:', error);
    return [];
  }
}

/**
 * Get total possible points from all tasks
 * @returns {Promise<number>} Total points available
 */
export async function getTotalPossiblePoints() {
  try {
    const allTasks = await getAllTasksData();
    return allTasks.reduce((total, task) => total + (task.points || 0), 0);
  } catch (error) {
    console.error('Error calculating total points:', error);
    return 0;
  }
}
