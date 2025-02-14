import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation time in ms (2s)
    const increment = target / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold text-gray-700">{count}+</h2>
      <p className="text-lg text-gray-700">{label}</p>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="flex justify-between items-start gap-10 p-0 m-0">
      <Counter target={100} label="People Helped" />
      <Counter target={20} label="Businesses Helped" />
    </section>
  );
}
