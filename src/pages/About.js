import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Node.js', level: 75 },
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="prose prose-lg mb-12 bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.01] transition-all duration-300"
      >
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate frontend developer with a keen eye for design and a love for creating
          intuitive, dynamic user experiences. With several years of experience in web development,
          I specialize in building modern, responsive web applications using React and other
          cutting-edge technologies.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Skills</h2>
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-[1.01] duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-900 text-lg">{skill.name}</span>
              <span className="text-gray-600 font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Experience</h2>
        <div className="space-y-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Frontend Developer</h3>
            <p className="text-gray-600 mb-4">Company Name • 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
              <li>Led the development of multiple React-based web applications</li>
              <li>Implemented responsive designs and optimized performance</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 