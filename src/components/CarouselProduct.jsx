import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

// Profile data
const profiles = [
  { name: 'Colored Mug', image:'/assets/corporateProducts/colored mug.jpg' },
  { name: 'Hat', image: '/assets/corporateProducts/hat.jpg' },
  { name: 'Key Chain', image: '/assets/corporateProducts/keychain.jpg' },
  { name: 'Neck Tag', image: '/assets/corporateProducts/neckTag.jpg' },
  { name: 'Travel mug', image: '/assets/corporateProducts/Travel Mug.jpg' },
  { name: 'Regular Mugs', image: '/assets/corporateProducts/mugs.jpg' },
];

export default function CarouselProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className=""
      >
        {profiles.map((profile,index) => (
          <motion.div
            key={index}
            // Items start slightly lower and fade in as they appear
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2, // stagger effect for each card
            }}
            className=""
          >
            <ProfileCard name={profile.name} image={profile.image} />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
