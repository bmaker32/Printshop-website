import ProfileCard from './ProfileCard';
import Carousel from './CarouselProduct';
import { motion } from 'framer-motion';

function CustomizableItems() {
  return (
    <div className="px-10 justify-center items-start bg-gray-100">
      <h3 className="text-2xl font-bold font-serif text-center text-gray-850 px-10">
        {' '}
        Corporate Customizable Items
      </h3>
      <div className="">
        <Carousel />
        
      </div>
    </div>
  );
}

export default CustomizableItems;
