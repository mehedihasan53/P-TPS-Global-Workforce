// src/components/Footer.jsx
import { Link } from "react-router-dom";
import {
  Facebook,
  Linkedin,
  MessageSquare,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
    { name: "Job Openings", path: "/jobs" },
    { name: "Employer Services", path: "/employers" },
    { name: "Visa Process", path: "/visa" },
  ];

  const services = [
    "International Manpower Recruitment",
    "Construction & Skilled Labor",
    "Hospitality & Retail Staffing",
    "Visa Processing & Documentation",
    "Overseas Employment Consultancy",
    "Travel & Deployment Support",
  ];

  const partnerCountries = [
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Oman",
    "Kuwait",
    "Malaysia",
    "Singapore",
    "Bahrain",
    "Jordan",
    "Lebanon",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />,
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "#",
    },
    {
      name: "WhatsApp",
      icon: <MessageSquare className="w-6 h-6" />,
      url: "#",
    },
  ];

  // Styling constants
  const LinkStyle =
    "text-blue-200 hover:text-yellow-400 transition-colors text-base font-light";
  const TitleStyle =
    "text-xl font-bold text-white mb-5 border-b border-blue-700 pb-2";

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl shadow-lg">
                <span className="text-white font-extrabold text-xl">T360</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white">TPS 360</span>
                <span className="text-xs text-blue-300 tracking-wider -mt-1">
                  BANGLADESH
                </span>
              </div>
            </Link>
            <p className="text-blue-200 max-w-xs text-sm">
              Government-approved recruiting agency connecting Bangladeshi
              talent with global opportunities.
              <br />
              **License No:**{" "}
              <strong className="text-yellow-400">RL-995</strong>
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center bg-blue-800 hover:bg-yellow-500 text-blue-200 hover:text-white rounded-full transition-colors duration-200 shadow-md"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="bg-blue-800 border border-emerald-600 rounded-lg p-3 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-emerald-200">
                  Government Approved & Licensed
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className={TitleStyle}>Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className={`block ${LinkStyle}`}>
                    <span className="mr-2 text-yellow-400">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-t border-blue-800 pt-4">
              <h4 className="font-semibold text-white mb-2">Contact Us</h4>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="tel:+8802XXXXXXX" className={LinkStyle}>
                  +880 2-XXXX-XXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a href="mailto:info@tps360-bd.com" className={LinkStyle}>
                  info@tps360-bd.com
                </a>
              </div>
            </div>
          </div>

          {/* Our Core Services */}
          <div>
            <h3 className={TitleStyle}>Our Core Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a className={`block cursor-pointer ${LinkStyle}`}>
                    <span className="mr-2 text-yellow-400">›</span> {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence & Office Hours */}
          <div>
            <h3 className={TitleStyle}>Global Presence</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {partnerCountries.map((country, index) => (
                <span
                  key={index}
                  className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-700 hover:bg-emerald-600 transition"
                >
                  {country}
                </span>
              ))}
            </div>
            <div className="bg-blue-800 rounded-lg p-5 border-l-4 border-yellow-500 shadow-xl">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                <h4 className="font-bold text-lg text-white">Office Hours</h4>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-blue-200">
                  <span className="font-semibold">Saturday - Thursday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-blue-300">
                  <span className="font-semibold">Friday</span>
                  <span className="text-red-400 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full max-w-lg mx-auto mb-12 py-6 bg-blue-900 rounded-xl shadow-2xl border border-blue-800">
          <div className="px-6">
            <h3 className="text-2xl font-bold text-center text-white mb-2">
              Subscribe to Our Job Alerts
            </h3>
            <p className="text-blue-300 text-center text-sm mb-5">
              Get the latest overseas job opportunities directly to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-5 py-3 rounded-l-lg border border-gray-300 text-gray-800 focus:ring-yellow-500 focus:border-yellow-500 outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-blue-950 font-bold py-3 px-6 rounded-r-lg hover:bg-yellow-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="border-t border-blue-700 pt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm">
              <p>
                &copy; {currentYear} **TPS 360 (Bangladesh)**. All rights
                reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <a className="hover:text-yellow-400 text-blue-300 transition-colors">
                Privacy Policy
              </a>
              <a className="hover:text-yellow-400 text-blue-300 transition-colors">
                Terms of Service
              </a>
              <a className="hover:text-yellow-400 text-blue-300 transition-colors">
                Ethical Recruitment
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 pt-6 border-t border-blue-800">
            <span className="text-xs text-emerald-300 border border-emerald-600 px-3 py-1 rounded-full font-medium">
              ✅ BMET Approved
            </span>
            <span className="text-xs text-yellow-300 border border-yellow-600 px-3 py-1 rounded-full font-medium">
              ⭐ Ministry Approved
            </span>
            <span className="text-xs text-blue-300 border border-blue-600 px-3 py-1 rounded-full font-medium">
              🤝 Ethical Recruitment
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
