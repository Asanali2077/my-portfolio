import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profileImg from '../assets/photo_2025-06-10_15-01-33.jpg';

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Asanali2077', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/asanali-ashimov-740bb2327', label: 'LinkedIn' },
    { icon: FaTelegramPlane, url: 'https://t.me/asanaliashim', label: 'Telegram' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000" />

      {/* Main content wrapper */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Profile section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md p-6 mb-10 mx-auto max-w-2xl"
        >
          {/* Photo */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center mb-4 md:mb-0 md:mr-8 flex-shrink-0">
            <img
              src={profileImg}
              alt="Ashimov Asanali"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Info */}
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ashimov Asanali</h2>
            <p className="text-gray-600 mb-2">
              Frontend Developer passionate about building beautiful and functional web experiences.
            </p>
            <p className="text-gray-500 text-sm">
              Kazakhstan • Open to new opportunities
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ashimov Asanali</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 mb-8"
          >
            A passionate frontend developer crafting beautiful and functional web experiences
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <Link
            to="/portfolio"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 hover:shadow-blue-200"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-white text-gray-800 px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 border border-gray-200"
          >
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transform hover:scale-110 transition-transform bg-white p-3 rounded-full shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6" />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12"
        >
          <Link to="/about" className="flex justify-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 