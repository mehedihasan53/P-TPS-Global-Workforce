// src/pages/About_us.jsx (Professional Redesign)
import {
  Users,
  FileText,
  Handshake,
  TrendingUp,
  Shield,
  BarChart3,
  Globe,
  Zap,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

const About_us = () => {
  const team = [
    {
      name: "Mr. Monirul Islam",
      role: "Founder & Proprietor",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      bio: "Leading TPS 360 with 15+ years of experience in international recruitment and manpower services",
    },
    {
      name: "HR Management Team",
      role: "Human Resources",
      icon: <FileText className="w-8 h-8 text-green-600" />,
      bio: "Expert team handling recruitment, screening, and candidate management",
    },
    {
      name: "Visa Processing Team",
      role: "Documentation & Visa",
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
      bio: "Specialized in visa processing, document verification, and immigration procedures",
    },
    {
      name: "Client Relations Team",
      role: "Client Services",
      icon: <Handshake className="w-8 h-8 text-red-600" />,
      bio: "Dedicated to building strong relationships with international employers",
    },
  ];

  const values = [
    {
      icon: <HeartHandshake className="w-10 h-10 text-blue-600" />,
      title: "Ethical Recruitment",
      description:
        "We follow strict ethical guidelines and ensure 100% legal compliance in all our operations.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-green-600" />,
      title: "Transparency",
      description:
        "Complete transparency in fees, processes, and communication with all stakeholders.",
    },
    {
      icon: <Shield className="w-10 h-10 text-yellow-600" />,
      title: "Integrity",
      description:
        "Honest and fair practices in dealing with both job seekers and employers.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-red-600" />,
      title: "Excellence",
      description:
        "Commitment to delivering exceptional service quality and successful placements.",
    },
  ];

  const achievements = [
    { number: "5000+", label: "Workers Successfully Deployed" },
    { number: "15+", label: "Countries Served" },
    { number: "50+", label: "International Clients" },
    { number: "99%", label: "Visa Success Rate" },
  ];

  const StatCard = ({ stat }) => (
    <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl transition-transform hover:scale-[1.05] duration-300">
      <div className="text-3xl md:text-4xl font-extrabold text-yellow-400">
        {stat.number}
      </div>
      <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
    </div>
  );

  const WhyChooseCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500">
      <div className="text-4xl mb-4 text-center mx-auto w-fit">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-white bg-green-500 rounded-full shadow-lg">
              Government Approved Recruiting Agency
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              About <span className="text-yellow-400">TPS 360</span>{" "}
              (Bangladesh)
            </h1>
            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
              Your trusted partner for ethical overseas employment and reliable
              manpower solutions. License No: **RL-995**
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {achievements.map((achievement, index) => (
                <StatCard key={index} stat={achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Company Story & Mission/Vision Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 border-b-4 border-green-500 pb-2 inline-block">
              Our Journey & Commitment
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                **TPS 360 (Bangladesh)** emerged as a pioneering force in the
                international recruitment industry, dedicated to connecting
                **Bangladeshi talent** with global opportunities. Founded under
                the visionary leadership of **Mr. Monirul Islam**, we have
                established ourselves as a government-approved recruiting agency
                committed to ethical and transparent practices.
              </p>
              <p>
                Our journey began with a simple yet powerful mission: to create
                meaningful employment opportunities for skilled and unskilled
                Bangladeshi workers while providing international employers with
                reliable, qualified manpower.
              </p>
              <p>
                Today, we take pride in being a bridge between Bangladesh's
                workforce and the world's employment needs, ensuring fair
                treatment, proper documentation, and complete support throughout
                the recruitment process.
              </p>
            </div>
          </div>

          <div className="space-y-8 pt-8 lg:pt-0">
            {/* Mission Card */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-2xl border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To facilitate **ethical overseas employment** by connecting
                qualified Bangladeshi workers with reputable international
                employers through transparent, legal, and professional
                recruitment processes that benefit all stakeholders.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-green-50 p-8 rounded-xl shadow-2xl border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To become the most trusted and preferred manpower recruitment
                agency from Bangladesh, recognized globally for our **integrity,
                professionalism**, and commitment to creating sustainable
                employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
            Why Choose <span className="text-blue-600">TPS 360</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseCard
              icon={<BarChart3 className="w-10 h-10 text-green-600" />}
              title="Government Approved"
              description="Fully licensed and regulated by Bangladesh government (License No: RL-995) ensuring credibility."
            />
            <WhyChooseCard
              icon={<Globe className="w-10 h-10 text-blue-600" />}
              title="Global Network"
              description="Strong partnerships with employers across Middle East, Asia, and Europe for diverse opportunities."
            />
            <WhyChooseCard
              icon={<Zap className="w-10 h-10 text-yellow-600" />}
              title="Quick Processing"
              description="Efficient visa processing and deployment within agreed timelines for faster worker placement."
            />
            <WhyChooseCard
              icon={<Handshake className="w-10 h-10 text-red-600" />}
              title="Complete Support"
              description="End-to-end support from recruitment, training, to post-deployment follow-up."
            />
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
            Our <span className="text-green-600">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl border-b-4 border-blue-600 hover:border-green-600"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              Meet Our Dedicated Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The professionals who drive TPS 360's success through expertise
              and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    {member.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold text-sm mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Founder's Note */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-10 rounded-xl shadow-2xl mt-16 border-l-8 border-blue-700">
            <div className="flex flex-col md:flex-row items-start space-x-4">
              <div className="text-5xl md:text-7xl mb-4 md:mb-0">👨‍💼</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                  A Message from Our Founder
                </h3>
                <blockquote className="text-gray-700 text-lg italic border-l-4 border-gray-400 pl-4">
                  "At TPS 360, we believe that every Bangladeshi worker deserves
                  access to safe, legal, and rewarding international employment
                  opportunities. Our commitment goes beyond just recruitment -
                  we ensure complete transparency, ethical practices, and
                  continuous support to both our candidates and clients.
                  Together, we're building bridges to better futures."
                </blockquote>
                <p className="text-right mt-4 font-semibold text-blue-900">
                  - Mr. Monirul Islam, Founder & Proprietor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      {/* Expertise/Services Overview - Kept simple and direct */}
      <div className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Our <span className="text-yellow-400">Areas of Expertise</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-green-500 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">
                International Recruitment
              </h3>
              <p className="text-blue-200">
                End-to-end manpower recruitment for global markets
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-green-500 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">Visa & Documentation</h3>
              <p className="text-blue-200">
                Complete visa processing, document verification, and legal
                support
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-green-500 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">Sector Specialization</h3>
              <p className="text-blue-200">
                Construction, Hospitality, Retail, Manufacturing, and more
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-green-500 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">Training & Orientation</h3>
              <p className="text-blue-200">
                Pre-departure training, safety, and cultural orientation
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-green-500 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">Travel Arrangements</h3>
              <p className="text-blue-200">
                Secure flight booking and logistics coordination for deployment
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg border-l-4 border-green-500 hover:bg-white/20 transition-colors">
              <h3 className="font-bold text-xl mb-2">Post-placement Support</h3>
              <p className="text-blue-200">
                Continuous support and welfare monitoring after deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
