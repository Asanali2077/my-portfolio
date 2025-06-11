import React from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Chess',
      description: 'A strategic board game that sharpens the mind and requires deep thinking.',
      image: 'https://images.unsplash.com/photo-1529699211952-73602f23f6eb?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Football',
      description: 'Playing and following football, enjoying the teamwork and excitement of the beautiful game.',
      image: 'https://images.unsplash.com/photo-1531737151740-449e29789c66?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Basketball',
      description: 'A fast-paced sport that combines athleticism, strategy, and precision.',
      image: 'https://images.unsplash.com/photo-1516450626388-bbcc485459b9?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cycling',
      description: 'Exploring new places and staying active while enjoying the open road.',
      image: 'https://images.unsplash.com/photo-1453227588066-291778ea2259?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Computer Games',
      description: 'Engaging in various computer games for relaxation and mental challenge, from strategy to adventure.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-4 text-center"
      >
        My Hobbies
      </motion.h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
          >
            <img
              src={hobby.image}
              alt={hobby.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{hobby.title}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hobbies; 