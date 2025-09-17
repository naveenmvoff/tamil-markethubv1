
import React from 'react';
import { ICONS, SITE_NAME } from '../constants';
import NewsletterCTA from './NewsletterCTA';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <NewsletterCTA />
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <ICONS.logo className="h-6 w-6 text-brand-primary" />
            <span className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</span>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">
              <ICONS.twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">
              <ICONS.linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
