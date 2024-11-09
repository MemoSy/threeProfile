"use client";

import { Leva } from "leva";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import HeroCamera from "./HeroCamera";
import Target from "./Target";
import ReactLogo from "./ReactLogo";
import Rings from "./Rings";
import Cube from "./Cube";
import CanvasLoader from "./Loading";
import { calculateSizes } from "@/constants";
import { Model } from "./1";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  // Use media queries to determine screen size
  const [isHovered, setIsHovered] = useState(false);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const words = "Designing and Developing Modern Web Experiences";

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Mahmud <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          <TextGenerateEffect words={words} />
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <Model
                scale={[4.2, 4.2, 4.2]}
                position={sizes.deskPosition}
                rotation={[0, -1.1, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 flex justify-center right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit flex justify-center">
          <motion.button
            className="bg-black-300 text-white px-6 py-3 rounded-full flex gap-4 items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="relative flex h-3 w-3">
              <span className="btn-ping"></span>
              <span className="btn-ping_dot"></span>
            </span>
            <span className="font-semibold">Scroll Down</span>
            <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <Mouse className="w-5 h-5" />
            </motion.div>
            <motion.div
              className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
              animate={{
                y: isHovered ? [0, 6, 0] : 0,
                opacity: isHovered ? [0, 1, 0] : 0,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
