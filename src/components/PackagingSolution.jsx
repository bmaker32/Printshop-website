import React from 'react';
import { motion } from 'framer-motion';

const PackagingSolution = () => {
  return (
    <div className="bg-gray-50 flex  justify-center items-center pt-5">
      {' '}
      {/* Updated background color for softer look, added padding */}
      <div className=" md:shadow-xl mx-auto md:mx-5 px-10 md:px-12 lg:px-24 max-w-screen-xl rounded-2xl bg-white">
        {' '}
        {/* Added max-width to contain content, adjusted padding */}
        <section className="px-6 md:px-12 lg:px-24 flex flex-col justify-center items items-center ">
          {' '}
          {/* Adjusted padding for different screen sizes, added margin */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4" // Serif font for heading, adjusted size and margin
            style={{ letterSpacing: '-0.05em' }} // Slightly reduced letter spacing for headings
          >
            {title} {/*title */}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-3 text-gray-600 leading-relaxed md:text-lg font-light max-w-2xl text-center mx-auto md:mx-0" // Adjusted text color, line height, font weight, and max-width
          >
          {description} {/*description */}
          </motion.p>
        </section>
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {' '}
          {/* Adjusted grid for better spacing and responsiveness */}
          {/* Left Column: 3 Text Blocks */}
          <div className="flex flex-col justify-start md:justify-between space-y-6 md:space-y-0">
            {' '}
            {/* Adjusted vertical alignment and spacing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="mb-4 md:mb-0" // Removed redundant text-center and md:text-left, adjusted margin
            >
              <div className="rounded-xl overflow-hidden shadow-md my-1">
                <div className="bg-blue-100 p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold  mb-2 ">
                    {Product.Name}
                  </h3>{' '}
                  {/* Serif font for sub-headings */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Ideal for shipping, retail packaging, or high-end product
                    presentation.
                  </p>{' '}
                  {/* Adjusted text color and line height */}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 md:mb-0" // Adjusted margin
            >
              <div className="rounded-xl overflow-hidden shadow-md my-1">
                <div className="bg-red-100 p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold  mb-2 font-sans">
                    Non-woven Bags
                  </h3>{' '}
                  {/* Serif font for sub-headings */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Popular for shopping, promotional giveaways, or eco-friendly
                    packaging solutions.
                  </p>{' '}
                  {/* Adjusted text color and line height */}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-md my-1">
                <div className="bg-orange-100 p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold  mb-2 font-serif">
                    Tote Bags
                  </h3>{' '}
                  {/* Serif font for sub-headings */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Perfect for retail and grocery stores looking to promote
                    sustainable practices.
                  </p>{' '}
                  {/* Adjusted text color and line height */}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Center Column: Image */}
          <div className="md:col-span-2 flex justify-center items-center">
            {' '}
            {/* Adjusted column span and flex alignment */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
              src='/assets/paperbag.jpg' // Adjusted image source
              alt="Center Visual"
              className="w-sm h-auto rounded-xl shadow-lg object-cover" // Made image responsive within its container, rounded corners and shadow
              style={{ filter: 'brightness(95%)' }} // Slightly reduced brightness for a subtle effect
            />
          </div>
          {/* Right Column: 3 Text Blocks */}
          <div className="flex flex-col justify-start md:justify-between space-y-6 md:space-y-0">
            {' '}
            {/* Adjusted vertical alignment and spacing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="mb-4 md:mb-0" // Adjusted margin
            >
              <div className="rounded-xl overflow-hidden shadow-md my-1">
                <div className="bg-blue-100 p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-right md:text-left font-serif">
                    Paper Bags
                  </h3>{' '}
                  {/* Serif font for sub-headings, text alignment adjusted */}
                  <p className="text-sm text-gray-500 leading-relaxed text-right md:text-left">
                    Perfect for carrying groceries, fashion items, takeout food,
                    and promotional materials
                  </p>{' '}
                  {/* Adjusted text color, line height, and alignment */}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 md:mb-0" // Adjusted margin
            >
              <div className="rounded-xl overflow-hidden shadow-md my-1">
                <div className="bg-red-100 p-4 flex flex-col justify-center items-center h-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-right md:text-left font-serif">
                    Paper Bags
                  </h3>{' '}
                  {/* Serif font for sub-headings, text alignment adjusted */}
                  <p className="text-sm text-gray-500 leading-relaxed text-right md:text-left">
                    Perfect for carrying groceries, fashion items, takeout food,
                    and promotional materials
                  </p>{' '}
                  {/* Adjusted text color, line height, and alignment */}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: false, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-blue-100 p-4 flex flex-col justify-center items-center h-full">
                <h3 className="text-xl font-semibold  mb-2 ">
                  Packaging Boxes
                </h3>{' '}
                {/* Serif font for sub-headings */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ideal for shipping, retail packaging, or high-end product
                  presentation.
                </p>{' '}
                {/* Adjusted text color and line height */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagingSolution;
