"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { alt: "Customer logo 1", src: "/images/logos/onecarnow.webp" },
    { alt: "Customer logo 2", src: "/images/logos/berkeley.webp" },
    { alt: "Customer logo 3", src: "/images/logos/hash_data_clean.webp" },
    { alt: "Customer logo 4", src: "/images/logos/fcbitalia.webp" },
    { alt: "Customer logo 5", src: "/images/logos/salesforce2.webp" },
    { alt: "Customer logo 6", src: "/images/logos/mulesoft_logo_icon_170933.webp" },
    { alt: "Customer logo 7", src: "/images/logos/datadeck.webp" },
    { alt: "Customer logo 8", src: "/images/logos/turnsc2.webp" },
];

const CustomerLogos = () => {
    return (
        <div className="container mx-auto py-10 px-6 overflow-hidden">
            {/* Header Text */}
            <h5 className="text-center text-2xl font-bold mb-6">
                Processing <span className="text-green-600">Millions</span> of documents monthly for companies, big and small
            </h5>

            {/* Logo Slider Container with Fade Effect */}
            <div className="relative w-full overflow-hidden" style={{ position: 'relative' }}>
                <motion.div
                    className="flex space-x-10"
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 10,
                        ease: "linear",
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => ( // Duplicate logos for seamless looping
                        <div key={index} className="relative w-[150px] h-[100px] flex-shrink-0">
                            <Image src={logo.src} alt={logo.alt} layout="fill" objectFit="contain" />
                        </div>
                    ))}
                </motion.div>
                {/* Fade effect overlays */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/80 to-transparent"></div>
            </div>
        </div>
    );
};

export default CustomerLogos;