import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const newsDirectory = path.join(process.cwd(), 'content/news');

/**
 * Get all news articles from markdown files
 * @returns {Promise<Array>} Array of news articles with metadata and HTML content
 */
export async function getAllNewsData() {
  try {
    // Check if news directory exists
    if (!fs.existsSync(newsDirectory)) {
      console.warn('News directory does not exist:', newsDirectory);
      return [];
    }

    // Get file names under /content/news
    const fileNames = fs.readdirSync(newsDirectory);
    
    // Filter for .md files only
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.warn('No markdown files found in news directory');
      return [];
    }

    const allNewsData = await Promise.all(
      markdownFiles.map(async (fileName) => {
        try {
          // Remove ".md" from file name to get id
          const id = fileName.replace(/\.md$/, '');

          // Read markdown file as string
          const fullPath = path.join(newsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');

          // Use gray-matter to parse the post metadata section
          const matterResult = matter(fileContents);

          // Use remark to convert markdown into HTML string
          const processedContent = await remark()
            .use(remarkGfm)
            .use(html)
            .process(matterResult.content);
          const contentHtml = processedContent.toString();

          // Validate required frontmatter fields
          const requiredFields = ['title', 'date', 'category', 'summary'];
          const missingFields = requiredFields.filter(field => !matterResult.data[field]);
          
          if (missingFields.length > 0) {
            console.warn(`News article ${id} is missing required fields:`, missingFields);
          }

          // Ensure we have a valid date
          let articleDate;
          try {
            articleDate = new Date(matterResult.data.date);
            if (isNaN(articleDate.getTime())) {
              console.warn(`Invalid date for article ${id}:`, matterResult.data.date);
              articleDate = new Date(); // fallback to current date
            }
          } catch (error) {
            console.warn(`Error parsing date for article ${id}:`, error);
            articleDate = new Date(); // fallback to current date
          }

          // Combine the data with the id and HTML content
          const article = {
            id,
            slug: id, // Add explicit slug field
            contentHtml,
            ...matterResult.data,
            date: articleDate,
          };

          return article;
        } catch (error) {
          console.error(`Error processing news article ${fileName}:`, error);
          return null; // Return null for failed articles
        }
      })
    );

    // Filter out any null articles (failed to process)
    const validArticles = allNewsData.filter(article => article !== null);

    // Sort articles by date (newest first)
    return validArticles.sort((a, b) => b.date - a.date);

  } catch (error) {
    console.error('Error loading news data:', error);
    return [];
  }
}

/**
 * Get a specific news article by ID
 * @param {string} id - The news article ID
 * @returns {Promise<Object>} News article data
 */
export async function getNewsData(id) {
  const fullPath = path.join(newsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`News article not found: ${id}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
    date: new Date(matterResult.data.date),
  };
}

/**
 * Get recent news articles for homepage widget
 * @param {number} limit - Number of articles to return
 * @returns {Promise<Array>} Recent news articles
 */
export async function getRecentNews(limit = 3) {
  const allNews = await getAllNewsData();
  return allNews.slice(0, limit);
}

/**
 * Get news categories for filtering
 * @returns {Promise<Array>} Array of unique categories
 */
export async function getNewsCategories() {
  const allNews = await getAllNewsData();
  const categories = [...new Set(allNews.map(article => article.category))];
  return categories.sort((a, b) => a.localeCompare(b));
}
