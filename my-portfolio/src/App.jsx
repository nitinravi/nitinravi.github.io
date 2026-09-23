import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Origin from './components/Origin';
import Trajectory from './components/Trajectory';
import Work from './components/Work';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import useSmoothScroll from './hooks/useSmoothScroll';

const getInitialTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useSmoothScroll();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-ground text-ink">
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((v) => !v)} />
      <main>
        <Home />
        <Origin />
        <Trajectory />
        <Work />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
