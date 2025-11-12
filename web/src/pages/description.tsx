"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Gamepad2, Camera, Users, Car, Ticket } from "lucide-react";
import { Iphone } from "@/components/ui/iphone";
import { useState } from "react";

const items = [
  {
    number: 1,
    icon: Gamepad2,
    title: "Gamifikasi Eksplorasi Budaya",
    description:
      "Jelajahi tempat bersejarah sambil menyelesaikan misi dan tantangan unik. Kumpulkan poin dan naikkan level eksplorasimu!",
    image: "/Gamifikasi.svg", // Changed from './Gamifikasi.svg'
  },
  {
    number: 2,
    icon: Camera,
    title: "AR Artefak Sejarah",
    description:
      "Arahkan kamera ke benda bersejarah dan biarkan AI menjelaskan kisahnya dalam bentuk 3D interaktif dan narasi yang hidup.",
    image: "/AR-artefak.svg", // Changed from './ar-artefak.svg'
  },
  {
    number: 3,
    icon: Users,
    title: "Komunitas Penjelajah Budaya",
    description:
      "Bergabunglah dengan sesama pecinta budaya, bagikan pengalaman, dan temukan event budaya di kotamu.",
    image: "/komunitas.svg", // Changed from './komunitas.svg'
  },
  {
    number: 4,
    icon: Car,
    title: "Integrasi Transportasi & Insentif",
    description:
      "Rencanakan perjalananmu dengan rute transportasi umum terbaik. Dapatkan potongan tiket atau reward saat mengunjungi lokasi budaya.",
    image: "/transportasi.svg", // Changed from './transportasi.svg'
  },
  {
    number: 5,
    icon: Ticket,
    title: "Ekosistem Tiket & Hadiah",
    description:
      "Tukarkan poin eksplorasi dengan tiket museum, merchandise, atau diskon event budaya!",
    image: "/tiket.svg", // Changed from './tiket.svg'
  },
];

const childAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const accordionItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotateY: -60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const imageItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
    rotateY: 60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

// Add new variants for image transition
const imageTransitionVariants: Variants = {
  enter: {
    rotateY: 90,
    opacity: 0,
    scale: 0.8,
    x: 100,
  },
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    scale: 0.8,
    x: -100,
    transition: {
      duration: 0.3,
    },
  },
};

// Add mobile image transition variants
const mobileImageVariants: Variants = {
  enter: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

const Description = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const getCurrentImage = () => {
    if (!activeItem) return "/Splashscreen.svg";

    const itemNumber = parseInt(activeItem.split("-")[1]);
    const item = items.find((i) => i.number === itemNumber);
    return item?.image || "/Splashscreen.svg";
  };

  return (
    <section
      className="bg-white relative flex min-h-screen w-full flex-col items-center justify-center gap-8 py-12 overflow-x-hidden"
      id="sdk-Description"
    >
      <motion.div
        className="px-4 text-center font-glancyr text-black lg:w-full lg:max-w-7xl lg:px-12 w-full flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          variants={childAnimationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col text-center max-w-[90%] md:max-w-[80%] lg:max-w-[1200px] mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FF5721] mb-4">
            Fitur Unggulan Kelana
          </h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Setiap fitur dirancang untuk memberikan pengalaman budaya yang
            menarik, edukatif, dan penuh makna dalam setiap perjalananmu.
          </p>
        </motion.div>

        <motion.div
          className="w-full flex flex-col lg:flex-row gap-3 items-center justify-center mt-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="w-full lg:w-[60%] p-2" variants={fadeInUp}>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={activeItem}
              onValueChange={(value) => setActiveItem(value)}
            >
              {items.map((item) => (
                <motion.div
                  key={item.number}
                  variants={accordionItemVariants}
                  custom={item.number}
                  style={{ perspective: "1000px" }}
                >
                  <AccordionItem
                    value={`item-${item.number}`}
                    className="border-b border-gray-800"
                  >
                    <AccordionContent>
                      <motion.div
                        className="flex items-center justify-center w-20 h-20 rounded-2xl mt-5"
                        style={{
                          background: `#FFE6D4`,
                          border: "2px solid #FF5721",
                        }}
                        whileHover="hover"
                        initial="initial"
                        animate="initial"
                      >
                        <motion.div
                          className="bg-[#FF5721] w-12 h-12 rounded-xl relative overflow-hidden flex items-center justify-center"
                          variants={{
                            initial: {
                              scale: 1,
                              rotate: 0,
                            },
                            hover: {
                              scale: 1.1,
                              rotate: 10,
                            },
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                        >
                          <div className="w-full h-full inner-shadow absolute top-0 left-0"></div>
                          <div className="flex justify-center items-center w-full h-full relative z-10">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </AccordionContent>
                    <AccordionTrigger
                      className={`hover:no-underline cursor-pointer transition-all ${activeItem === `item-${item.number}` ? "py-0" : "py-6"}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-semibold">
                          {item.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <div className="flex flex-col lg:flex-row gap-4 border-b-2 border-[#FF5721] pb-5 items-start">
                        {item.description && (
                          <p className="text-black font-alexandria font-[350] text-lg text-start drop-shadow-[0_0_2px_rgba(255,255,255,0)] hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.7)] transition-all duration-300 flex-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="flex w-full lg:w-[40%] justify-center items-center"
            variants={imageItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ perspective: "1200px" }}
          >
            <div className="lg:w-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem || "default"}
                  variants={imageTransitionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                >
                  <Iphone src={getCurrentImage()} className="drop-shadow-2xl" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Description;
