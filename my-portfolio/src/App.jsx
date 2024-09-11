import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Enforce black text color in light mode
    if (!darkMode) {
      document.body.style.color = 'black';
    } else {
      document.body.style.color = 'white';
    }
  }, [darkMode]);



  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      <div className="bg-gradient-to-br from-darkBlue to-darkerBlue dark:bg-gradient-to-br dark:from-darkBlue dark:to-darkerBlue transition-colors duration-300 ease-in-out">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="px-6 md:px-12 lg:px-20">
          <Home />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
