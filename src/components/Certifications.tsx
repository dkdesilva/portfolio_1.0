import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Award,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/Certificates/Capture1.jpg";
import img2 from "../assets/Certificates/Capture2.jpg";
import img3 from "../assets/Certificates/Capture3.jpg";
import img4 from "../assets/Certificates/Capture4.jpg";
import img5 from "../assets/Certificates/Capture5.jpg";
import img6 from "../assets/Certificates/CSS.jpg";
import img7 from "../assets/Certificates/JavaOOP.jpg";
import img8 from "../assets/Certificates/javascript.jpg";
import img9 from "../assets/Certificates/PythonPractice.jpg";
import img10 from "../assets/Certificates/SQL LAnguage.jpg";
import img11 from "../assets/Certificates/diploma.jpg";

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const swiperRef = useRef<any>(null);

  const certifications = [
    {
      id: 1,
      title: "Angular Basics",
      issuer: "HackerRank",
      date: "2025",
      image: img1,
      credentialUrl:
        "https://drive.google.com/file/d/1AC9JSSs9KZ-ldZh6PxsRSxntPgpknvsj/view?usp=sharing",
      skills: ["Angular"],
    },
    {
      id: 2,
      title: "CSS Basics",
      issuer: "HackerRank",
      date: "2024",
      image: img2,
      credentialUrl:
        "https://drive.google.com/file/d/1AC9JSSs9KZ-ldZh6PxsRSxntPgpknvsj/view?usp=sharing",
      skills: ["CSS"],
    },
    {
      id: 3,
      title: "Java Basics",
      issuer: "HackerRank",
      date: "2024",
      image: img3,
      credentialUrl:
        "https://drive.google.com/file/d/1vdsThQ3Hw2PIpf4Lp24ZxczBnQ5PR55l/view?usp=sharing",
      skills: ["Java"],
    },
    {
      id: 4,
      title: "React Basics",
      issuer: "HackerRank",
      date: "2025",
      image: img4,
      credentialUrl:
        "https://drive.google.com/file/d/15Ye2en1US6bCQ3RtQjJNgHtWEmq99z24/view?usp=sharing",
      skills: ["React Js"],
    },
    {
      id: 5,
      title: "Sql Basics",
      issuer: "HackerRank",
      date: "2024",
      image: img5,
      credentialUrl:
        "https://drive.google.com/file/d/12e7ISdauCEyBc5k5Woib1Mzl3XMw59Io/view?usp=sharing",
      skills: ["SQL"],
    },
    {
      id: 6,
      title: "CSS Animation",
      issuer: "LinkedIn",
      date: "2024",
      image: img6,
      credentialUrl:
        "https://drive.google.com/file/d/1r1oy-oducvFnpor3A-kyTdH40uNjmusj/view?usp=sharing",
      skills: ["CSS", "Interactive Web Content"],
    },
    {
      id: 7,
      title: "Java OOP",
      issuer: "LinkedIn",
      date: "2024",
      image: img7,
      credentialUrl:
        "https://drive.google.com/file/d/1cmG0u4-odDOxcJWovfu99-fpYFnE8o0p/view?usp=sharing",
      skills: ["Java", "OOP"],
    },
    {
      id: 8,
      title: "JavaScript With OOP",
      issuer: "LinkedIn",
      date: "2024",
      image: img8,
      credentialUrl:
        "https://drive.google.com/file/d/1ziD-EjSHl_thbI3HNjgV2a23Tytn3bKu/view?usp=sharing",
      skills: ["Javascript"],
    },
    {
      id: 9,
      title: "Python with OOP",
      issuer: "LinkedIn",
      date: "2024",
      image: img9,
      credentialUrl:
        "https://drive.google.com/file/d/19MWCSLhsjqnSY4u2TsIyxQGnCspILAv8/view?usp=sharing",
      skills: ["Python", "OOP"],
    },
    {
      id: 10,
      title: "Sql Database Language",
      issuer: "LinkedIn",
      date: "2024",
      image: img10,
      credentialUrl:
        "https://drive.google.com/file/d/1tGrY2GFSI6AIwSfe4WAvycLsFMn1ih1M/view?usp=sharing",
      skills: ["SQL"],
    },
    {
      id: 11,
      title: "Diploma In SE",
      issuer: "Nibm",
      date: "2024",
      image: img11,
      credentialUrl:
        "https://drive.google.com/file/d/1RZVQEz8mYx_BdFGRU1DjOtXnx_1G_JRH/view?usp=sharing",
      skills: ["Java", "C#", "React", "HTML", "CSS", "SQL", "Figma", "Node"],
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development through
            industry-recognized certifications and specialized training
            programs.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            allowTouchMove={true}
            breakpoints={{
              0: { slidesPerView: 1 }, // Mobile
              640: { slidesPerView: 2 }, // Small tablets
              1024: { slidesPerView: 3 }, // Laptops
              1280: { slidesPerView: 4 }, // Desktops
            }}
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={cert.id} className="flex h-full">
                <CertificationCard
                  cert={cert}
                  index={index}
                  inView={inView}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* Custom Navigation Buttons */}
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 -left-12 -translate-y-1/2 z-10 
                        flex items-center justify-center w-10 h-10 
                        rounded-full bg-black/40 text-yellow-400 
                        cursor-pointer hover:bg-yellow-500/20 transition"
            >
              <ChevronLeft size={20} />
            </div>

            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-1/2 -right-12 -translate-y-1/2 z-10 
                        flex items-center justify-center w-10 h-10 
                        rounded-full bg-black/40 text-yellow-400 
                        cursor-pointer hover:bg-yellow-500/20 transition"
            >
              <ChevronRight size={20} />
            </div>

        </div>
      </div>
    </section>
  );
};

const CertificationCard = ({
  cert,
  index,
  inView,
}: {
  cert: any;
  index: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: 45 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
      }}
      className="group relative mb-10 flex flex-col h-[330px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-400/30 transition-all duration-300 flex flex-col h-full">
        <div className="relative p-6 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl">
              <Award size={24} className="text-white" />
            </div>
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <motion.img
                src={cert.image}
                alt={cert.issuer}
                whileHover={{ scale: 1.1 }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <Calendar size={16} />
              <span className="text-sm">{cert.date}</span>
            </div>
            <motion.a
              href={cert.credentialUrl}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/10 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        <div className="p-6 pt-0 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
            {cert.title}
          </h3>
          <p className="text-gray-400 mb-4">{cert.issuer}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {cert.skills.map((skill: string, skillIndex: number) => (
              <motion.span
                key={skillIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                className="px-3 py-1 text-xs bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-orange-400/20 rounded-full text-yellow-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Shine animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </motion.div>
  );
};

export default Certifications;
