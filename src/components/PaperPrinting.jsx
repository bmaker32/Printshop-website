import React from 'react';
import BentoComponent from './BentoComponent'; // Adjust path if necessary
import {motion} from 'framer-motion'
const App = () => {
  const bentoItemsData = [
    {
      title: 'First Bento Item',
      description:
        'This is the description for the first bento item. You can add more text here to explain about this item.',
      imageUrl: '/printshop-website/assets/Varsity.jpg',
      // Replace with your image URL
    },
    {
      title: 'Flyers',
      description:
        'Description for the second item.  This area will describe the features or details of the second box.',
      imageUrl: '/printshop-website/assets/flyers.jpg', // Replace with your image URL
    },
    {
      title: 'Business cards',
      description:
        'A longer description for the third bento item to demonstrate text wrapping within the box.',
      imageUrl: '/printshop-website/assets/FurnitureBusinessCard.jpg', // Replace with your image URL
    },
    {
      title: 'Magazines',
      description:
        'A longer description for the third bento item to demonstrate text wrapping within the box.',
      imageUrl: '/printshop-website/assets/magazine.jpg', // Replace with your image URL
    },
    {
      title: 'Certificates',
      description:
        'A longer description for the third bento item to demonstrate text wrapping within the box.',
      imageUrl: '/printshop-website/assets/certificate.jpg', // Replace with your image URL
    },
    {
      title: 'Brochures',
      description:
        'A longer description for the third bento item to demonstrate text wrapping within the box.',
      imageUrl: '/printshop-website/assets/Brochures.jpg', // Replace with your image URL
    },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center'>
      <BentoComponent
        title="Paper Printing Services"
        description="This is a brief description that goes below the main title and above the bento boxes. You can use this space to introduce the section."
        bentoItems={bentoItemsData}
        
      />
      
    </div>
  );
};

export default App;
