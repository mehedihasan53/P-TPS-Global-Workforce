import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const [isFalling, setIsFalling] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // Start falling animation after a delay
    const timer = setTimeout(() => {
      setIsFalling(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Islands */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-yellow-400 rounded-full opacity-25 animate-float delay-2000"></div>

        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center relative z-20">
        {/* Animated Character Falling with Parachute */}
        <div
          className={`relative mb-12 mx-auto w-80 h-80 transform transition-all duration-2000 ${
            isFalling ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Cloud Background */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="text-6xl animate-bounce">☁️</div>
          </div>

          {/* Parachute */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-t-full relative animate-pulse">
              {/* Parachute Strings */}
              <div className="absolute -bottom-4 left-1/4 w-1 h-16 bg-white transform -rotate-45"></div>
              <div className="absolute -bottom-4 right-1/4 w-1 h-16 bg-white transform rotate-45"></div>
              <div className="absolute -bottom-4 left-1/2 w-1 h-20 bg-white transform -translate-x-1/2"></div>
            </div>
          </div>

          {/* Character */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
            {/* Body */}
            <div className="w-6 h-16 bg-blue-500 mx-auto rounded-full relative">
              {/* Arms */}
              <div className="absolute top-2 -left-6 w-8 h-2 bg-blue-500 transform -rotate-45 rounded-full"></div>
              <div className="absolute top-2 -right-6 w-8 h-2 bg-blue-500 transform rotate-45 rounded-full"></div>

              {/* Legs */}
              <div className="absolute bottom-0 -left-4 w-6 h-2 bg-blue-600 transform -rotate-30 rounded-full"></div>
              <div className="absolute bottom-0 -right-4 w-6 h-2 bg-blue-600 transform rotate-30 rounded-full"></div>
            </div>

            {/* Head */}
            <div className="w-12 h-12 bg-yellow-200 rounded-full mx-auto -mt-2 border-2 border-yellow-300 relative">
              {/* Helmet */}
              <div className="absolute -top-1 left-0 right-0 h-4 bg-red-500 rounded-t-lg"></div>

              {/* Face */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-3">
                  <div className="w-2 h-2 bg-gray-800 rounded-full animate-blink"></div>
                  <div className="w-2 h-2 bg-gray-800 rounded-full animate-blink delay-1000"></div>
                </div>
                <div className="w-6 h-1 bg-gray-800 rounded-full mt-2 mx-auto"></div>
              </div>
            </div>

            {/* Map and Binoculars */}
            <div className="absolute -right-8 top-4 text-2xl animate-bounce">
              🗺️
            </div>
            <div className="absolute -left-8 top-4 text-2xl animate-bounce delay-500">
              🔍
            </div>
          </div>

          {/* Falling Items */}
          <div className="absolute top-40 left-10 text-2xl animate-fall delay-1000">
            📱
          </div>
          <div className="absolute top-48 right-12 text-2xl animate-fall delay-1500">
            💻
          </div>
          <div className="absolute top-56 left-20 text-2xl animate-fall delay-2000">
            🔑
          </div>
        </div>

        {/* Error Text with Glitch Effect */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-black text-white mb-2 relative">
            <span className="glitch" data-text="404">
              404
            </span>
          </h1>
          <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4 rounded-full animate-pulse"></div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mb-4">
            Lost in Space!
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            Houston, we have a problem! This page has embarked on an
            interstellar journey. Let's bring you back to mission control.
          </p>
        </div>

        {/* Interactive Rescue Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl mb-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center justify-center">
            <span className="mr-3">🚨</span>
            Emergency Rescue Mission
            <span className="ml-3">🛸</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div
              className="p-4 bg-blue-500/20 rounded-xl border border-blue-400/30 cursor-pointer hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setShowHelp(true)}
              onMouseLeave={() => setShowHelp(false)}
            >
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="font-semibold text-white">Beam Me Home</h4>
              <p className="text-sm text-gray-300">
                Instant teleportation to safety
              </p>
            </div>

            <div
              className="p-4 bg-green-500/20 rounded-xl border border-green-400/30 cursor-pointer hover:bg-green-500/30 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setShowHelp(true)}
              onMouseLeave={() => setShowHelp(false)}
            >
              <div className="text-4xl mb-2">🛟</div>
              <h4 className="font-semibold text-white">Call for Help</h4>
              <p className="text-sm text-gray-300">Contact our support team</p>
            </div>
          </div>

          {/* Rescue Animation */}
          {showHelp && (
            <div className="animate-rescue-pulse">
              <div className="text-center">
                <div className="text-6xl mb-2">🪂</div>
                <p className="text-yellow-300 font-semibold">
                  Rescue team deployed!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons with Hover Effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold 
                                 hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-110 
                                 shadow-2xl hover:shadow-3xl flex items-center space-x-3 relative overflow-hidden"
          >
            <span className="text-2xl group-hover:animate-spin">🚀</span>
            <span>Launch to Home</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>

          <Link
            to="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-bold 
                                 hover:from-purple-600 hover:to-pink-700 transition-all duration-500 transform hover:scale-110 
                                 shadow-2xl hover:shadow-3xl flex items-center space-x-3 relative overflow-hidden"
          >
            <span className="text-2xl group-hover:animate-bounce">📡</span>
            <span>Signal for Help</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </div>

        {/* Quick Navigation */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-cyan-300 mb-4">
            📍 Quick Navigation Beacons
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { to: "/about-us", label: "About", icon: "👨‍🚀" },
              { to: "/services", label: "Services", icon: "🛠️" },
              { to: "/jobs", label: "Jobs", icon: "💼" },
              { to: "/contact", label: "Contact", icon: "📞" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/5 hover:border-cyan-400/30 group"
              >
                <div className="text-2xl mb-1 group-hover:animate-pulse">
                  {item.icon}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-cyan-300">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Advanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100px) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes rescuePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .glitch {
          position: relative;
          display: inline-block;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00ff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
          }
          5% {
            clip: rect(12px, 9999px, 59px, 0);
          }
          10% {
            clip: rect(48px, 9999px, 29px, 0);
          }
          15% {
            clip: rect(42px, 9999px, 73px, 0);
          }
          20% {
            clip: rect(63px, 9999px, 27px, 0);
          }
          25% {
            clip: rect(34px, 9999px, 55px, 0);
          }
          30% {
            clip: rect(86px, 9999px, 73px, 0);
          }
          35% {
            clip: rect(20px, 9999px, 20px, 0);
          }
          40% {
            clip: rect(26px, 9999px, 60px, 0);
          }
          45% {
            clip: rect(25px, 9999px, 66px, 0);
          }
          50% {
            clip: rect(57px, 9999px, 98px, 0);
          }
          55% {
            clip: rect(5px, 9999px, 46px, 0);
          }
          60% {
            clip: rect(82px, 9999px, 31px, 0);
          }
          65% {
            clip: rect(54px, 9999px, 27px, 0);
          }
          70% {
            clip: rect(28px, 9999px, 99px, 0);
          }
          75% {
            clip: rect(45px, 9999px, 69px, 0);
          }
          80% {
            clip: rect(23px, 9999px, 85px, 0);
          }
          85% {
            clip: rect(54px, 9999px, 84px, 0);
          }
          90% {
            clip: rect(45px, 9999px, 47px, 0);
          }
          95% {
            clip: rect(37px, 9999px, 20px, 0);
          }
          100% {
            clip: rect(4px, 9999px, 91px, 0);
          }
        }
        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 100px, 0);
          }
          5% {
            clip: rect(52px, 9999px, 74px, 0);
          }
          10% {
            clip: rect(79px, 9999px, 85px, 0);
          }
          15% {
            clip: rect(75px, 9999px, 5px, 0);
          }
          20% {
            clip: rect(67px, 9999px, 61px, 0);
          }
          25% {
            clip: rect(14px, 9999px, 79px, 0);
          }
          30% {
            clip: rect(1px, 9999px, 66px, 0);
          }
          35% {
            clip: rect(86px, 9999px, 30px, 0);
          }
          40% {
            clip: rect(23px, 9999px, 98px, 0);
          }
          45% {
            clip: rect(85px, 9999px, 72px, 0);
          }
          50% {
            clip: rect(71px, 9999px, 75px, 0);
          }
          55% {
            clip: rect(2px, 9999px, 48px, 0);
          }
          60% {
            clip: rect(30px, 9999px, 16px, 0);
          }
          65% {
            clip: rect(59px, 9999px, 50px, 0);
          }
          70% {
            clip: rect(41px, 9999px, 62px, 0);
          }
          75% {
            clip: rect(2px, 9999px, 82px, 0);
          }
          80% {
            clip: rect(47px, 9999px, 73px, 0);
          }
          85% {
            clip: rect(3px, 9999px, 27px, 0);
          }
          90% {
            clip: rect(26px, 9999px, 55px, 0);
          }
          95% {
            clip: rect(42px, 9999px, 97px, 0);
          }
          100% {
            clip: rect(38px, 9999px, 49px, 0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 3s ease-in-out infinite;
        }
        .animate-fall {
          animation: fall 4s linear infinite;
        }
        .animate-rescue-pulse {
          animation: rescuePulse 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
