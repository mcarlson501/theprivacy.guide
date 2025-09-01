import { getNewsData, getAllNewsData } from '../../../lib/news';
import ArticleClient from './ArticleClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    const articles = await getAllNewsData();
    console.log('generateStaticParams - Articles loaded:', articles.length);
    
    const params = articles
      .filter(article => article && (article.id || article.slug)) // Ensure article has valid identifier
      .map((article) => {
        const slug = article.slug || article.id;
        console.log('generateStaticParams - Creating param for:', slug);
        return {
          slug: slug,
        };
      });
    
    console.log('generateStaticParams - Generated params:', params);
    return params;
  } catch (error) {
    console.error('Error generating static params for news articles:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const article = await getNewsData(params.slug);
    return {
      title: `${article.title} - Privacy Pulse`,
      description: article.summary,
    };
  } catch (error) {
    return {
      title: 'Article Not Found - Privacy Pulse',
      description: 'The requested privacy news article could not be found.',
    };
  }
}

export default async function ArticlePage({ params }) {
  try {
    const article = await getNewsData(params.slug);
    return <ArticleClient article={article} />;
  } catch (error) {
    console.error('Error loading article:', error);
    notFound();
  }
}
