import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // For social media icons

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Component */}
      <nav className="bg-black p-4 shadow-lg">
        <div className="container mx-auto flex items-center">
          <h1 className="text-white text-2xl font-bold mr-auto">
            <a href="/">MICRO FINANCE</a>
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-br from-gray-900 via-black to-gray-800 py-12">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-5xl md:text-6xl text-white font-bold text-center mb-12">
            Micro Finance System
          </h1>

          {/* Options Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Home Loan */}
            <div
              className="group p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 cursor-pointer h-72 flex flex-col justify-center items-center"
              onClick={() => navigate("/homeLoan")}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
                Home Loan
              </h2>
              <p className="text-sm text-gray-400 text-center">
                Secure your dream home with our easy and affordable home loan options.
              </p>
            </div>

            {/* Wedding Loan */}
            <div
              className="group p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 cursor-pointer h-72 flex flex-col justify-center items-center"
              onClick={() => navigate("/weddingLoan")}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
                Wedding Loan
              </h2>
              <p className="text-sm text-gray-400 text-center">
                Plan your perfect wedding with flexible loan packages tailored for you.
              </p>
            </div>

            {/* Education Loan */}
            <div
              className="group p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 cursor-pointer h-72 flex flex-col justify-center items-center"
              onClick={() => navigate("/education")}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
                Education Loan
              </h2>
              <p className="text-sm text-gray-400 text-center">
                Achieve your educational goals with our hassle-free loan services.
              </p>
            </div>

            {/* Business Loan */}
            <div
              className="group p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-700 cursor-pointer h-72 flex flex-col justify-center items-center"
              onClick={() => navigate("/bussnisLoan")}
            >
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
                Business Loan
              </h2>
              <p className="text-sm text-gray-400 text-center">
                Expand your business with our affordable and flexible business loan plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="mb-8">
              <h2 className="text-white text-xl font-bold mb-4">Micro Finance</h2>
              <p className="text-gray-400 text-sm">
                Empowering your dreams with flexible and affordable loan solutions.
              </p>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 text-sm">Email: info@microfinance.com</p>
              <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
              <p className="text-gray-400 text-sm">Address: 123 Finance St, City, Country</p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2023 Micro Finance. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Designed with by Your Company
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;