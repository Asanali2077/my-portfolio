import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Link to="/hobbies" className="text-gray-600 hover:text-gray-900 transition-colors">Hobbies</Link></motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/portfolio" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Portfolio</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
              <Link to="/hobbies" className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Hobbies</Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 