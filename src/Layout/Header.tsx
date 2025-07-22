import { FaChevronDown, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import swoo from "../assets/swoo.png"; 

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md p-4">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 text-sm">
        <span className="text-gray-600 mb-2 md:mb-0">
          Hotline 24/7: (025) 3886 25 16
        </span>
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
          <span className="text-gray-600 cursor-pointer">Sell on Swoo</span>
          <span className="text-gray-600 cursor-pointer">Order Tracking</span>
          <select className="border-none text-gray-600 bg-transparent cursor-pointer">
            <option>USD</option>
          </select>
          <select className="border-none text-gray-600 bg-transparent cursor-pointer">
            <option>Eng</option>
          </select>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Logo */}
        <img src={swoo} alt="Logo" className="w-32 h-auto object-contain" />

        <ul className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 md:mt-0 text-gray-700 text-sm">
          <li className="hover:text-green-600 cursor-pointer flex items-center gap-1">
            Homes <FaChevronDown size={12} />
          </li>
          <li className="hover:text-green-600 cursor-pointer flex items-center gap-1">
            Pages <FaChevronDown size={12} />
          </li>
          <li className="hover:text-green-600 cursor-pointer flex items-center gap-1">
            Products <FaChevronDown size={12} />
          </li>
          <li
            className="hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
        </ul>

        <div className="flex items-center gap-4 mt-4 md:mt-0 text-sm">
          <span className="text-gray-500 flex items-center">
            <FaHeart className="mr-1" /> Welcome
          </span>
          <span
            className="text-gray-700 hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
          <span
            className="text-gray-700 hover:text-green-600 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            / Register
          </span>
          <span className="text-gray-700 flex items-center cursor-pointer">
            <FaShoppingCart className="mr-1" />
            <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center ml-1">
              5
            </span>
            <span className="ml-1">$1,689.00</span>
          </span>
        </div>
      </nav>

      {/* Search bar */}
      <div className="bg-green-600 p-2 rounded-lg flex flex-col md:flex-row items-center text-white gap-2">
        <select className="bg-transparent border-none px-2 cursor-pointer">
          <option>All Categories</option>
        </select>
        <input
          type="text"
          placeholder="Search anything..."
          className="flex-grow bg-white text-black p-2 rounded-md w-full md:w-auto focus:outline-none"
        />
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs md:text-sm">
          <span>Free Shipping over $199</span>
          <span>30 Days Money Back</span>
          <span>100% Secure Payment</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
