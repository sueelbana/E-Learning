import { useState } from "react";
import Logo from "../assets/icon.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[rgba(37,38,65,1)] text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo + Title side by side */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="TOTC Logo" className="h-10" />
          <div className="border-l border-gray-500 h-6"></div>
          <p className="text-sm pl-4">
            Virtual Class <br></br>for Zoom
          </p>
        </div>

        {/* Newsletter */}
        <div className="text-center">
          <p className="mb-3 text-gray-200 font-medium">
            Subscribe to get our Newsletter
          </p>
          <div className="flex items-center bg-[#242447] rounded-full overflow-hidden w-72">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 px-4 py-2 bg-transparent border-gray-70 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[rgba(73,187,189,1)] text-white px-4 py-2 text-sm font-medium hover:bg-[rgba(73,187,189,0.9)] transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm divide-x divide-gray-500">
          <a href="#" className="hover:text-white pr-6">
            Careers
          </a>
          <a href="#" className="hover:text-white px-6">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white pl-6">
            Terms & Conditions
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">© 2024 Class Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
