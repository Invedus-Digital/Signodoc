"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Video = () => {
    return (
        <div id="aboutus-section" className="relative">
            <div className="mx-auto max-w-7xl h-[80vh] px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative overflow-hidden">
                
                {/* Background Dots Image */}
                   <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />

                {/* Background Video */}
                <motion.video
                    src="/video/herovideo.mp4" // Ensure the video is in the "public/video" folder
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Overlay Content */}
               
            </div>
        </div>
    );
};

export default Video;
