import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Eye, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

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
import img11 from "../assets/projects/srinath_travels.png";
import img12 from "../assets/projects/seoul_k_foods.jpg";

const Projects = () => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768 ? true : false;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: isMobile ? 0.1 : 0.3, // lower threshold on mobile
  });

  const [filter, setFilter] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 12,
      title: "Seoul K Foods",
      description:
        "A fully functional and deployed Point of Sale (POS) system for Seoul K Foods, managing orders, inventory, and sales with a modern web interface.",
      image: img12,
      tags: ["React / Typescript", "Express.js", "Node.js", "Postgresql", "Tailwind CSS"],
      category: "Web App",
      githubUrl: "https://github.com/Kalana0001",
      demoUrl: "https://github.com/Kalana0001",
      details: {
        longTitle: "Restaurant Management & POS System (Korean Restaurant)",
        overview: "This project is a full-stack Restaurant Management and POS (Point of Sale) system designed specifically for modern restaurant operations. The platform replaces traditional manual workflows with a fully digital, role-based management system that integrates ordering, kitchen operations, inventory management, and financial analytics into a single application.",
        goals: "The system supports multiple staff roles and provides dedicated dashboards to ensure smooth communication between the front-of-house and back-of-house teams. It was designed to handle real restaurant workflows such as order processing, kitchen coordination, supplier management, stock tracking, and financial reporting.\n\nThe goal of the project was to build a complete operational platform for restaurants that improves efficiency, reduces human error, and provides real-time insights into business performance.",
        techStack: {
          frontend: [
            { name: "React with TypeScript", desc: "for scalable and type-safe UI development" },
            { name: "Vite", desc: "for fast development and optimized production builds" },
            { name: "Tailwind CSS", desc: "for responsive and modern styling" },
            { name: "Lucide React", desc: "for a consistent icon system" },
            { name: "Recharts", desc: "for analytics dashboards and visual reports" },
            { name: "React Router", desc: "for role-based navigation and page routing" },
            { name: "Axios", desc: "for secure API communication" }
          ],
          backend: [
            { name: "Node.js and Express.js", desc: "for building RESTful APIs" },
            { name: "Prisma ORM", desc: "as a modern database access layer" },
            { name: "PostgreSQL", desc: "for managing structured restaurant data" },
            { name: "JSON Web Token", desc: "for secure role-based authentication" },
            { name: "PDFKit", desc: "for automated receipt and document generation" },
            { name: "Multer", desc: "for handling image and document uploads" },
            { name: "Zod and Joi", desc: "for strong input validation" },
            { name: "Swagger", desc: "for automatic API documentation" }
          ]
        },
        roles: [
          {
            title: "Super Admin",
            desc: "Provides full system control including System configuration, Branch management, Audit logs, System backup and High-level business analytics."
          },
          {
            title: "Admin",
            desc: "Responsible for Menu and product management, Category and pricing, Supplier management, Staff account management, and Expense/revenue monitoring."
          },
          {
            title: "Cashier (POS System)",
            desc: "Fast interface for Table and order management, Real-time billing, Payment processing, Discount handling, and Automatic receipt generation."
          },
          {
            title: "Chef (Kitchen Display System)",
            desc: "Helps manage incoming orders with status tracking (Pending, Preparing, Ready), Recipe reference, and instant out-of-stock marking."
          },
          {
            title: "Stock Manager",
            desc: "Manages raw ingredient tracking, GRN management, Purchase order generation, Supplier relationship tracking, and Low stock monitoring."
          }
        ],
        advancedFeatures: [
          "Real-Time Workflow: Orders placed at POS are immediately visible in the kitchen.",
          "Inventory & Supplier Management: Tracks ingredient usage and manages purchase orders.",
          "Financial Analytics: Dashboards for daily sales, revenue trends, expense tracking, and profit calculations.",
          "Automated Document Generation: Professional receipts and GRNs generated via PDFKit.",
          "Notifications & Alerts: Alerts for new orders, low inventory, and system updates."
        ],
        architecture: "The project follows a modular architecture: Frontend (React SPA) → Backend REST API (Express.js) → Database Layer (Prisma ORM) → PostgreSQL Database. This structure ensures scalability, maintainability, and clean separation between application layers.",
        impact: "This project demonstrates the development of a complete restaurant operating platform, integrating front-of-house and back-of-house workflows into a unified digital system. It showcases full-stack development skills including system architecture, role-based access control, database design, API development, and interactive dashboard interfaces.",
        confidentialNote: "Seoul K Foods"
      }
    },
    {
      id: 11,
      title: "Srinath Travels",
      description:
        "A premium, fully deployed travel booking platform developed for Srinath Travels, streamlining the management of tours and travel services.",
      image: img11,
      tags: [
        "React / Typescript",
        "Postgresql",
        "Tailwind CSS",
        "WhatsApp Automation",
        "Express.js",
        "Node.js",
      ],
      category: "Web App",
      githubUrl: "https://github.com/Kalana0001",
      demoUrl: "https://github.com/Kalana0001",
      details: {
        longTitle: "SRINATH TRAVELS & TRANSPORT VERONA – Air Ticket Management System",
        overview: "This is a full-stack, enterprise-grade web application designed for a travel agency to manage air ticket bookings, visa services, tour packages, and cargo operations. It streamlines the workflow of administrators and salespersons while ensuring data security, operational efficiency, and customer satisfaction.",
        goals: "The system acts as a complete operational platform, replacing manual processes with digital, automated workflows for multi-product travel services.",
        techStack: {
          frontend: [
            { name: "React 19 with TypeScript", desc: "for modern, type-safe UI development" },
            { name: "Vite", desc: "for fast development and builds" },
            { name: "Tailwind CSS", desc: "for responsive styling" },
            { name: "Framer Motion", desc: "for smooth animations" },
            { name: "Recharts", desc: "for analytics dashboards" },
            { name: "React Router 7", desc: "for client-side navigation" },
            { name: "Lucide React", desc: "for consistent iconography" }
          ],
          backend: [
            { name: "Node.js & Express 5", desc: "for building scalable REST APIs" },
            { name: "PostgreSQL", desc: "as a robust relational database" },
            { name: "Prisma ORM", desc: "as a modern database access layer" },
            { name: "JWT & Bcrypt", desc: "for secure authentication and hashing" },
            { name: "Zod", desc: "for strong input validation" },
            { name: "Swagger", desc: "for API documentation" }
          ]
        },
        roles: [
          {
            title: "Admin Dashboard",
            desc: "Advanced Analytics, Multi-User Management, CRM, Cargo Management, Financial Oversight, Reporting, and Automation Controls (WhatsApp/Email)."
          },
          {
            title: "Sales Person Dashboard",
            desc: "Unified Booking Engine (Air Tickets, Visas, Tours), Customer Management, Receipt Generation (PDF), Sales Analytics, and Cargo Operations."
          }
        ],
        advancedFeatures: [
          "Advanced Analytics: Real-time overview of sales and profit margins.",
          "Automated WhatsApp Greetings: Meta/Twilio API integration for customer engagement.",
          "Comprehensive Reporting: Export detailed reports in Excel/PDF formats.",
          "Receipt Generation: Instant PDF confirmation for all bookings.",
          "Cargo & Shipment Tracking: Monitor logistics across different regions."
        ],
        architecture: "Modular API Structure with domain modules. Stateless Authentication (JWT). Client-Side State Management optimized for React 19. Schema-First Design using Prisma ORM for a single source of truth.",
        impact: "This project demonstrates full-stack development at a professional, enterprise level, integrating multi-role workflows, real-time analytics, document generation, and automated customer engagement.",
        confidentialNote: "Srinath Travels"
      }
    },
    {
      id: 1,
      title: "Springboot Travel Web",
      description:
        "A modern travel website with real-time updates and an easy-to-use interface, built with React, Spring Boot, and MySQL.",
      image: img1,
      tags: ["React", "Springboot", "CSS", "Mysql"],
      category: "Web App",
      githubUrl: "https://github.com/dkdesilva/travel_web_springboot.git",
      demoUrl: "https://github.com/dkdesilva/travel_web_springboot.git",
      details: {
        longTitle: "Springboot Travel Web Platform",
        overview: "A modern travel website with real-time updates and an easy-to-use interface, built with React, Spring Boot, and MySQL.",
        goals: "To provide a seamless travel booking experience with a robust backend to handle real-time reservations and user management.",
        techStack: {
          frontend: [{ name: "React", desc: "UI development" }, { name: "CSS", desc: "Styling" }],
          backend: [{ name: "Springboot", desc: "API & Logic" }, { name: "MySQL", desc: "Database" }]
        },
        roles: [{ title: "User", desc: "Browse and book travel packages." }, { title: "Manager", desc: "Manage listings and customer data." }],
        advancedFeatures: ["Real-time updates", "User authentication", "Responsive design"],
        impact: "Streamlines travel management and provides an intuitive platform for travelers."
      }
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
      demoUrl: "https://github.com/dkdesilva/travel_web_springboot.git",
      details: {
        longTitle: "Enterprise Admin & Analytics Dashboard",
        overview: "A fully functional admin dashboard for analytics and management with modern UI and dynamic charts.",
        goals: "To provide administrators with powerful tools to monitor business performance through data visualization.",
        techStack: {
          frontend: [{ name: "React", desc: "UI development" }, { name: "CSS", desc: "Styling" }],
          backend: [{ name: "Springboot", desc: "API & Logic" }, { name: "MySQL", desc: "Database" }]
        },
        roles: [{ title: "Admin", desc: "Full access to analytics and system settings." }],
        advancedFeatures: ["Dynamic Charts", "Real-time Analytics", "Data Management"],
        impact: "Enhances decision-making with clear, real-time data visualization."
      }
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
      demoUrl: "https://github.com/dkdesilva/PoliceProNet.git",
      details: {
        longTitle: "PoliceProNet - Law Enforcement Management System",
        overview: "A full-stack web application that streamlines police management with digital record keeping, case tracking, and efficient communication tools.",
        goals: "To digitize and secure law enforcement records while improving operational communication.",
        techStack: {
          frontend: [{ name: "React", desc: "Frontend interface" }, { name: "CSS", desc: "Styling" }],
          backend: [{ name: "Node.js", desc: "Server logic" }, { name: "MySQL", desc: "Database" }]
        },
        roles: [{ title: "Officer", desc: "Case entry and tracking." }, { title: "Admin", desc: "System oversight and user management." }],
        advancedFeatures: ["Secure Record Keeping", "Case Tracking", "Communication Tools"],
        impact: "Modernizes police department workflows and ensures data reliability."
      }
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
      demoUrl: "https://github.com/Kalana0001/Car-Rental-Web.git",
      details: {
        longTitle: "Modern Car Rental Landing Page",
        overview: "A responsive car rental web app frontend built with modern UI for easy booking and browsing.",
        goals: "To create an attractive and user-friendly interface for browsing available rental vehicles.",
        techStack: {
          frontend: [{ name: "React", desc: "UI Framework" }, { name: "CSS", desc: "Styling" }],
          backend: []
        },
        roles: [{ title: "Guest", desc: "Browse car listings and check availability." }],
        advancedFeatures: ["Responsive Design", "Modern UI", "Interactive Catalog"],
        impact: "Increases conversions by providing a high-quality user experience."
      }
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
      demoUrl: "https://github.com/Kalana0001/Ecommerce-Food-Web.git",
      details: {
        longTitle: "FoodieHub - Fullstack E-commerce Platform",
        overview: "A full-stack web application for online food ordering and delivery.",
        goals: "To provide a complete e-commerce solution for food vendors and customers.",
        techStack: {
          frontend: [{ name: "React", desc: "Ecommerce UI" }, { name: "CSS", desc: "Styling" }],
          backend: [{ name: "Node.js", desc: "Back-end API" }, { name: "MongoDB / MySQL", desc: "Databases" }]
        },
        roles: [{ title: "Customer", desc: "Browse food, add to cart, and checkout." }, { title: "Vendor", desc: "Manage menu items and orders." }],
        advancedFeatures: ["Cart Management", "Secure Checkout", "Order Tracking"],
        impact: "Enables food businesses to transition to digital sales easily."
      }
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
      demoUrl: "https://github.com/Kalana0001/clothing-store-demo.git",
      details: {
        longTitle: "FashionStore - Clothing Demo",
        overview: "A demo clothing website frontend with a modern design and easy product browsing.",
        goals: "Showcase apparel collections with a clean, high-performance web interface.",
        techStack: {
          frontend: [{ name: "HTML", name2: "CSS", desc: "Core web technologies" }],
          backend: []
        },
        roles: [{ title: "Visitor", desc: "Browse the latest fashion trends." }],
        advancedFeatures: ["Modern Layout", "Smooth Transitions", "Responsive View"],
        impact: "Provides a lightweight and aesthetically pleasing demo for fashion brands."
      }
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
      demoUrl: "https://github.com/Kalana0001/Car-Rental-Web.git",
      details: {
        longTitle: "GymMaster - Windows Management Software",
        overview: "A Windows-based gym management system built in C# for handling members, subscriptions, and attendance.",
        goals: "Digitize gym operations for better member tracking and subscription management.",
        techStack: {
          frontend: [{ name: "WinForms (C#)", desc: "Desktop framework" }],
          backend: [{ name: "MS SQL Server", desc: "Database" }]
        },
        roles: [{ title: "Manager", desc: "Member tracking and billing." }],
        advancedFeatures: ["Subscription Tracking", "Attendance Logging", "Financial Reports"],
        impact: "Improves administrative efficiency for gym owners."
      }
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
      demoUrl: "https://github.com/Kalana0001/smarthome.git",
      details: {
        longTitle: "Smart Home - IoT Solution",
        overview: "An IoT-based smart home solution that allows users to control devices through a Flutter app with NodeMCU integration.",
        goals: "To provide affordable and accessible home automation via a mobile interface.",
        techStack: {
          frontend: [{ name: "Flutter", desc: "Mobile Application" }],
          backend: [{ name: "NodeMCU (ESP8266)", desc: "Microcontroller" }, { name: "Firebase", desc: "Real-time DB" }]
        },
        roles: [{ title: "User", desc: "Control home devices remotely." }],
        advancedFeatures: ["Real-time Device Control", "Mobile App Integration", "IoT Connectivity"],
        impact: "Enhances home living through remote automation and smart energy use."
      }
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
      demoUrl: "https://github.com/dkdesilva/host-ss-project-test.git",
      details: {
        longTitle: "Guardian - Secure Web Wrapper",
        overview: "A secure web wrapper system providing authentication, authorization, and accounting for hosted applications.",
        goals: "To wrap external web applications in a secure layer for enterprise access control.",
        techStack: {
          frontend: [{ name: "React", desc: "Dashboard" }],
          backend: [{ name: "Node.js", desc: "Security Logic" }, { name: "MySQL", desc: "User Data" }, { name: "Cloudflare", desc: "Traffic Security" }]
        },
        roles: [{ title: "User", desc: "Securely access hosted apps." }, { title: "Admin", desc: "Manage access permissions." }],
        advancedFeatures: ["SSO Support", "Traffic Balancing", "Audit Logs"],
        impact: "Secures enterprise internal tools with a robust authentication layer."
      }
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
      demoUrl: "https://github.com/Kalana0001/MelorCraft.git",
      details: {
        longTitle: "MelorCraft - Music Experience UI",
        overview: "A frontend web project for a music app with a clean design and smooth navigation.",
        goals: "To design a visually appealing and intuitive music streaming interface.",
        techStack: {
          frontend: [{ name: "React", desc: "UI development" }, { name: "CSS", desc: "Styling" }],
          backend: []
        },
        roles: [{ title: "Guest", desc: "Browse and discover music." }],
        advancedFeatures: ["Smooth Navigation", "Responsive Player UI", "Clean Aesthetics"],
        impact: "Showcases high-level frontend design and user experience skills."
      }
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
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
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
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all cursor-pointer duration-300 ${filter === category
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-400/30"
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
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onDetailsClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>

        {/* See More Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8 md:mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
              className="px-6 md:px-8 py-2 md:py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg cursor-pointer"
            >
              {showMore ? "See Less" : "See More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  onDetailsClick,
}: {
  project: any;
  index: number;
  onDetailsClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/30 transition-all duration-300"
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
          {!project.details?.confidentialNote && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/30 transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
          )}
          <motion.button
            onClick={onDetailsClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-purple-500/30 transition-colors duration-300 cursor-pointer"
          >
            <Eye size={20} />
          </motion.button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
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
              className="px-2 md:px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/20 rounded-full text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="px-2 md:px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/20 rounded-full text-blue-300">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  if (!project.details) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-md bg-black/40"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-[#0f172a] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              {project.details.longTitle || project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1 text-xs bg-blue-500/20 border border-blue-400/20 rounded-full text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-12rem)] md:max-h-[calc(90vh-16rem)] custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-500 rounded-full" />
                  Project Overview
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.details.overview}
                </p>
                <p className="text-gray-400 leading-relaxed mt-4">
                  {project.details.goals}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-500 rounded-full" />
                  Role-Based System
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details.roles.map((role: any, i: number) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="font-bold text-blue-300 mb-2">{role.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{role.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-500 rounded-full" />
                  Advanced Features
                </h3>
                <ul className="space-y-3">
                  {project.details.advancedFeatures.map((feature: string, i: number) => (
                    <li key={i} className="flex gap-3 text-gray-400">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Tech Stack & Info */}
            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold text-white mb-4">Technology Stack</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Frontend</h4>
                    <ul className="space-y-2">
                      {project.details.techStack.frontend.map((tech: any, i: number) => (
                        <li key={i} className="text-sm">
                          <span className="text-white font-medium">{tech.name}</span>
                          <span className="text-gray-500 block text-xs">{tech.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">Backend</h4>
                    <ul className="space-y-2">
                      {project.details.techStack.backend.map((tech: any, i: number) => (
                        <li key={i} className="text-sm">
                          <span className="text-white font-medium">{tech.name}</span>
                          <span className="text-gray-500 block text-xs">{tech.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h3 className="text-lg font-bold text-white mb-2">Impact</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.details.impact}
                </p>
              </section>

              <div className="flex flex-col gap-3">
                {!project.details?.confidentialNote && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/10"
                  >
                    <Github size={18} />
                    View Repository
                  </a>
                )}
                {project.details.confidentialNote && (
                  <div className="mt-2 p-3 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <p className="text-[11px] text-gray-400 italic text-center leading-relaxed">
                      <span className="text-blue-400 font-semibold block mb-1">Confidential System</span>
                      Note: This system is deployed internally for <span className="text-blue-300">{project.details.confidentialNote}</span> and is not publicly accessible due to confidentiality.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
