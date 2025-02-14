import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import ReviewSection from './ReviewSection';
import RotatingText from './RotatingText';

const Landing = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6   py-20 px-10  max-w-screen md:max-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/printshop-website/assets/background.jpg')" }}
    >
      <div className="py-5 rounded-xl col-span-2 row-span-2  flex flex-col justify-center items-center space-y-6">
        {/* Hero Text with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center md:text-left w-full px-8"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            For all your
            <RotatingText
              texts={['Packaging', 'Printing', 'Advertising']}
              mainClassName="px-2 sm:px-2 md:px-3 text-pink-500 text-black py-0.5 sm:py-1 md:py-2 justify-start rounded-lg inline-flex"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />{' '}
            Needs.
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We provide top-notch advertising, web development, and printing
            solutions to take your business to the next level.
          </p>
          <div className="flex md:flex-row flex-col md:justify-start justify-center  mt-6 gap-2">
            <button className="bg-gray-950 text-white px-6 py-3  rounded-xl text-lg font-medium hover:bg-gray-700 transition">
              Get Started
            </button>
            <button className="border border-gray-800 text-gray-900 px-6 py-3 rounded-xl text-lg font-medium hover:bg-pink-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </motion.div>
        <div className="w-full flex md:justify-between justify-center mt-3 px-8">
          <Counter />
        </div>
        <div className="w-full flex md:justify-between justify-center  px-8">
          <ReviewSection />
        </div>
      </div>

      <motion.dev
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-xl col-span-2 overflow-hidden "
      >
        <div className="rounded-xl col-span-2 ">
          <img
            src='/printshop-website/assets/round.jpg'
            alt="Image 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.dev>
      <motion.dev
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="col-span-1 overflow-hidden"
      >
        <div className="rounded-xl col-span-1 bg-yellow-300 ">
          <img
            src='/printshop-website/assets/jersey.jpg'
            alt="Image 3"
            className="w-full  object-cover rounded-xl"
          />
        </div>
      </motion.dev>
      <motion.dev
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-xl col-span-1 overflow-hidden "
      >
        <div className="rounded-xl col-span-1 bg-gray-700 flex items-center justify-center text-white font-semibold ">
          <img
            src='/printshop-website/assets/idcard.jpg'
            alt="Image 3"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </motion.dev>
    </div>
  );
};

export default Landing;
