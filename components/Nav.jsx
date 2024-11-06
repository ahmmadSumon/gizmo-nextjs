"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { FiShoppingCart } from "react-icons/fi"; // Cart icon
import { FaSearch } from "react-icons/fa"; // Search icon
import { FiUser } from "react-icons/fi"; // User icon
import { FiMenu } from "react-icons/fi"; // Hamburger icon
import useCartStore from "../app/useCartStore"; // Import Zustand store
import ToastMessage from "../components/ToastMessage"; // Import Toast component

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For toggling search bar
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [isToastVisible, setIsToastVisible] = useState(false); // Track toast visibility
  const [toastMessage, setToastMessage] = useState(""); // The message for the toast

  // Access cart state from Zustand store
  const cartItems = useCartStore((state) => state.cart.length); // Get the number of items in the cart
  const addToCart = useCartStore((state) => state.addToCart); // Add item to cart function

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Smartphones", href: "/smartphones" },
    { name: "Laptops", href: "/laptops" },
    { name: "Gaming Consoles", href: "/gaming-consoles" },
    { name: "Wearables", href: "/wearables" },
    { name: "Accessories", href: "/accessories" },
    { name: "About Us", href: "/about" },
    { name: "Support", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle login/logout
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      // Handle actual logout logic here (e.g., clear session or token)
    } else {
      setIsLoggedIn(true);
      // Handle actual login logic here (e.g., set session or token)
    }
  };

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart in Zustand store
    setToastMessage(`${product.name} has been added to your cart!`); // Set the toast message
    setIsToastVisible(true); // Show the toast

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setIsToastVisible(false); // Hide the toast
    }, 3000);
  };

  return (
    <nav
      className={`md:bg-transparent/30 bg-black shadow-md py-2 text-white md:py-5 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src={logo} alt="Gadget Shop" width={60} height={60} />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavigationMenuDemo />
          </div>
          
          {/* Desktop Search, Cart, and Login */}
          <div className=" flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white p-2"
              title="Search"
            >
              <FaSearch />
            </button>
            <div className="relative">
              <Link href="/cart">
                <FiShoppingCart className="text-white text-2xl" />
              </Link>
              {/* Cart Item Count */}
              {cartItems > 0 && (
                <span className="absolute -top-[15] -right-[5] text-xs bg-[#E6341D] text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </div>
            {/* Login Button or User Profile */}
            <button
              onClick={handleLoginLogout}
              className="flex items-center text-white p-2"
              title={isLoggedIn ? "Logout" : "Login"}
            >
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <FiUser className="text-xl" />
                  <span>Profile</span>
                </div>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-white text-2xl"
          >
            <FiMenu/>
          </button>
          
        </div>
      
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-black-400 rounded-b-lg shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block pl-3 pr-4 py-2 text-white border-l-4 border-transparent hover:bg-yellow-500 hover:border-indigo-500 text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Search */}
            <div className="flex justify-center mt-4">
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-3/4 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Search Bar Modal (Mobile) */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className="flex items-center justify-center space-x-2">
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full p-2 border border-gray-300 text-black rounded-md  outline-none"
              />
              <button
                className="p-2 bg-black rounded-full text-white"
              >
                Search
              </button>
              <button
              onClick={() => setIsSearchOpen(false)}
              className=" bg-black rounded-full p-3 text-white"
            >
              X
            </button>
            </div>
           
          </div>
        </div>
      )}

      {/* Toast Message */}
      {/* This can be used to show toast messages when adding to cart */}
    </nav>
  );
}
