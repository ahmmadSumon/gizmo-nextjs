"use client";

import Link from 'next/link'; // Importing the Link component for navigation
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-400 hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sales" className="text-gray-400 hover:text-white">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest offers and product launches.</p>
            <form action="#" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-4 text-gray-800 rounded-lg"
                required
              />
              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
