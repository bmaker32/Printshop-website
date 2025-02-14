'use client';
import { motion } from 'framer-motion';
import avatar1 from '../../public/assets/avatars/avatar1.jpg';
import avatar2 from '../../public/assets/avatars/avatar2.jpg';
import avatar3 from '../../public/assets/avatars/avatar3.jpg';
import avatar4 from '../../public/assets/avatars/avatar4.jpg';

const avatars = [avatar1, avatar2, avatar3, avatar4];

export default function ReviewSection() {
  return (
    <div className="flex flex-col justify-start items-start space-y-4 text-center">
      {/* Avatar Stack */}
      <div className="flex -space-x-4 items-center justify-center">
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg"
          >
            <img
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <span className="px-5 font-bold text-gray-900 text-xl">50+</span>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-lg font-medium text-gray-800"
      >
        ⭐⭐⭐⭐⭐
        {/* Rated by <span className="font-bold text-gray-900">more than 50 people</span> */}
      </motion.p>
    </div>
  );
}
