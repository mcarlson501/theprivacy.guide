import { getTaskData, getAllTasksData } from '../../../lib/tasks';
import TaskDetailClient from './TaskDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const tasks = await getAllTasksData();
  return tasks.map((task) => ({
    slug: task.id,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const task = await getTaskData(params.slug);
    return {
      title: `${task.title} - The Privacy Guide`,
      description: task.description,
    };
  } catch (error) {
    return {
      title: 'Task Not Found - The Privacy Guide',
      description: 'The requested privacy task could not be found.',
    };
  }
}

export default async function TaskPage({ params }) {
  try {
    const task = await getTaskData(params.slug);
    return <TaskDetailClient task={task} />;
  } catch (error) {
    console.error('Error loading task:', error);
    notFound();
  }
}
