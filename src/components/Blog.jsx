import React from 'react';

const BentoBox = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <h1 className='text-3xl font-semibold font-serif text-gray-900 text-center'>Blog posts</h1>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-8 lg:p-10">

        {/* Main Dish Area */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-xl overflow-hidden shadow-md">
          <div className="bg-blue-100 p-6 flex flex-col justify-center items-center  md:items-start h-full">
            <h2 className="text-2xl font-bold text-center md:text-start text-gray-800 mb-2">Screen Printing in Ethiopia</h2>
            <p className="text-gray-700 leading-relaxed">
            Screen printing in Ethiopia faces challenges like limited access to high-quality inks and materials, along with inconsistent power supply, affecting production efficiency and print quality.
            </p>
            <button className="mt-4 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Read More
            </button>
          </div>
        </div>

        {/* Side Dish 1 */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <div className="bg-green-100 p-4 flex flex-col md:justify-start md:items-start justify-center items-center h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-1 md:text-start text-center">Impact of Macroeconomic Reform on the Printing Industry </h3>
            <p className="text-gray-600 text-sm md:text-start text-center">
            Macroeconomic reforms can significantly impact the printing industry by influencing production costs, supply chains,...
            </p>
            <button className="mt-4 bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              Read More
            </button>
          </div>
        </div>

        {/* Side Dish 2 */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <div className="bg-yellow-100 p-4 flex flex-col justify-center items-center h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">Erbana Printing and Advertising </h3>
            <p className="text-gray-600 text-sm text-center">
              Erbana.com
            </p>
          </div>
        </div>

        

      </div>
    </div>
  );
};

export default BentoBox;