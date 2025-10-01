import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface StatsProps {
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  color?: 'blue' | 'purple' | 'green' | 'pink';
}

export default function Stats({ icon, value, label, suffix = '', color = 'blue' }: StatsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  const colorClasses = {
    blue: 'from-blue-600 to-blue-800',
    purple: 'from-purple-600 to-purple-800',
    green: 'from-green-600 to-green-800',
    pink: 'from-pink-600 to-pink-800',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div
        className={`w-12 h-12 bg-gradient-to-br ${colorClasses[color]} rounded-lg flex items-center justify-center mb-4`}
      >
        <i className={`${icon} text-white text-xl`}></i>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}
