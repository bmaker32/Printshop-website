import React, { useState } from 'react';

const Accordion = ({ faqItems }) => {
  return (
    <div className="w-full md:w-2/5 mx-auto mt-10"> {/* Container for centering and width */}
      {faqItems.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
};

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2 border rounded-md">
      <button
        className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.title}</span>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden bg-red-50 items-center transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40 p-4' : 'max-h-0'}`}
        style={{ maxHeight: isOpen ? '1000px' : '0px' }} // Using inline style for dynamic maxHeight
      >
        <div className="p-4 text-gray-700  bg-gray-50 rounded-b-md">
          {item.content}
        </div>
      </div>
    </div>
  );
};
export default Accordion