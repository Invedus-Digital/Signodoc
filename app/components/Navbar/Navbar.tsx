"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";
import { motion } from "framer-motion";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Resources", href: "#aboutus-section", current: true },
  { name: "Pricing", href: "#services-section", current: false },
  { name: "FAQ", href: "#faq-section", current: false },
  { name: "Solution", href: "/solution", current: false },
  { name: "Integrations", href: "/Integrations", current: false },
  { name: "API", href: "/docs", current: false },
];

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.nav
      className="bg-white shadow-md fixed w-full top-0 left-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl p-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <Link href="/" className="text-2xl sm:text-4xl font-serif text-black">
              Signodoc
            </Link>
          </motion.div>

          {/* LINKS (Desktop) */}
          <motion.div
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={classNames(
                    item.current ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-black",
                    "px-3 py-2 text-lg font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons & Contact Form (Desktop) */}
          <motion.div
            className="hidden lg:flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <motion.button
              className="text-lg font-semibold border border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Request a Demo
            </motion.button>
            <Contactusform />
          </motion.div>

          {/* Mobile Menu Icon */}
          <motion.div
            className="lg:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {!isOpen ? (
              <Bars3Icon className="h-7 w-7 text-gray-700 cursor-pointer" onClick={() => setIsOpen(true)} />
            ) : (
              <XMarkIcon className="h-7 w-7 text-gray-700 cursor-pointer" onClick={() => setIsOpen(false)} />
            )}
          </motion.div>
        </div>

        {/* Mobile Drawer (Sliding Menu) */}
        {isOpen && (
          <motion.div
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg p-6 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-black">Menu</h2>
              <XMarkIcon className="h-7 w-7 text-gray-700 cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            <div className="mt-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-gray-700 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button
                className="w-full text-lg font-semibold bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Request a Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
