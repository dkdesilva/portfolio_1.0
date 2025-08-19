import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp, Github, Linkedin } from "lucide-react";
import Type from "./Typing";
import profimg1 from "../../assets/profileimg.png";
import { SiHackerrank, SiBlogger } from "react-icons/si";
import { AiOutlineDownload } from "react-icons/ai";

// Typing animation component
const TypingAnimation = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100 + delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [showRole, setShowRole] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const roleTimer = setTimeout(() => setShowRole(true), 1500);
    const descTimer = setTimeout(() => setShowDescription(true), 3000);

    return () => {
      clearTimeout(roleTimer);
      clearTimeout(descTimer);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex items-center justify-center pt-24 px-6 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold"
            >
              <span className="block text-gray-300 text-5xl md:text-5xl mb-2">
                <TypingAnimation text="Hi, I'm Kalana De Silva" />
              </span>
            </motion.h1>

            {/* Role typing effect */}
            {showRole && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                <Type />
              </motion.h2>
            )}

            {/* Description + Buttons */}
            {showDescription && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Crafting digital solutions that unite innovation with performance.
                  I build scalable, user-focused applications from front-end to back-end,
                  transforming ideas into seamless experiences that drive real impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Download CV */}
                  <motion.a
                    href="/Kalana-De-Silva-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 
                      bg-gradient-to-r from-pink-500 to-purple-500 
                      rounded-2xl font-semibold text-white shadow-lg 
                      hover:shadow-pink-500/25 transition-all duration-300 cursor-pointer"
                  >
                    <AiOutlineDownload size={20} />
                    Download CV
                  </motion.a>

                  {/* Contact */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-8 py-4 border-2 border-purple-400/50 rounded-2xl 
                      font-semibold text-purple-300 hover:bg-purple-400/10 
                      transition-all duration-300 cursor-pointer"
                  >
                    Get In Touch
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex space-x-6"
            >
              {[
                { Icon: Github, url: "https://github.com/dkdesilva" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/kalana-de-silva-088265277/" },
                { Icon: SiHackerrank, url: "https://www.hackerrank.com/profile/kalanasilva0101" },
                { Icon: SiBlogger, url: "https://code100journey.blogspot.com/" },
              ].map(({ Icon, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl 
                    bg-white/10 supports-[backdrop-filter]:backdrop-blur-md 
                    border border-white/20 text-gray-300 
                    hover:text-white hover:bg-white/20 
                    transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>

              <motion.div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                <motion.img
                  src={profimg1}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{
                    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
                  }}
                />
              </motion.div>

              {/* Floating glow effects */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 
                  bg-gradient-to-br from-pink-500 to-purple-500 
                  rounded-2xl opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 
                  bg-gradient-to-br from-blue-500 to-purple-500 
                  rounded-full opacity-20 blur-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-300"
          >
            <ChevronUp size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
