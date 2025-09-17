
import React from 'react';

const NewsletterCTA: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark-bg rounded-xl p-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
        Stay Ahead of the Curve.
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
        Get the latest marketing news, insights, and campaign breakdowns delivered to your inbox weekly.
      </p>
      <form className="mt-8 sm:flex justify-center max-w-lg mx-auto">
        <label htmlFor="email-address" className="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary rounded-md dark:bg-dark-card"
          placeholder="Enter your email"
        />
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary dark:bg-brand-secondary dark:hover:bg-pink-700 transition-all duration-300"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterCTA;
