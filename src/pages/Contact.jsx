import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [activeInquiry, setActiveInquiry] = useState("general");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  const inquiryTypes = [
    {
      value: "job-seeker",
      label: "Job Seeker - Looking for Overseas Employment",
      icon: "👨‍💼",
    },
    { value: "employer", label: "Employer - Want to Hire Workers", icon: "🏢" },
    { value: "general", label: "General Inquiry", icon: "💬" },
    { value: "partnership", label: "Partnership Opportunity", icon: "🤝" },
    { value: "support", label: "Customer Support", icon: "🛟" },
  ];

  const officeLocations = [
    {
      city: "Dhaka Head Office",
      address: "123 Business Avenue, Gulshan-1",
      phone: "+880 2-XXXX-XXXX",
      email: "dhaka@tps360-bd.com",
      hours: "Sat-Thu: 9:00 AM - 6:00 PM",
    },
    {
      city: "Chittagong Office",
      address: "456 Port Road, Agrabad",
      phone: "+880 3-XXXX-XXXX",
      email: "chittagong@tps360-bd.com",
      hours: "Sat-Thu: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold tracking-wide mb-4 shadow-md">
            Government Approved Recruiting Agency
          </div>
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
            Contact TPS 360
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with Bangladesh's trusted overseas employment partner.
            We're here to help you with manpower solutions and career
            opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-4">
              Send Your Inquiry
            </h2>
            <p className="text-gray-700 mb-8">
              Fill out the form below and our team will contact you within 24
              hours.
            </p>

            {/* Inquiry Type Buttons */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I am interested in:
              </label>
              <div className="grid grid-cols-1 gap-3">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    className={`flex items-center justify-start gap-4 py-3 px-5 border rounded-lg text-gray-700 bg-white shadow-sm hover:shadow-md transition ${
                      activeInquiry === type.value
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "border-gray-300"
                    }`}
                    onClick={() => {
                      setActiveInquiry(type.value);
                      setFormData({ ...formData, inquiryType: type.value });
                    }}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="block w-full rounded-md border border-gray-300 shadow-sm py-3 px-4 focus:border-emerald-600 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="block w-full rounded-md border border-gray-300 shadow-sm py-3 px-4 focus:border-emerald-600 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 XXXX-XXXXXX"
                    className="block w-full rounded-md border border-gray-300 shadow-sm py-3 px-4 focus:border-emerald-600 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 shadow-sm py-3 px-4 focus:border-emerald-600 focus:ring focus:ring-emerald-300 focus:ring-opacity-50"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="job-seeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    activeInquiry === "job-seeker"
                      ? "Please mention your skills, experience, and preferred country..."
                      : activeInquiry === "employer"
                      ? "Please specify your manpower requirements, quantity, and job types..."
                      : "Please describe your inquiry in detail..."
                  }
                  className="block w-full rounded-md border border-gray-300 shadow-sm py-3 px-4 focus:border-emerald-600 focus:ring focus:ring-emerald-300 focus:ring-opacity-50 resize-y h-32"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition"
                >
                  Send Message
                  <svg
                    className="inline w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            {/* Main Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-semibold text-blue-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-4 rounded-lg text-blue-600">
                    {/* Location Icon SVG */}
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      Head Office - Dhaka
                    </h3>
                    <p className="text-gray-700">
                      123 Business Avenue, Gulshan-1
                      <br />
                      Dhaka 1212, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="bg-emerald-100 p-4 rounded-lg text-emerald-600">
                    {/* Phone Icon SVG */}
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-700">+880 2-XXXX-XXXX (Office)</p>
                    <p className="text-gray-700">+880 1XXX-XXXXXX (Hotline)</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Saturday - Thursday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="bg-yellow-100 p-4 rounded-lg text-yellow-600">
                    {/* Email Icon SVG */}
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      Email Addresses
                    </h3>
                    <p className="text-gray-700">
                      info@tps360-bd.com (General)
                    </p>
                    <p className="text-gray-700">
                      careers@tps360-bd.com (Job Seekers)
                    </p>
                    <p className="text-gray-700">
                      clients@tps360-bd.com (Employers)
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                Our Office Locations
              </h3>
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-emerald-600 pl-4"
                  >
                    <h4 className="text-lg font-bold text-blue-900 mb-1">
                      {office.city}
                    </h4>
                    <p className="text-gray-700 mb-1">{office.address}</p>
                    <p className="text-gray-600 text-sm">📞 {office.phone}</p>
                    <p className="text-gray-600 text-sm">📧 {office.email}</p>
                    <p className="text-gray-500 text-xs mt-1">{office.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-blue-900 text-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-5">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 py-3 rounded-lg font-semibold transition">
                  📥 Download Company Profile
                </button>
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg font-semibold transition">
                  👨‍💼 Submit Your CV Online
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition">
                  🏢 Post Job Requirements
                </button>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="bg-yellow-100 text-yellow-900 rounded-lg flex items-center p-4 mt-6 shadow-md border border-yellow-300">
              <svg
                className="w-8 h-8 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h4 className="font-bold text-lg mb-1">Urgent Support</h4>
                <p>
                  For deployed workers needing immediate assistance:{" "}
                  <strong>+880 1XXX-URGENT</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-blue-900 mb-6">
              Find Our Office
            </h2>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-5xl mb-4">🗺️</div>
                <p>Google Maps Integration</p>
                <p className="text-sm">123 Business Avenue, Gulshan-1, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
