import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import erbanaLogo from '../../public/assets/erbanaLogo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const menuItems = [
    {
      title: 'Packaging & Bag Solutions',
      items: ['Tote Bags', 'Paper Bags', 'Non-Woven Bags', 'Polypropylene Bags'],
    },
    {
      title: 'Paper Printing',
      items: ['Business Cards', 'Brochures', 'Flyers', 'Posters'],
    },
    {
      title: 'Wearables',
      items: ['T-Shirts', 'Hoodies', 'Sweaters', 'Jackets'],
    },
    {
      title: 'Drinkware',
      items: ['Mugs', 'Thermos', 'Tumblers', 'Water Bottles'],
    },
  ];

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={erbanaLogo} alt="Company Logo" className="h-6 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-gray-900 font-semibold hover:text-blue-600">
                Services
              </a>
              <a href="#blog" className="text-gray-900 font-semibold hover:text-blue-600">
                Blog
              </a>
              <a href="#contact" className="text-gray-900 font-semibold hover:text-blue-600">
                Contact us
              </a>

              {/* Products Trigger */}
              <div
                className="relative "
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button className="bg-gray-950 font-semibold text-white px-4 py-3  rounded-xl text-sm  hover:bg-gray-700 transition">
                  Products
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="fixed left-0 w-screen bg-white border-t shadow-lg"
                      style={{ top: '64px' }} // Adjust this value to match your navbar height
                    >
                      <div className="max-w-7xl mx-auto px-8 py-6">
                        <div className="grid grid-cols-4 gap-8">
                          {menuItems.map((category) => (
                            <div key={category.title} className="space-y-4">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {category.title}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((item) => (
                                  <li key={item}>
                                    <a
                                      href="#"
                                      className="text-gray-600 hover:text-pink-600 transition-colors"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-4 bg-white border-t">
              <a href="#services" className="block text-gray-700">
                Services
              </a>
              <a href="#projects" className="block text-gray-700">
                Projects
              </a>
              <a href="#contact" className="block text-gray-700">
                Contact
              </a>

              <div className="pt-2 border-t">
                <div className="font-medium text-gray-900 mb-2">Products</div>
                <div className="grid grid-cols-2 gap-4">
                  {menuItems.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h3 className="text-sm font-medium text-blue-600">
                        {category.title}
                      </h3>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="text-gray-600 text-sm">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}