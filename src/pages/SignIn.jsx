import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
    // Handle sign in logic here
    console.log("Sign in data:", formData);
    alert("Successfully signed in!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-lg mx-auto bg-white p-10 rounded-xl shadow-lg">
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
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm">
              Sign in to your TPS 360 account
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="form-control">
              <label className="label font-semibold">Email Address</label>
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

            {/* Password */}
            <div className="form-control">
              <label className="label font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="input input-bordered w-full py-3 px-4 rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Remember Me */}
            <div className="form-control flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="checkbox checkbox-primary mr-3"
              />
              <span className="label-text">Remember me</span>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full py-3 rounded-md shadow-lg"
              >
                Sign In
              </button>
            </div>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Link
              to="/contact"
              className="btn btn-outline btn-warning w-full py-3 rounded-md"
            >
              👨‍💼 Apply for Jobs
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline btn-primary w-full py-3 rounded-md"
            >
              🏢 Hire Workers
            </Link>
          </div>

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

export default SignIn;
