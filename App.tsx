
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import CampaignsPage from './pages/CampaignsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};


const AnimatedRoutes: React.FC = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
                <Route path="/news" element={<AnimatedPage><NewsPage /></AnimatedPage>} />
                <Route path="/campaigns" element={<AnimatedPage><CampaignsPage /></AnimatedPage>} />
                <Route path="/case-studies" element={<AnimatedPage><CaseStudiesPage /></AnimatedPage>} />
                <Route path="/article/:id" element={<AnimatedPage><ArticleDetailPage /></AnimatedPage>} />
            </Routes>
        </AnimatePresence>
    );
};

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
    >
        {children}
    </motion.div>
);


const AppContent: React.FC = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return (
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg transition-colors duration-300">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
        {/* Framer motion for animations needs to be added as a dependency */}
        {/* For now, we will mock it */}
        <script dangerouslySetInnerHTML={{__html: `
            window.Framer = { AnimatePresence: ({children}) => children, motion: { div: ({children, ...props}) => <div {...props}>{children}</div> } };
        `}} />
        <AppContent />
    </ThemeProvider>
  );
};

export default App;
