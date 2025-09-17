
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ICONS, SITE_NAME } from '../constants';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'News & Trends', path: '/news' },
  { name: 'Campaigns', path: '/campaigns' },
  { name: 'Case Studies', path: '/case-studies' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-brand-primary dark:text-brand-secondary'
        : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary'
    } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-brand-primary dark:after:bg-brand-secondary after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    } hover:after:scale-x-100`;

  return (
    <header className="sticky top-0 z-50 bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="flex items-center space-x-2 text-xl font-extrabold text-light-text dark:text-dark-text">
              <ICONS.logo className="h-8 w-8 text-brand-primary" />
              <span>{SITE_NAME}</span>
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <ICONS.search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-secondary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-light-card dark:bg-dark-card py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
