import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const menuItems = [
    {
      title: 'Packaging & Bag Solutions',
      items: ['Tote Bags', 'Paper Bags', 'Non-Woven Bags', 'Polypropylene Bags', 'Eco-Friendly Bags'],
    },
    {
      title: 'Paper Printing Solutions',
      items: ['Business Cards', 'Brochures', 'Flyers', 'Posters', 'Letterheads', 'Catalogs'],
    },
    {
      title: 'Wearable Printing',
      items: ['T-Shirts', 'Hoodies', 'Sweaters', 'Jackets', 'Caps', 'Sportswear'],
    },
    {
      title: 'Drinkware Products',
      items: ['Mugs', 'Thermos', 'Tumblers', 'Water Bottles', 'Shot Glasses', 'Wine Glasses'],
    },
  ];

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Move hover events to the button */}
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Our Products
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-xl p-8 mt-2"
            onMouseEnter={() => setIsOpen(true)} // Keep menu open when hovering over it
            onMouseLeave={() => setIsOpen(false)} // Close menu when leaving it
          >
            <div className="grid grid-cols-4 gap-8">
              {menuItems.map((category) => (
                <motion.div
                  key={category.title}
                  onHoverStart={() => setActiveCategory(category.title)}
                  className="relative"
                >
                  <h3 className="text-lg font-semibold mb-4 text-blue-600 border-l-4 border-blue-500 pl-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <motion.li
                        key={item}
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {activeCategory === category.title && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="text-xl font-bold mb-4">Featured Products</h4>
              <motion.div className="grid grid-cols-4 gap-6">
                {['Eco-Friendly Tote Bundle', 'Premium Ceramic Mugs', 'Organic Cotton T-Shirts', 'Recycled Paper Set']
                  .map((product) => (
                    <motion.div
                      key={product}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <div className="h-40 bg-blue-100 rounded-lg mb-3" />
                      <p className="font-medium">{product}</p>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;