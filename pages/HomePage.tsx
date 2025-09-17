
import React from 'react';
import { articles } from '../data';
import ArticleCard from '../components/ArticleCard';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">
          Creative Intelligence for Modern Marketers
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Your essential hub for marketing insights, campaign showcases, and industry trends that shape the future.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Link to="/campaigns" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-indigo-700 transition-all duration-300">
                Explore Campaigns
            </Link>
             <Link to="/news" className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-brand-primary dark:text-brand-secondary hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                Read News
            </Link>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Insights</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
