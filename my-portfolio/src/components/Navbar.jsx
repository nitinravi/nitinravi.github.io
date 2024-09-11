import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <motion.nav
      className="w-full py-4 px-6 flex justify-between items-center sticky top-0 bg-transparent backdrop-blur-sm z-50 text-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-2xl font-bold">Nitin Ravi</div>
      <ul className="flex pr-14 space-x-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#work" className="hover:underline">Work</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
      <IconButton onClick={toggleDarkMode} color="inherit" className="transition-all duration-300 ease-in-out">
        {darkMode ? (
          <LightMode className="text-yellow-400" />
        ) : (
          <DarkMode className="text-blue-400" />
        )}
      </IconButton>
    </motion.nav>
  );
};

export default Navbar;
