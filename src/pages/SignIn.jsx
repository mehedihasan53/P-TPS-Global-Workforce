import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Show success message
      alert(`Welcome back, ${user.displayName || "User"}!`);

      // Redirect to home page or dashboard
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);

      // Handle specific error messages
      switch (error.code) {
        case "auth/user-not-found":
          setError("No account found with this email. Please sign up first.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address format.");
          break;
        case "auth/invalid-credential":
          setError("Invalid email or password. Please check your credentials.");
          break;
        case "auth/too-many-requests":
          setError("Too many failed attempts. Please try again later.");
          break;
        case "auth/network-request-failed":
          setError("Network error. Please check your internet connection.");
          break;
        case "auth/user-disabled":
          setError("This account has been disabled. Please contact support.");
          break;
        default:
          setError("Failed to sign in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      alert(`Welcome back, ${user.displayName}!`);
      navigate("/");
    } catch (error) {
      console.error("Error with Google sign in:", error);

      if (error.code === "auth/popup-closed-by-user") {
        setError("Google sign in was cancelled.");
      } else if (
        error.code === "auth/account-exists-with-different-credential"
      ) {
        setError(
          "An account already exists with the same email but different sign-in method."
        );
      } else {
        setError("Failed to sign in with Google. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // You can implement password reset functionality here
    alert("Password reset feature will be implemented soon!");
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

          {/* Error Message */}
          {error && (
            <div className="alert alert-error mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

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
                className="input input-bordered w-full"
                required
                disabled={loading}
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
                className="input input-bordered w-full"
                required
                disabled={loading}
              />
              <label className="label">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="label-text-alt text-primary hover:underline"
                >
                  Forgot password?
                </button>
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
                disabled={loading}
              />
              <span className="label-text">Remember me</span>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Sign In Button */}
          <div className="form-control">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full flex items-center justify-center space-x-2"
              disabled={loading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
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
