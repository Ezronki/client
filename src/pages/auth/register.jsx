import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/auth-slice";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const initialState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Error: Passwords do not match!");
      return;
    }
    try {
      const result = await dispatch(registerUser(formData)).unwrap();
      toast.success(result.message);
      navigate("/auth/login");
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-md bg-black/90 backdrop-blur-lg rounded-xl p-8 border border-gray-700 shadow-2xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="text-center mb-6">
            <motion.h1
              className="text-4xl font-bold bg-gradient-to-r from-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              SUDOHACKERS
            </motion.h1>
            <motion.p
              className="mt-4 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="font-medium text-[#FFA500] hover:text-[#FF8C00] transition-colors"
              >
                Sign in here
              </Link>
            </motion.p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="userName"
                value={formData.userName}
                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                required
                placeholder="Enter your username"
                className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none placeholder:text-gray-500 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 px-4 py-3 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none placeholder:text-gray-500 transition-all text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                  className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 px-4 py-3 pr-10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none transition-all text-sm"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-gray-300 transition-colors"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 px-4 py-3 pr-10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none transition-all text-sm"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:text-gray-300 transition-colors"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-6 w-full py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#FFA500] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FF7F00] focus:outline-none focus:ring-2 focus:ring-orange-400/30 transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Register
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AuthRegister;
