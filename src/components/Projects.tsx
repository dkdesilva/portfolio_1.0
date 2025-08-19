import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";

import img1 from "../assets/projects/spring_travel.png";
import img2 from "../assets/projects/policepronet.png";
import img3 from "../assets/projects/carrentel.png";
import img4 from "../assets/projects/food_dbms.png";
import img5 from "../assets/projects/cloathing.png";
import img6 from "../assets/projects/fitness_windows.png";
import img7 from "../assets/projects/iot.png";
import img8 from "../assets/projects/ss.png";
import img9 from "../assets/projects/melor_craft.png";
import img10 from "../assets/projects/admindash.png";

const Projects = () => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768 ? true : false;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: isMobile ? 0.1 : 0.3, // lower threshold on mobile
  });

  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Springboot Travel Web",
      description:
        "A modern travel website with real-time updates and an easy-to-use interface, built with React, Spring Boot, and MySQL.",
      image: img1,
      tags: ["React", "Springboot", "CSS", "Mysql"],
      category: "Web App",
      githubUrl: "https://github.com/dkdesilva/travel_web_springboot.git",
    },
    {
      id: 2,
      title: "Fully Functional Admin Dashboard",
      description:
        "A fully functional admin dashboard for analytics and management with modern UI and dynamic charts.",
      image: img10,
      tags: ["React", "Springboot", "CSS", "Mysql"],
      category: "Web App",
      githubUrl: "https://github.com/dkdesilva/travel_web_springboot.git",
    },
    {
      id: 3,
      title: "PoliceProNet Full stack Web",
      description:
        "A full-stack web application that streamlines police management with digital record keeping, case tracking, and efficient communication tools.",
      image: img2,
      tags: ["React", "Node.js", "CSS", "Mysql"],
      category: "Web App",
      githubUrl: "https://github.com/dkdesilva/PoliceProNet.git",
    },
    {
      id: 4,
      title: "Web Project For Car Rental App",
      description:
        "A responsive car rental web app frontend built with modern UI for easy booking and browsing.",
      image: img3,
      tags: ["React", "CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Kalana0001/Car-Rental-Web.git",
    },
    {
      id: 5,
      title: "Ecommerce Food Fullstack Web",
      description:
        "A full-stack web application for online food ordering and delivery, offering seamless browsing, cart management, and secure checkout.",
      image: img4,
      tags: ["React", "Node js", "CSS", "Mongo db", "Mysql"],
      category: "Web App",
      githubUrl: "https://github.com/Kalana0001/Ecommerce-Food-Web.git",
    },
    {
      id: 6,
      title: "Clothing Web Demo",
      description:
        "A demo clothing website frontend with a modern design and easy product browsing.",
      image: img5,
      tags: ["Html", "CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Kalana0001/clothing-store-demo.git",
    },
    {
      id: 7,
      title: "Windows Application (Gym Management System)",
      description:
        "A Windows-based gym management system built in C# for handling members, subscriptions, and attendance.",
      image: img6,
      tags: ["C#", "MS Sql Server"],
      category: "Other",
      githubUrl: "https://github.com/Kalana0001/Car-Rental-Web.git",
    },
    {
      id: 8,
      title: "Smart Home System With NodeMCU",
      description:
        "An IoT-based smart home solution that allows users to control devices through a Flutter app with NodeMCU integration.",
      image: img7,
      tags: ["Flutter", "NodeMCU"],
      category: "Mobile App",
      githubUrl: "https://github.com/Kalana0001/smarthome.git",
    },
    {
      id: 9,
      title: "Secure Web Wrapper",
      description:
        "A secure web wrapper system providing authentication, authorization, and accounting for hosted applications.",
      image: img8,
      tags: ["React", "Node js", "Mysql", "Cloudfare", "Vercel"],
      category: "Web App",
      githubUrl: "https://github.com/dkdesilva/host-ss-project-test.git",
    },
    {
      id: 10,
      title: "MelorCraft web Project",
      description:
        "A frontend web project for a music app with a clean design and smooth navigation.",
      image: img9,
      tags: ["React", "CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Kalana0001/MelorCraft.git",
    },
  ];

  const categories = ["All", "Web App", "Mobile App", "Other"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const visibleProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" ref={ref} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in design and
            development, from mobile apps to web platforms and design systems.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setFilter(category);
                setShowMore(false);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all cursor-pointer duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-400/30"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* See More Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8 md:mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="px-6 md:px-8 py-2 md:py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg cursor-pointer"
            >
              {showMore ? "See Less" : "See More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/30 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-40 md:h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Actions */}
        <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/30 transition-colors duration-300"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 md:mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="px-2 md:px-3 py-1 text-xs bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-purple-400/20 rounded-full text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="px-2 md:px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/20 rounded-full text-blue-300">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
