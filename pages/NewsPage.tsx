
import React from 'react';
import { articles } from '../data';
import { ArticleCategory } from '../types';
import ArticleCard from '../components/ArticleCard';

const NewsPage: React.FC = () => {
  const newsArticles = articles.filter(a => a.category === ArticleCategory.News || a.category === ArticleCategory.Opinions);

  return (
    <div className="space-y-8">
      <section className="text-left">
        <h1 className="text-4xl font-extrabold tracking-tight">News & Trends</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Quick, snackable updates on everything happening in the marketing world.
        </p>
      </section>

      <section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
