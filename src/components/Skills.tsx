import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import icons
import { SiMysql, SiMariadb, SiSupabase, SiNextdotjs, SiSpringboot, SiMongodb, SiFlutter, SiTypescript, SiTailwindcss, SiCanva, SiIntellijidea, SiPostgresql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaReact, FaJava, FaGitAlt, FaDatabase, FaFigma, FaAngular, FaNodeJs } from "react-icons/fa";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // lowered for mobile so animation triggers
  });

  const skills = [
    { name: 'VISUAL STUDIO CODE', level: 99, category: 'Tools', icon: <BiLogoVisualStudio className="w-8 h-8 text-blue-400" /> },
    { name: 'VISUAL STUDIO', level: 90, category: 'Tools', icon: <DiVisualstudio className="w-8 h-8 text-indigo-400" /> },
    { name: 'INTELLIJ', level: 90, category: 'Tools', icon: <SiIntellijidea className="w-8 h-8 text-pink-400" /> },
    { name: 'GIT', level: 95, category: 'Tools', icon: <FaGitAlt className="w-8 h-8 text-orange-400" /> },
    { name: 'Figma', level: 90, category: 'Tools', icon: <FaFigma className="w-8 h-8 text-pink-500" /> },
    { name: 'CANVA', level: 99, category: 'Tools', icon: <SiCanva className="w-8 h-8 text-cyan-400" /> },

    { name: 'REACT JS', level: 95, category: 'Development', icon: <FaReact className="w-8 h-8 text-blue-400" /> },
    { name: 'NEXT JS', level: 88, category: 'Development', icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
    { name: 'JAVA', level: 80, category: 'Development', icon: <FaJava className="w-8 h-8 text-red-500" /> },
    { name: 'NODE JS', level: 90, category: 'Development', icon: <FaNodeJs className="w-8 h-8 text-green-500" /> },
    { name: 'SPRINGBOOT', level: 80, category: 'Development', icon: <SiSpringboot className="w-8 h-8 text-green-400" /> },
    { name: 'ANGULAR', level: 79, category: 'Development', icon: <FaAngular className="w-8 h-8 text-red-500" /> },
    { name: 'FLUTTER', level: 78, category: 'Development', icon: <SiFlutter className="w-8 h-8 text-cyan-400" /> },
    { name: 'TYPESCRIPT', level: 82, category: 'Development', icon: <SiTypescript className="w-8 h-8 text-blue-500" /> },
    { name: 'TAILWIND CSS', level: 90, category: 'Development', icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" /> },

    { name: 'MYSQL', level: 95, category: 'Data Base', icon: <SiMysql className="w-8 h-8 text-yellow-400" /> },
    { name: 'SUPABASE', level: 90, category: 'Data Base', icon: <SiSupabase className="w-8 h-8 text-green-300" /> },
    { name: 'MS SQL SERVER', level: 95, category: 'Data Base', icon: <FaDatabase className="w-8 h-8 text-blue-500" /> },
    { name: 'MONGO DB', level: 90, category: 'Data Base', icon: <SiMongodb className="w-8 h-8 text-green-500" /> },
    { name: 'MARIA DB', level: 95, category: 'Data Base', icon: <SiMariadb className="w-8 h-8 text-red-400" /> },
    { name: 'POSTGRE SQL', level: 92, category: 'Data Base', icon: <SiPostgresql className="w-8 h-8 text-sky-400" /> },
  ];

  const categories = ['Tools', 'Development', 'Data Base'];

  return (
    <section id="skills" ref={ref} className="py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning tools, development, and databases, 
            enabling me to create holistic digital solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {category}
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} inView={inView} />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index, inView }: { skill: any; index: number; inView: boolean }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center">
        {/* Circular Progress */}
        <div className="relative w-24 h-24 mb-4">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="transparent"
              className="text-gray-700"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={inView ? strokeDashoffset : strokeDasharray}
              strokeLinecap="round"
              initial={{ strokeDashoffset: strokeDasharray }}
              animate={{ strokeDashoffset: inView ? strokeDashoffset : strokeDasharray }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
              className="drop-shadow-lg"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              className="flex items-center justify-center w-12 h-12"
            >
              {skill.icon}
            </motion.div>
          </div>
        </div>

        <h4 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
          {skill.name}
        </h4>
        
        {/* Skill Level Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
          />
        </div>
        <p className="mt-2 text-sm text-gray-400">{skill.level}%</p>
      </div>
    </motion.div>
  );
};

export default Skills;
