import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcase,
  FaInfoCircle,
  FaImages,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const dashboardPath = () => {
    if (!user) return "/login";
    if (user.role === "candidate") return "/dashboard/candidate";
    if (user.role === "employer") return "/dashboard/employer";
    if (user.role === "admin") return "/dashboard/admin";
    return "/";
  };

  // Home page pe animation, baki pages pe normal
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                {isHome ? (
                  <motion.img
                    src={logo}
                    alt="KBTB"
                    className="h-auto w-[150px]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <img src={logo} alt="KBTB" className="h-auto w-[150px]" />
                )}
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 font-bold text-red-500">
              <Link
                to="/"
                className="flex flex-col items-center group hover:text-red-600"
              >
                <FaHome className="text-xl mb-1 group-hover:scale-110 transition" />
                <span>Home</span>
              </Link>
              <Link
                to="/job"
                className="flex flex-col items-center group hover:text-red-600"
              >
                <FaBriefcase className="text-xl mb-1 group-hover:scale-110 transition" />
                <span>Job</span>
              </Link>
              <Link
                to="/gallery"
                className="flex flex-col items-center group hover:text-red-600"
              >
                <FaImages className="text-xl mb-1 group-hover:scale-110 transition" />
                <span>Gallery</span>
              </Link>

              {/* AboutUs Dropdown */}
              <div
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <FaInfoCircle className="text-xl mb-1 group-hover:scale-110 transition" />
                <span className="cursor-pointer hover:text-red-600">
                  AboutUs
                </span>
                {aboutOpen && (
                  <div className="absolute top-full mt-2 w-40 bg-white text-red-500 font-bold shadow-lg rounded-md overflow-hidden z-50">
                    <Link
                      to="/about"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                    >
                      AboutUs
                    </Link>
                    <Link
                      to="/our-vision"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                    >
                      Our Vision
                    </Link>
                    <Link
                      to="/our-mission"
                      className="block px-4 py-2 hover:bg-red-500 hover:text-white transition"
                    >
                      Our Mission
                    </Link>
                  </div>
                )}
              </div>

              {/* Auth Links */}
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="flex flex-col items-center group hover:text-red-600"
                  >
                    <FaSignInAlt className="text-xl mb-1 group-hover:scale-110 transition" />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex flex-col items-center group hover:text-red-600"
                  >
                    <FaUserPlus className="text-xl mb-1 group-hover:scale-110 transition" />
                    <span>Register</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={dashboardPath()}
                    className="flex flex-col items-center group hover:text-red-600"
                  >
                    <FaUser className="text-xl mb-1 group-hover:scale-110 transition" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex flex-col items-center group hover:text-red-600"
                  >
                    <FaSignOutAlt className="text-xl mb-1 group-hover:scale-110 transition" />
                    <span>Logout</span>
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <FaBars size={28} className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar / Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-full w-3/4 sm:w-64 bg-black text-red-500 z-[9999] shadow-lg"
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={28} className="text-red-500" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 mt-10 ml-6 font-bold">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/job"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <FaBriefcase /> Job
          </Link>
          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <FaImages /> Gallery
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <FaInfoCircle /> AboutUs
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <FaSignInAlt /> Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <FaUserPlus /> Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to={dashboardPath()}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2"
              >
                <FaUser /> Profile
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-2">
                <FaSignOutAlt /> Logout
              </button>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
