import React from 'react';
import {motion} from 'framer-motion'

const BentoComponent = ({ title, description, bentoItems }) => {
  return (
    <div className="md:shadow-xl mx-auto md:mx-5 px-10 py-10 md:px-12 lg:px-24 max-w-screen-xl rounded-2xl bg-white mt-10">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="" // Serif font for heading, adjusted size and margin
          style={{ letterSpacing: '-0.05em' }} // Slightly reduced letter spacing for headings
        >
      <div className="text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {bentoItems.map((item, index) => (
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="" // Serif font for heading, adjusted size and margin
          style={{ letterSpacing: '-0.05em' }} // Slightly reduced letter spacing for headings
        >
          <div key={index} className="bg-purple-50 rounded-lg p-5 shadow-md flex flex-col hover:scale-105 hover:-translate-y-2 transition duration-300 ease-in-out">
            <div className="mb-4 flex justify-center rounded-md overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="max-w-full h-55 object-cover overflow-hidden rounded-md" />
            </div>
            <h3 className="text-lg mb-2 text-gray-800 font-semibold">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
          </div>
          </motion.div>
        
        ))}
      </div>
    </div>
  );
};

export default BentoComponent;