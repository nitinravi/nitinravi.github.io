import { motion } from 'framer-motion';
import Moonji from '../assets/moonji.jpg';
import Resume from '../assets/Resume.pdf';

const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center">
      {/* Background Purple Circles */}
      <div className="absolute inset-0 z-0">
        <div className="bg-purple-300 opacity-20 blur-3xl rounded-full w-56 h-56 absolute top-32 right-20"></div>
        <div className="bg-purple-500 opacity-30 blur-3xl rounded-full w-96 h-96 absolute bottom-24 left-60"></div>
      </div>

      {/* Glassmorphic Card */}
      <motion.div
        className="relative z-10 p-10 backdrop-blur-3xl rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Moonji}
          alt="Nitin Ravi"
          className="rounded-full w-32 h-32 object-cover mb-6 shadow-md mx-auto"
        />
        <h1 className="text-4xl font-extrabold mb-4">Hi, I'm Nitin Ravi</h1>
        <p className="text-lg mb-6 text-gray-400">Mobile and Web App Developer | Product Enthusiast</p>
        <p className="text-lg mb-6 text-gray-400">SDE Intern @ LogicFlo.ai (Stealth Startup)</p>
        <div className="flex space-x-6 justify-center">
          <a href="https://github.com/nitinravi" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/nitin-ravi" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href={Resume} target="_blank" className="hover:text-blue-400 transition-colors">Resume</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
