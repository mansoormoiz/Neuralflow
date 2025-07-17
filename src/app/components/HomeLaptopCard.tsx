import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  icon: any;
}

interface HomeLaptopCardProps {
  service: Service;
  index: number;
}

export default function HomeLaptopCard({ service, index }: HomeLaptopCardProps) {
  return (
    <motion.div
      key={index}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100/50 hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-2">
          <div className="flex-shrink-0 p-2 bg-primary/5 rounded-lg">
            <service.icon className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-sm font-semibold text-gray-900">{service.title}</h3>
        </div>
        <p className="text-xs text-gray-600">{service.description}</p>
      </div>
    </motion.div>
  );
} 