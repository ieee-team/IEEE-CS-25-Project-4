import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Group from "../assets/Group3.png";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-white p-4 ">
      <div className="max-w-6xl w-full grid md:grid-cols-2 grid-cols-1 items-center gap-10 bg-white p-8 rounded-2xl shadow-md">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={Group}
            alt="Illustration"
            className="max-w-full w-[300px] md:w-[400px]"
          />
        </div>

        {/* Right Form */}
        <div className="w-full">
          <p className="text-2xl md:text-3xl font-semibold text-green-600 mb-1">
            Welcome Back
          </p>
          <p className="text-gray-500 mb-6 tracking-widest uppercase text-sm">
            Login to continue
          </p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div className="!text-right !text-sm !text-gray-400">
              <a href="#" className="hover:underline">
                Forget Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-[30%] mb-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              LOGIN
            </button>

            <p className="text-sm text-left text-gray-500">
              NEW USER?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-green-600 font-semibold hover:underline cursor-pointer"
              >
                SIGN UP
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
