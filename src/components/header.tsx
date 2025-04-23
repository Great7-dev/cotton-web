"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../assets/Cotton SVG 2.svg";
import green from "../assets/green.svg";
import yellow from "../assets/yellow.svg";
import purple from "../assets/purple.svg";
import { Link } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full py-4 px-4 md:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Logo and Navigation grouped together */}
          <div className="flex items-center flex-1">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-8">
              <img
                src={logo || "/placeholder.svg"}
                alt="Cotton Logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation - moved closer to logo */}
            <nav className="hidden md:flex items-center space-x-6">
              {/* Custom dropdown for What we offer */}
              <div className="relative">
                <button
                  onClick={() => setIsOfferOpen(!isOfferOpen)}
                  className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none py-2 cursor-pointer font-['InterDisplay']"
                >
                  What we offer <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>

              <a
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-['InterDisplay']"
              >
                About us
              </a>

              <a
                href="/blog"
                className="text-gray-700 hover:text-gray-900 font-['InterDisplay']"
              >
                Blog
              </a>

              <a
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-['InterDisplay']"
              >
                Contact us
              </a>
            </nav>
          </div>

          {/* Desktop CTA Buttons */}
          {/* <div className="hidden md:flex items-center space-x-4 ml-auto">
            <button className="text-gray-700 hover:bg-gray-50 border-gray-300 rounded-lg px-4 md:px-6 h-10 md:h-11 w-[110px] md:w-[130px] font-['InterDisplay']">
              Provide service
            </button>
            <button className="bg-green-600 hover:bg-emerald-600 text-white rounded-lg px-4 md:px-6 h-10 md:h-11 w-[110px] md:w-[130px] font-['InterDisplay']">
              Order service
            </button>
          </div> */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {/* Outline Button */}
            <button
              className="
      flex items-center justify-center
      border border-gray-200 bg-white
      text-gray-700 hover:bg-gray-50
      rounded-xl
      h-11 px-6
      w-[130px]
      font-['InterDisplay'] font-medium
      transition-colors duration-200 whitespace-nowrap text-[14px]
    "
            >
              Provide service
            </button>

            {/* Solid Button */}
            <button
              className="
      flex items-center justify-center
      bg-green-600 hover:bg-emerald-600
      text-white
      rounded-lg
      h-11 px-6
      w-[130px]
      font-['InterDisplay'] font-medium
      transition-colors duration-200 whitespace-nowrap text-[14px]
    "
            >
              Order service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto"
            onClick={() => {
              setIsOpen(!isOpen);
              setIsOfferOpen(false);
            }}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 md:hidden">
              <nav className="flex flex-col space-y-4">
                {/* Mobile What we offer dropdown */}
                <div className="flex flex-col space-y-4">
                  <button
                    className="flex items-center justify-between text-gray-700 hover:text-gray-900 cursor-pointer font-['InterDisplay']"
                    onClick={() => setIsOfferOpen(!isOfferOpen)}
                  >
                    What we offer <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {isOfferOpen && (
                    <div className="pl-4 flex flex-col space-y-6">
                      {/* Cotton for Individuals */}
                      <Link
                        to="/individual"
                        onClick={() => {
                          setIsOfferOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center text-white mr-2">
                              <img src={green || "/placeholder.svg"} alt="" />
                            </div>
                            <h3 className="font-medium text-[#0E121B] font-['InterDisplay']">
                              Cotton for Individuals
                            </h3>
                          </div>
                          <p className="text-sm text-[#525866] font-['InterDisplay']">
                            This user-friendly mobile platform puts a world of
                            highly-vetted, professional service providers at
                            your fingertips.
                          </p>
                        </div>
                      </Link>

                      {/* Cotton for Enterprise */}
                      <Link
                        to="/enterprise"
                        onClick={() => {
                          setIsOfferOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center text-white mr-2">
                              <img src={yellow || "/placeholder.svg"} alt="" />
                            </div>
                            <div className="flex items-center">
                              <h3 className="font-medium text-[#0E121B] font-['InterDisplay']">
                                Cotton for Enterprise
                              </h3>
                              <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full font-['InterDisplay']">
                                Coming soon
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-[#525866] font-['InterDisplay']">
                            Cotton for Enterprise is a comprehensive web
                            application tailored to meet the needs of
                            businesses.
                          </p>
                        </div>
                      </Link>

                      {/* Cotton as a Service */}
                      <Link
                        to="/"
                        onClick={() => {
                          setIsOfferOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-md bg-purple-500 flex items-center justify-center text-white mr-2">
                              <img src={purple || "/placeholder.svg"} alt="" />
                            </div>
                            <h3 className="font-medium text-[#0E121B] font-['InterDisplay']">
                              Cotton as a Service
                            </h3>
                          </div>
                          <p className="text-sm text-[#525866] font-['InterDisplay']">
                            This model helps organisations use Cotton's
                            expertise to deliver impactful projects and
                            high-performing teams.
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-['InterDisplay']"
                >
                  About Us
                </a>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-['InterDisplay']"
                >
                  Blog
                </a>

                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-['InterDisplay']"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Full-width dropdown that joins directly with the header */}
      {isOfferOpen && (
        <div className="fixed top-[60px] left-0 right-0 bg-white shadow-lg z-40 border-t border-gray-100 h-[200px]">
          <div className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/individual"
                className="flex flex-col"
                onClick={() => {
                  setIsOfferOpen(false);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center text-white mr-2">
                    <img src={green || "/placeholder.svg"} alt="" />
                  </div>
                  <h3 className="font-medium text-[#0E121B] text-[18px] font-['InterDisplay']">
                    Cotton for Individuals
                  </h3>
                </div>
                <p className="text-sm text-[#525866] font-['InterDisplay']">
                  This user-friendly mobile platform puts a world of
                  highly-vetted, professional service providers at your
                  fingertips.
                </p>
              </Link>

              {/* Cotton for Enterprise */}
              <Link
                to="/enterprise"
                onClick={() => {
                  setIsOfferOpen(false);
                  setIsOpen(false);
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-md bg-amber-500 flex items-center justify-center text-white mr-2">
                      <img src={yellow || "/placeholder.svg"} alt="" />
                    </div>
                    <h3 className="font-medium text-[#0E121B] text-[18px] font-['InterDisplay']">
                      Cotton for Enterprise
                    </h3>
                    <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded-full font-['InterDisplay']">
                      Coming soon
                    </span>
                  </div>
                  <p className="text-sm text-[#525866] font-['InterDisplay']">
                    Cotton for Enterprise is a comprehensive web application
                    tailored to meet the needs of businesses.
                  </p>
                </div>
              </Link>

              {/* Cotton as a Service */}
              <Link
                to="/"
                onClick={() => {
                  setIsOfferOpen(false);
                  setIsOpen(false);
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-md bg-purple-500 flex items-center justify-center text-white mr-2">
                      <img src={purple || "/placeholder.svg"} alt="" />
                    </div>
                    <h3 className="font-medium text-[#0E121B] text-[18px] font-['InterDisplay']">
                      Cotton as a Service
                    </h3>
                  </div>
                  <p className="text-sm text-[#525866] font-['InterDisplay']">
                    This model helps organisations use Cotton's expertise to
                    deliver impactful projects and high-performing teams.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isOfferOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent"
          onClick={() => {
            setIsOfferOpen(false);
            setIsOpen(false);
          }}
        ></div>
      )}
    </>
  );
}
