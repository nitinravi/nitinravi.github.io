import { motion } from 'framer-motion';
import Vlabs from '../assets/Vlead.jpg'; 
import ez from '../assets/ez.png';
import drip from '../assets/drip.png';

const projects = [
  {
    title: 'Virtual Labs',
    description: 'MoE India funded project for online learning',
    link: 'https://core-labs-cbe.github.io/digilabs/',
    thumbnail: Vlabs, 
  },
  {
    title: 'EZ Learn',
    description: 'Cross platform app for learning through flashcards built in 1 week',
    link: '#',
    thumbnail: ez, 
  },
  {
    title: 'Drip',
    description: 'Full-stack e-commerce platform utilizing AI-driven image generation for designs',
    link: 'https://github.com/nitinravi/drip',
    thumbnail: drip,
  },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    rotate: [0, 1, -1, 0], // Subtle rotate animation
    boxShadow: '0px 15px 20px rgba(0, 0, 0, 0.3)', // Elevation effect on hover
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const Work = () => {
  return (
    <section id="work" className="min-h-screen flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold mb-12">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 md:px-12 lg:px-20">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-64 object-cover rounded-md mb-4 brightness-75"
              whileHover={{ scale: 1.05, filter: 'brightness(100%)' }}
              transition={{ duration: 0.3 }}
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-50">{project.title}</h3>
            <p className="text-lg text-gray-300 mb-4">{project.description}</p>
            <motion.a
              href={project.link}
              className="text-blue-400 hover:text-blue-500 underline"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
