import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Gallery from "./Gallery";
import ContactUs from "../components/ContactUs";
import bgVideo from "../assets/no1.mp4";
import logo from "../assets/logo.png";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setShowNavbarLogo(true);
      setShowWelcome(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Navbar */}
      <Navbar showLogo={showNavbarLogo} />

      {/* Splash Logo */}
      <AnimatePresence>
        {showSplash && (
       <motion.img
  src={logo}
  alt="KBTB"
  className="fixed z-[9999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  style={{ height: "auto" }}
  initial={{ width: 700 }}      // bada initial logo
  animate={{ width: 150, x: "-500px", y: "-250px" }}  // shrink to navbar
  exit={{ opacity: 0 }}
  transition={{ duration: 2, ease: "easeInOut" }}
/>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-4 sm:px-8">
          {showWelcome && (
            <>
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-6xl lg:text-8xl font-bold text-red-500"
              >
                Welcome to KBTS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-white"
              >
                Connecting Talent with Opportunities – Join us today!
              </motion.p>
            </>
          )}
        </div>
      </section>

      {/* Rest of sections */}
      <Hero />
      <Courses />
      <Gallery compact />
      <Features />
      <ContactUs />
    </div>
  );
}
