import React from 'react';
import { motion } from 'framer-motion';

const PackagingSolution = ({ title, description, products, imageUrl }) => {
  return (
    <div className="bg-gray-50 flex justify-center items-center pt-5">
      <div className="md:shadow-xl mx-auto md:mx-5 px-10 md:px-12 lg:px-24 max-w-screen-xl rounded-2xl bg-white">
        <section className="px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4"
            style={{ letterSpacing: '-0.05em' }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-3 text-gray-600 leading-relaxed md:text-lg font-light max-w-2xl text-center mx-auto md:mx-0"
          >
            {description}
          </motion.p>
        </section>
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left Column: 3 Text Blocks */}
          <div className="flex flex-col justify-start md:justify-between space-y-6 md:space-y-0">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: false, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="mb-4 md:mb-0"
              >
                <div className="rounded-xl overflow-hidden shadow-md my-1">
                  <div className={`bg-${product.color}-100 p-4 flex flex-col justify-center items-center h-full`}>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Center Column: Image */}
          <div className="md:col-span-2 flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
              src={imageUrl}
              alt="Center Visual"
              className="w-sm h-auto rounded-xl shadow-lg object-cover"
              style={{ filter: 'brightness(95%)' }}
            />
          </div>
          {/* Right Column: 3 Text Blocks */}
          <div className="flex flex-col justify-start md:justify-between space-y-6 md:space-y-0">
            {products.slice(3).map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: false, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="mb-4 md:mb-0"
              >
                <div className="rounded-xl overflow-hidden shadow-md my-1">
                  <div className={`bg-${product.color}-100 p-4 flex flex-col justify-center items-center h-full`}>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagingSolution;