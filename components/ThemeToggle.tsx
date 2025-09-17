
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ICONS } from '../constants';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full p-1 bg-gray-300 dark:bg-gray-700 relative transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-primary"
      aria-label="Toggle dark mode"
    >
      <div
        className="w-4 h-4 rounded-full bg-white dark:bg-dark-bg absolute top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(${theme === 'light' ? '4px' : '24px'}) translateY(-50%)` }}
      >
        {theme === 'light' 
          ? <ICONS.sun className="h-4 w-4 text-yellow-500" />
          : <ICONS.moon className="h-4 w-4 text-blue-400" />
        }
      </div>
    </button>
  );
};

export default ThemeToggle;
