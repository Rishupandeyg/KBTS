import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Gallery from "./Gallery";
import ContactUs from "../components/ContactUs";
import bgVideo from "../assets/no1.mp4";
import Preloader from "../components/Preloader"; // ✅ Preloader import

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Main content after preloader */}
      {!loading && (
        <>
          {/* Navbar */}
          <Navbar showLogo={true} />

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
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-red-500">
                Welcome to KBTS
              </h1>

              <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto text-white">
                Connecting Talent with Opportunities – Join us today!
              </p>
            </div>
          </section>

          {/* Other sections */}
          <Hero />
          <Courses />
          <Gallery compact />
          <Features />
          <ContactUs />
        </>
      )}
    </div>
  );
}
