
import React from 'react';
import { Link } from 'react-router-dom';
import { Article, Author } from '../types';
import { authors } from '../data';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const author = authors.find(a => a.id === article.authorId);

  return (
    <div className="bg-light-card dark:bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative">
          <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors duration-300"></div>
        </div>
        <div className="p-6">
          <p className="text-sm font-medium text-brand-primary dark:text-brand-secondary">{article.category}</p>
          <h3 className="mt-2 text-xl font-bold text-light-text dark:text-dark-text group-hover:text-brand-primary dark:group-hover:text-brand-secondary transition-colors">{article.title}</h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{article.excerpt}</p>
          <div className="mt-6 flex items-center">
            {author && (
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={author.avatarUrl} alt={author.name} />
              </div>
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-light-text dark:text-dark-text">{author?.name}</p>
              <div className="flex space-x-1 text-xs text-gray-500 dark:text-gray-400">
                <time dateTime={article.publishedDate}>{article.publishedDate}</time>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
