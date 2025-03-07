import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Milestone, Flag, Trophy, Users, Star } from 'lucide-react';

const timelineEvents = [
  {
    date: 'May 2024',
    title: 'DuckGang Founded',
    description: 'The legendary crew sets sail for the first time',
    icon: <Flag className="text-primary-600" size={24} />,
  },
  {
    date: 'January 2025',
    title: 'First Territory Conquest',
    description: 'Successful creation of the Discord Community',
    icon: <Milestone className="text-primary-600" size={24} />,
  },
  {
    date: 'February 2025',
    title: '2500 Members Milestone',
    description: 'The community grows stronger with each passing day',
    icon: <Users className="text-primary-600" size={24} />,
  },
  {
    date: 'March 2025',
    title: '5000 Members Milestone',
    description: 'The community grows stronger with each passing day',
    icon: <Trophy className="text-primary-600" size={24} />,
  },
  {
    date: 'December 2025',
    title: 'Future Goals',
    description: '10,000 Community members',
    icon: <Star className="text-primary-600" size={24} />,
  },
];

const Timeline = () => {
  return (
    <div className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-600/20" />
          
          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              icon={event.icon}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLeft: boolean;
  index: number;
}

const TimelineEvent = ({ date, title, description, icon, isLeft, index }: TimelineEventProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex items-center justify-center mb-16 ${
        isLeft ? 'flex-row-reverse' : ''
      }`}
    >
      <div className={`w-1/2 ${isLeft ? 'text-right pr-8' : 'pl-8'}`}>
        <div className={`bg-gray-800/20 rounded-lg p-6 border border-primary-600/20 ${
          isLeft ? 'ml-auto' : ''
        }`}>
          <div className="text-primary-600 text-sm mb-2">{date}</div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      
      <div className="w-12 h-12 bg-gray-800 rounded-full border-4 border-primary-600 flex items-center justify-center z-10">
        {icon}
      </div>
      
      <div className="w-1/2" />
    </motion.div>
  );
};

export default Timeline;