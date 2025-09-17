// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/homeAssets";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const currentPath = location.pathname.slice(1) || "home";
    setActiveItem(currentPath.toLowerCase());
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", slug: "home" },
    { label: "Services", slug: "services" },
    { label: "Portfolio", slug: "portfolio" },
    { label: "About US", slug: "about" },
    { label: "Contact US", slug: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg"
          : "bg-[#FFFFFF0D] backdrop-blur-lg"
      }`}
    >
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-10 xl:px-30 lg:px-5 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.Logo} alt="Logo" className="h-6 w-auto" />
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center sat-font gap-8 px-6 py-3 rounded-full border border-[#494949] bg-transparent backdrop-blur-md">
            {navItems.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.slug === "home" ? "/" : `/${item.slug}`}
                  onClick={() => handleNavClick(item.slug)}
                  className={`text-sm font-medium transition ${
                    activeItem === item.slug
                      ? "cyan-text"
                      : "text-white hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <a className="hidden lg:flex cyan-back sat-font cursor-pointer text-black font-medium text-base px-6 py-2 rounded-full items-center justify-center gap-2 transition-colors duration-300">
          Notify Me
          <img src={assets.arrow} alt="Arrow" className="w-5 h-auto" />
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              className="text-2xl cyan-text cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <FaBars
              className="text-2xl cyan-text cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-6 pt-6">
            <FaTimes
              className="text-3xl text-[#00ffff] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <div className="flex flex-col justify-center h-full px-6 pb-20">
            {/* Mobile Navigation - Stacked Buttons */}
            <div className="space-y-4 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.slug}
                  to={item.slug === "home" ? "/" : `/${item.slug}`}
                  onClick={() => handleNavClick(item.slug)}
                  className={`block w-full text-center py-4 px-6 rounded-full border transition-colors duration-300 ${
                    activeItem === item.slug
                      ? "bg-[#00ffff] text-black border-[#00ffff]"
                      : "border-gray-700 text-white hover:border-[#00ffff] hover:text-[#00ffff]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Button */}
            <button className="cyan-back sat-font cursor-pointer text-black font-medium text-base px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 w-full">
              Notify Me
              <img src={assets.arrow} alt="Arrow" className="w-5 h-auto" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
