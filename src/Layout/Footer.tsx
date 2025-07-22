import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 !gap-5 !justify-center">
        {/* Column 1: Swoo - 1st NYC Tech Online Market */}
        <div>
          <p className="text-[18px] font-bold  mb-2">
            SWOO - 1ST NYC TECH ONLINE MARKET
          </p>
          <p className="text-[10px] text-green-600 mb-2">HOTLINE 24/7</p>
          <p className="text-[18px] font-bold text-green-600 mb-2">
            (025) 3686 25 16
          </p>
          <p className=" text-[10px] mb-2">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </p>
          <p className="text-[12px] mb-2">contact@Swootechmart.com</p>
          <div className="flex space-x-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-gray-600 hover:text-green-600"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-gray-600 hover:text-green-600"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-600 hover:text-green-600"
              />
            </a>
            <a href="mailto:contact@Swootechmart.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-600 hover:text-green-600"
              />
            </a>
          </div>
        </div>

        {/* Column 2: Top Categories */}
        <div>
          <p className=" text-[18px] font-bold mb-2">TOP CATEGORIES</p>
          <ul className="!pl-0 space-y-1">
            <li>Laptops</li>
            <li>PC & Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
            <li>Networks</li>
            <li>Cameras</li>
            <li>Sounds</li>
            <li>Office</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <p className="text-[18px] font-bold mb-2">COMPANY</p>
          <ul className="!p-0 space-y-1">
            <li>About Swoo</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Store Locations</li>
          </ul>
        </div>

        {/* Column 4: Help Center */}
        <div>
          <p className="text-[18px] font-bold mb-2">HELP CENTER</p>
          <ul className="!p-0 space-y-1">
            <li>Customer Service</li>
            <li>Policy & Conditions</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li>Product Support</li>
          </ul>
        </div>

        {/* Column 5: Partner */}
        <div>
          <p className="text-[18px] font-bold mb-2">PARTNER</p>
          <ul className="!p-0 space-y-1">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
          </ul>
        </div>
      </div>
      {/* Subscribe Section */}
      <div className="mt-6 bg-gray-200 p-4 text-center">
        <h3 className="text-lg font-semibold text-red-600 mb-2">
          SUBSCRIBE & GET 10% OFF FOR YOUR FIRST ORDER
        </h3>
        <div className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 border rounded"
          />
          <button className="bg-green-600 text-white p-2 rounded">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-sm mt-2">
          By subscribing, you’re accepted the our Policy
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center border-t pt-4">
        <p className="mb-2">© 2024 Shawonet3. All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <span>PayPal</span>
          <span>Visa</span>
          <span>Stripe</span>
          <span>Klarna</span>
        </div>
        <a href="#" className="text-blue-600 mt-2 block">
          Mobile Site
        </a>
      </div>
    </footer>
  );
};

export default Footer;
