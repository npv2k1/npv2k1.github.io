import { motion } from 'framer-motion';
import Badge from './Badge';

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:pb-0"
        >
          <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[9px] top-0 shadow-lg"></div>

          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mt-1">
              {item.company}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center">
              <i className="fas fa-calendar-alt mr-2"></i>
              {item.period}
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          {item.technologies && item.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
