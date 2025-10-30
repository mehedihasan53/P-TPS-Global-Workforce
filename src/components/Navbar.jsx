import { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Building2,
  LogIn,
  UserPlus,
  Phone,
} from "lucide-react"; // Using lucide-react for professional icons

// Helper component for the Logo
const Logo = ({ closeMenu }) => (
  <NavLink
    to="/"
    className="flex items-center space-x-2 p-2"
    onClick={closeMenu}
  >
    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-md shadow-lg">
      <span className="text-white font-extrabold text-sm">TPS</span>
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-lg text-gray-800 tracking-wide">
        TPS 360
      </span>
      <span className="text-xs text-gray-500 -mt-1 font-medium">
        Bangladesh
      </span>
    </div>
  </NavLink>
);

// Helper component for Navigation Links
const NavItem = ({ link, closeMenu }) => (
  <li>
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-white bg-blue-600 shadow-md" // Solid blue for active desktop link
            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }`
      }
      onClick={closeMenu}
    >
      {link.label}
    </NavLink>
  </li>
);

// Main Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Logo closeMenu={closeMenu} />
          </div>

          {/* Desktop Navigation Links (Center) */}
          <div className="hidden lg:flex items-center space-x-1">
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <NavItem key={link.path} link={link} closeMenu={closeMenu} />
              ))}
            </ul>
          </div>

          {/* Right Side: License, Auth & CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* License Badge */}
            <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs font-semibold text-green-800">
                RL-995
              </span>
            </div>

            {/* Auth Links */}
            <NavLink
              to="/signin"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2"
            >
              <LogIn className="w-4 h-4 inline mr-1" /> Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md shadow-md transition-colors duration-200"
            >
              <UserPlus className="w-4 h-4 inline mr-1" /> Sign Up
            </NavLink>

            {/* CTA Dropdown (Combined for cleaner look) */}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-4 py-2 rounded-md shadow-lg transition-all duration-200">
                Get Started <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top-right z-50">
                <div className="py-1">
                  <NavLink
                    to="/contact"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                    onClick={closeMenu}
                  >
                    <Briefcase className="w-4 h-4 mr-2 text-orange-500" /> Apply
                    for Jobs
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600"
                    onClick={closeMenu}
                  >
                    <Building2 className="w-4 h-4 mr-2 text-green-500" /> Hire
                    Workers
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button (Right Side) */}
          <div className="lg:hidden flex items-center">
            {/* Mobile Contact Button for quick access */}
            <NavLink
              to="/contact"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md shadow-md transition-colors duration-200 mr-3"
              onClick={closeMenu}
            >
              <Phone className="w-4 h-4 inline" />
            </NavLink>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Transitioned) */}
      <div
        className={`lg:hidden transition-all ease-in-out duration-300 overflow-hidden ${
          isOpen
            ? "max-h-screen opacity-100 py-3 border-t border-gray-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white bg-blue-600"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Auth & CTA Buttons */}
        <div className="px-4 py-3 border-t border-gray-100 space-y-2">
          <NavLink
            to="/signin"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            onClick={closeMenu}
          >
            <LogIn className="w-4 h-4 mr-2" /> Sign In
          </NavLink>
          <NavLink
            to="/signup"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-colors"
            onClick={closeMenu}
          >
            <UserPlus className="w-4 h-4 mr-2" /> Sign Up
          </NavLink>
        </div>

        {/* Mobile CTA Buttons */}
        <div className="px-4 pt-3 pb-2 space-y-2">
          <NavLink
            to="/contact"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
            onClick={closeMenu}
          >
            <Briefcase className="w-4 h-4 mr-2" /> Apply for Jobs
          </NavLink>
          <NavLink
            to="/contact"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            onClick={closeMenu}
          >
            <Building2 className="w-4 h-4 mr-2" /> Hire Workers
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
