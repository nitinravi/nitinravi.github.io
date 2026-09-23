import { useEffect, useState } from 'react';
import Resume from '../assets/Resume.pdf';
import { Frame } from './Sheet';

const LINKS = [
  { id: 'origin', label: 'Origin', index: '01' },
  { id: 'trajectory', label: 'Path', index: '02' },
  { id: 'work', label: 'Work', index: '03' },
  { id: 'toolkit', label: 'Toolkit', index: '04' },
  { id: 'contact', label: 'Contact', index: '05' },
];

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', ...LINKS.map((l) => l.id)];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ground/85 backdrop-blur-md border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <Frame>
        <div className="flex items-center justify-between h-14 gap-4">
          <a
            href="#home"
            onClick={handleNav('home')}
            style={{ fontStretch: '74%' }}
            className="font-display font-bold uppercase text-ink text-base tracking-[0.02em] shrink-0"
          >
            Nitin Ravi
          </a>

          {/* Section numbers are real: they match the markers down the page. */}
          <nav className="hidden sm:flex items-baseline gap-6">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNav(link.id)}
                className={`field transition-colors ${
                  active === link.id ? 'text-accent' : 'text-ink/50 hover:text-ink'
                }`}
              >
                <span className="tnum mr-1.5 opacity-50">{link.index}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="field text-ink hover:text-accent transition-colors"
            >
              Résumé ↗
            </a>
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
              className="field text-ink/50 hover:text-accent transition-colors"
            >
              {darkMode ? 'Day' : 'Night'}
            </button>
          </div>
        </div>
      </Frame>
    </header>
  );
};

export default Navbar;
