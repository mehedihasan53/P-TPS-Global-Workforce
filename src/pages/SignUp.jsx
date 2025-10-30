import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    userType: "job-seeker",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up data:", formData);
    alert(
      "Account created successfully! Please check your email for verification."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
          {/* Header */}
          <div className="text-center mb-10">
            <Link
              to="/"
              className="inline-flex items-center justify-center space-x-2 mb-6"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg">
                <span className="text-white font-bold text-xl">TPS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-2xl text-blue-900">
                  TPS 360
                </span>
                <span className="text-sm text-gray-500 -mt-1">Bangladesh</span>
              </div>
            </Link>
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">
              Create Account
            </h1>
            <p className="text-gray-600 text-sm">
              Join TPS 360 for overseas employment opportunities
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div className="form-control">
              <label className="label font-semibold">I am a</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`btn w-full ${
                    formData.userType === "job-seeker"
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, userType: "job-seeker" })
                  }
                >
                  👨‍💼 Job Seeker
                </button>
                <button
                  type="button"
                  className={`btn w-full ${
                    formData.userType === "employer"
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, userType: "employer" })
                  }
                >
                  🏢 Employer
                </button>
              </div>
            </div>

            {/* Full Name / Company Name */}
            <div className="form-control">
              <label className="label font-semibold">
                {formData.userType === "employer"
                  ? "Company Name"
                  : "Full Name"}{" "}
                *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={
                  formData.userType === "employer"
                    ? "Enter company name"
                    : "Enter your full name"
                }
                className="input input-bordered w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label font-semibold">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="input input-bordered w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-control">
              <label className="label font-semibold">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1XXX-XXXXXX"
                className="input input-bordered w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label font-semibold">Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="input input-bordered w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-control">
              <label className="label font-semibold">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="input input-bordered w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="form-control flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="checkbox checkbox-primary mr-3"
                required
              />
              <span className="label-text">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full py-3 rounded-md shadow-lg"
              >
                Create Account
              </button>
            </div>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="text-center mt-8">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="badge badge-success gap-1">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Govt. Approved
              </div>
              <div className="badge badge-primary gap-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Secure
              </div>
            </div>
            <p className="text-xs text-gray-500">
              License No: RL-995 • TPS 360 (Bangladesh)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
