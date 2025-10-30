// src/components/Footer.jsx
import { Link } from "react-router-dom";

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
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "#",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.187-3.55-8.444" />
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <footer className="footer bg-gradient-to-b from-blue-900 to-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                <span className="text-white font-bold text-lg">TPS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">TPS 360</span>
                <span className="text-xs text-blue-200 -mt-1">BANGLADESH</span>
              </div>
            </Link>
            <p className="text-blue-200 max-w-xs text-sm">
              Government-approved recruiting agency connecting Bangladeshi
              talent with global opportunities. License No:{" "}
              <strong>RL-995</strong>
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="btn btn-ghost btn-sm btn-circle bg-blue-800 hover:bg-blue-600 text-white border-0 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Government Badge */}
            <div className="bg-green-900 border border-green-700 rounded-lg p-3 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-green-200">
                  Government Approved
                </span>
              </div>
              <p className="text-xs text-green-300 mt-1">License No: RL-995</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="link link-hover text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Contact */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📞</span>
                <span className="text-blue-200 text-sm">+880 2-XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">📧</span>
                <span className="text-blue-200 text-sm">
                  info@tps360-bd.com
                </span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="footer-title text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a className="link link-hover text-blue-200 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Countries & Contact */}
          <div>
            <h3 className="footer-title text-white mb-4">We Serve In</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {partnerCountries.map((country, index) => (
                <span
                  key={index}
                  className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-xs"
                >
                  {country}
                </span>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-2">Office Hours</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-blue-200">
                  <span>Saturday - Thursday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-blue-200">
                  <span>Friday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="card bg-blue-800 shadow-xl">
            <div className="card-body py-4">
              <h3 className="card-title justify-center text-white text-lg mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-200 text-center text-sm mb-4">
                Get latest job opportunities and updates
              </p>
              <div className="join w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered join-item flex-1"
                />
                <button className="btn btn-warning join-item text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm">
              <p>
                &copy; {currentYear} TPS 360 (Bangladesh). All rights reserved.
                | License: RL-995
              </p>
            </div>
            <div className="flex space-x-6">
              <a className="link link-hover text-blue-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a className="link link-hover text-blue-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a className="link link-hover text-blue-300 hover:text-white transition-colors text-sm">
                Ethical Recruitment
              </a>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-6 pt-6 border-t border-blue-700">
            <div className="badge badge-outline badge-accent">
              BMET Approved
            </div>
            <div className="badge badge-outline badge-warning">
              Ministry Approved
            </div>
            <div className="badge badge-outline badge-info">
              Ethical Recruitment
            </div>
            <div className="badge badge-outline badge-success">
              Verified Agency
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
