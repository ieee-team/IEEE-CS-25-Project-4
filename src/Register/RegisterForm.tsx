import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Group from "../assets/Group3.png"; 

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirm) {
      alert("Passwords do not match");
      return;
    }

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
            Register
          </p>
          <p className="text-gray-400 mb-6 uppercase text-sm tracking-widest">
            Join to us
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Jhon Deo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Example@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                >
                  {showPassword ? <FaEye />: <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  required
                  value={formData.confirm}
                  onChange={(e) =>
                    setFormData({ ...formData, confirm: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                >
                  {showConfirm ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-[40%] mb-3 bg-green-600 text-white py-2 !rounded-md hover:bg-green-700 transition duration-300"
            >
              REGISTER
            </button>

            <p className="text-sm text-gray-500 text-left">
              ALREADY USER?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-green-600 font-semibold hover:underline cursor-pointer"
              >
                LOGIN
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
