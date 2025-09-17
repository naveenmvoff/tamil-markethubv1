
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, authors } from '../data';
import { ICONS } from '../constants';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  const author = article ? authors.find(auth => auth.id === article.authorId) : undefined;

  if (!article || !author) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/" className="mt-4 inline-block text-brand-primary hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto py-8">
      <header className="mb-8">
        <p className="text-base text-brand-primary dark:text-brand-secondary font-semibold tracking-wide uppercase">{article.category}</p>
        <h1 className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-light-text dark:text-dark-text sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-6 flex justify-center items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src={author.avatarUrl} alt={author.name} />
          </div>
          <div className="ml-4 text-left">
            <p className="text-sm font-medium text-light-text dark:text-dark-text">{author.name}</p>
            <div className="flex space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <time dateTime={article.publishedDate}>{article.publishedDate}</time>
            </div>
          </div>
        </div>
      </header>
      
      <img src={article.imageUrl} alt={article.title} className="w-full rounded-lg shadow-lg mb-8" />
      
      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />

      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
            <span className="font-medium">Tags:</span>
            {article.tags.map(tag => (
                <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
        </div>
        <div className="mt-8 bg-gray-50 dark:bg-dark-card p-6 rounded-lg flex items-start space-x-4">
            <img className="h-16 w-16 rounded-full" src={author.avatarUrl} alt={author.name} />
            <div>
                <h4 className="text-lg font-bold">About {author.name}</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{author.bio}</p>
                <div className="mt-2 flex space-x-3">
                    {author.socialLinks.twitter && <a href={author.socialLinks.twitter} className="text-gray-400 hover:text-brand-primary"><ICONS.twitter className="h-5 w-5"/></a>}
                    {author.socialLinks.linkedin && <a href={author.socialLinks.linkedin} className="text-gray-400 hover:text-brand-primary"><ICONS.linkedin className="h-5 w-5"/></a>}
                </div>
            </div>
        </div>
      </footer>
    </article>
  );
};

export default ArticleDetailPage;
