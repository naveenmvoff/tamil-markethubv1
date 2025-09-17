
import React from 'react';
import { articles } from '../data';
import { ArticleCategory } from '../types';
import ArticleCard from '../components/ArticleCard';

const CaseStudiesPage: React.FC = () => {
    const caseStudyArticles = articles.filter(a => a.category === ArticleCategory.CaseStudies);
  return (
    <div className="space-y-8">
      <section className="text-left">
        <h1 className="text-4xl font-extrabold tracking-tight">In-Depth Case Studies</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Long-form breakdowns of successful campaigns and strategies.
        </p>
      </section>

      <section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudyArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
