import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/hobbies" className="text-gray-600 hover:text-gray-900 transition-colors">Hobbies</Link></motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 