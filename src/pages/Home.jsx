// src/pages/Home.jsx (Professional Redesign)
import { Link } from "react-router-dom";
import {
  Briefcase,
  ChevronRight,
  CheckCircle,
  Globe,
  Users,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "International Manpower Recruitment",
      description:
        "Government-approved recruitment process for overseas employment.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Construction & Skilled Labor",
      description:
        "Supply of skilled and semi-skilled workers for construction projects.",
    },
    {
      icon: <Globe className="w-8 h-8 text-yellow-600" />,
      title: "Hospitality & Retail Staffing",
      description:
        "Professional staff for hotels, restaurants, and retail businesses.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      title: "Visa Processing & Documentation",
      description:
        "Complete visa processing and document preparation services.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Overseas Employment Consultancy",
      description: "Expert guidance for international job opportunities.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-teal-600" />,
      title: "Travel & Deployment Support",
      description: "End-to-end support from recruitment to deployment.",
    },
  ];

  const partners = [
    { name: "Barn's Coffee", logo: "☕" },
    { name: "Cinnabon", logo: "🍩" },
    { name: "Emar Al Janoub", logo: "🏢" },
    { name: "Islami Bank", logo: "🏦" },
    { name: "National Bank", logo: "💰" },
    { name: "First Security Islami Bank", logo: "🔒" },
  ];

  const stats = [
    { number: "995", label: "Govt. License No", suffix: "RL-" },
    { number: "5000", label: "Workers Deployed", suffix: "+" },
    { number: "15", label: "Countries Served", suffix: "+" },
    { number: "100", label: "Client Satisfaction", suffix: "%" },
  ];

  const StatCard = ({ stat }) => (
    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl transition-transform hover:scale-[1.02]">
      <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">
        <span className="text-xl font-bold align-top">{stat.suffix}</span>
        {stat.number}
      </div>
      <div className="text-blue-100 text-sm mt-1">{stat.label}</div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-40 lg:pt-32 lg:pb-52 bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-5 py-1.5 mb-6 text-sm font-semibold text-white bg-green-500 rounded-full shadow-lg">
              Government Approved Recruiting Agency
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Connecting{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Bangladeshi Talent
              </span>{" "}
              with{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Global Opportunities
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-blue-200 max-w-3xl mx-auto font-light">
              TPS 360 (Bangladesh) - Your trusted partner for ethical overseas
              employment and reliable manpower solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-[1.05]"
              >
                Hire Workers <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about-us"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Apply for Jobs
              </Link>
            </div>

            {/* Trust Badges - Separated into individual cards for professional look */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements for the background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* --- */}

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                <span className="text-green-600">Committed</span> to Ethical
                Recruitment
              </h2>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                We are a **Government-approved recruiting agency (License No:
                RL-995)** dedicated to connecting Bangladeshi skilled and
                unskilled workers with international employment opportunities
                ethically and transparently.
              </p>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Under the leadership of **Mr. Monirul Islam**, we ensure fair
                practices, complete support, and successful deployment for both
                employers and job seekers.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>100% Legal & Ethical Recruitment</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Transparent Fee Structure & Zero Hidden Costs</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>End-to-End Support and Welfare Monitoring</span>
                </div>
              </div>

              <Link
                to="/about-us"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More About Our Values{" "}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Mission/Vision Card */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-2xl border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b pb-2 border-blue-200">
                Our Mission & Vision
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">
                    Mission
                  </h4>
                  <p className="text-gray-700">
                    To bridge the gap between global workforce demands and
                    Bangladeshi talent through ethical, transparent, and
                    professional recruitment services.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">
                    Vision
                  </h4>
                  <p className="text-gray-700">
                    To become the most trusted manpower recruitment agency
                    connecting Bangladesh with the world's employment
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Our <span className="text-blue-600">Core Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manpower solutions designed for international
              markets and job seekers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-blue-500"
              >
                <div className="p-3 mb-4 inline-flex rounded-full bg-blue-50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Our <span className="text-green-600">Trusted Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proudly serving leading international companies and organizations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-50 hover:shadow-xl"
              >
                <div className="text-3xl sm:text-4xl mb-3">{partner.logo}</div>
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* CTA Section for Employers (Hire Workers) */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Looking for a Reliable Workforce?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto font-light">
            Hire skilled Bangladeshi workers for your international projects. We
            provide pre-screened, trained, and ready-to-deploy manpower.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-xl transition-colors duration-300"
            >
              Post Job Requirements
            </Link>
            <Link
              to="/about-us"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Download Company Profile
            </Link>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* CTA Section for Job Seekers (Apply for Jobs) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white p-8 md:p-16 rounded-xl shadow-2xl max-w-5xl mx-auto border-t-8 border-blue-600">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Ready for Your Overseas Career?
            </h2>
            <p className="text-xl mb-10 text-gray-600 max-w-3xl mx-auto">
              Start your journey to international employment with Bangladesh's
              most trusted recruitment agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition-colors duration-300"
              >
                Submit Your CV
              </Link>
              <Link
                to="/about-us"
                className="bg-transparent border-2 border-gray-400 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View Current Openings
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              **Zero Registration Fees** • Complete Visa Support • Pre-departure
              Training
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
