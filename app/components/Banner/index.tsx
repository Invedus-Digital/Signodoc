"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="mx-auto max-w-7xl my-16 sm:py-16 px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                
                {/* COLUMN-1: Text Section */}
                <motion.div 
                    className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.button
                        className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-2 rounded-3xl tracking-wider hover:text-white hover:bg-black"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                    >
                        Secure & Fast
                    </motion.button>

                    <motion.h1 
                        className="py-3 text-4xl md:text-5xl lg:text-6xl font-bold text-darkpurple leading-tight"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Sign Documents <br /> Effortlessly & Securely
                    </motion.h1>

                    <motion.button
                        className="text-sm md:text-xl mt-5 font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        Get Started
                    </motion.button>
                </motion.div>

                {/* COLUMN-2: Image Section */}
                <motion.div                      className="lg:-m-24 lg:pt-20 hidden lg:block"                     initial={{ opacity: 0, x: 50 }}                      animate={{ opacity: 1, x: 0 }}                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}                 >                     <Image                          src="/images/banner/banner2.webp"                          alt="hero-image"                          width={800}                          height={642}                          className="rounded-lg shadow-xl"                     />                 </motion.div>

            </div>
        </div>
    );
};

export default Banner;
