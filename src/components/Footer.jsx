import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">About Us</h4>
            <p className="text-gray-500 text-sm">
              We are a Printing and advertising company dedicated to building amazing experiences.
              Our team is passionate about innovation and delivering quality services that make a difference.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Quick Links</h4>
            <ul className="text-gray-500 text-sm">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-700">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-700">Portfolio</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-700">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Contact</h4>
            <ul className="text-gray-500 text-sm">
              <li className="mb-2">
                <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-700">+251-945967713</a></p>
              </li>
              <li className="mb-2">
                <p>Email: <a href="mailto:info@example.com" className="hover:text-gray-700">bisratmakk123@gmail.com</a></p>
              </li>
              <li>
                <p>Address:  Addis Ababa, Ethiopia</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <i className="fab fa-instagram-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} Erbana Printing and Advertising. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-gray-700 mr-4">Terms of Service</a>
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;