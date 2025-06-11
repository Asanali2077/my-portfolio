import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    {
      title: 'Getting Started with React and Tailwind CSS',
      excerpt: 'Learn how to build modern web applications using React and Tailwind CSS...',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Best Practices for Modern Web Development',
      excerpt: 'Discover the latest best practices and tools for modern web development...',
      date: 'March 10, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Building Responsive Web Applications',
      excerpt: 'A comprehensive guide to creating responsive web applications that work on all devices...',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-4 text-center"
      >
        Blog
      </motion.h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{article.date}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 hover:text-purple-600 font-medium transition-colors"
              >
                Read More →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 