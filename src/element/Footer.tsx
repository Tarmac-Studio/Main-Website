import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets, socials } from "../assets/homeAssets";

const Footer: React.FC = () => {
  // const [setMenuOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("home");
  const handleNavClick = (item: string) => {
    setActiveItem(item);
    // setMenuOpen(false);
  };
  const navItems = [
    { label: "Home", slug: "home" },
    { label: "Services", slug: "services" },
    { label: "Portfolio", slug: "portfolio" },
    { label: "About US", slug: "about" },
    { label: "Contact US", slug: "contact" },
  ];

  return (
    <footer className="bg-black text-white py-30 pb-10">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-12 lg:mb-16">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="main-text font-medium text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 md:max-w-lg w-full">
              Ready to bring your startup to life?
            </h2>

            <p className="text-[#E3E3E5] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              Let's talk – and we will map out your launch plan together.
            </p>
          </div>

          {/* Right Side - Buttons */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-12 flex flex-col items-center lg:items-start justify-center gap-4 sm:gap-5 px-4  lg:px-5">
            <Link
              to="https://calendly.com/tarmacdigitalstudio"
              target="blank"
              className="border-2 border-[#00FFFF] cyan-text px-6 sm:px-8 py-2 md:py-3 lg:py-4 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium w-full lg:max-w-[450px] text-center transition-colors duration-300 "
            >
              Book a Strategy Call
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#00FFFF] text-black cyan-back px-6 sm:px-8 py-2 md:py-3 lg:py-4 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium w-full lg:max-w-[450px] text-center transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t footer-border pt-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 items-center gap-6  px-6 xl:px-30 lg:px-5">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <img src={assets.darkLogo} alt="Logo" className="h-6 w-auto" />
          </div>

          {/* Social Icons - Center */}
          <div className="flex items-center justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={social.icon}
                  alt="social-icon"
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-end">
            <nav className="border border-[#494949] rounded-full px-6 py-3">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={item.slug === "home" ? "/" : `/${item.slug}`}
                      onClick={() => handleNavClick(item.slug)}
                      className={`text-sm font-medium transition ${
                        activeItem === item.slug
                          ? "cyan-text"
                          : "text-white hover:text-[#00ffff]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden px-6 ">
          {/* Logo and Social Icons */}
          <div className="flex items-center justify-between mb-8">
            <img src={assets.darkLogo} alt="Logo" className="h-6 w-auto" />
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.alt}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  <img
                    src={social.icon}
                    alt="social-icon"
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation - Stacked Buttons */}
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                to={item.slug === "home" ? "/" : `/${item.slug}`}
                onClick={() => handleNavClick(item.slug)}
                className={`block w-full text-center py-2 px-6 rounded-full border transition-colors duration-300 ${
                  activeItem === item.slug
                    ? "bg-[#00ffff] text-black cyan-back"
                    : "border-white text-white hover:border-[#00ffff] hover:text-[#00ffff] "
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
