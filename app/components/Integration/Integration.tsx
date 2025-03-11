"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// List of logos
const collabApps = [
  { id: 1, title: "Google Drive", icon: "/images/logos/discord.png" },
  { id: 2, title: "Dropbox", icon: "/images/logos/figma.png" },
  { id: 3, title: "OneDrive", icon: "/images/logos/framer.png" },
  { id: 4, title: "Slack", icon: "/images/logos/notion.png" },
  { id: 5, title: "Zoom", icon: "/images/logos/photoshop.png" },
  { id: 6, title: "Trello", icon: "/images/logos/protopie.png" },
  { id: 7, title: "Notion", icon: "/images/logos/raindrop.png" },
  { id: 8, title: "Microsoft Teams", icon: "/images/logos/slack.png" },
];

// Floating and scaling animation
const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5], // Subtle floating up & down
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Tilt effect on hover
const hoverEffect = {
  whileHover: {
    scale: 1.2, // Scale up on hover
    rotateX: 10,
    rotateY: 10,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // 3D shadow effect
    transition: { duration: 0.3 },
  },
};

const Collaboration = () => {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-6 text-black bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Seamless Integrations</h2>
        <p className="text-gray-600 mt-2">
          Connect with your favorite tools effortlessly.
        </p>
      </div>

      {/* 3D Logo Section */}
      <motion.div
        className="relative flex flex-wrap justify-center gap-12 perspective-1000"
        initial="initial"
        animate="animate"
      >
        {collabApps.map((item) => (
          <motion.div
            key={item.id}
            className="relative w-[120px] h-[120px] bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200 transition-transform transform-gpu"
            variants={floatingVariants}
            whileHover={hoverEffect.whileHover}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={70}
              height={70}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Collaboration;
