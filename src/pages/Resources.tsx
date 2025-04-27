import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane as Plant, Droplet, Leaf, Sprout, LineChart, Zap, CloudRain, X } from 'lucide-react';

interface ResourcesPageProps {
  isDarkMode: boolean;
}

interface Article {
  title: string;
  description: string;
  icon: React.FC<{ size?: number; className?: string }>;
  link: string;
  content?: {
    intro: string;
    sections: {
      title: string;
      content: string;
    }[];
    conclusion: string;
  };
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ isDarkMode }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      title: 'Understanding Aeroponics',
      description: 'A comprehensive guide to aeroponic systems and their benefits.',
      icon: Droplet,
      link: '#',
      content: {
        intro: 'Aeroponics is an advanced form of hydroponics where plants are grown in an air or mist environment without the use of soil. This innovative method has revolutionized indoor farming and offers numerous advantages over traditional growing methods.',
        sections: [
          {
            title: 'How Aeroponics Works',
            content: 'In an aeroponic system, plant roots are suspended in air and regularly misted with a nutrient-rich solution. This method ensures maximum oxygen exposure to the roots while providing precise control over nutrient delivery. The fine mist created by high-pressure nozzles ensures that roots receive the perfect balance of water, nutrients, and oxygen.'
          },
          {
            title: 'Key Components',
            content: 'A typical aeroponic system consists of several crucial components: the growing chamber, misting nozzles, a nutrient reservoir, a high-pressure pump, and a timer system. The growing chamber provides a dark, humid environment for roots, while the misting system delivers nutrients at regular intervals.'
          },
          {
            title: 'Environmental Control',
            content: 'Temperature, humidity, and pH levels must be carefully monitored and controlled in aeroponic systems. The ideal temperature range is 65-75°F (18-24°C), with humidity levels between 60-70%. Regular monitoring ensures optimal growing conditions and prevents potential issues.'
          }
        ],
        conclusion: 'Aeroponics represents the cutting edge of agricultural technology, offering unprecedented control over growing conditions and resource efficiency. As we move towards more sustainable farming methods, aeroponic systems will play an increasingly important role in food production.'
      }
    },
    {
      title: 'Aeroponics vs Hydroponics',
      description: 'Comparing different soilless growing methods.',
      icon: Leaf,
      link: '#',
      content: {
        intro: 'While both aeroponics and hydroponics are soilless growing methods, they differ significantly in their approach and benefits. Understanding these differences helps in choosing the right system for your needs.',
        sections: [
          {
            title: 'Water Usage',
            content: 'Aeroponic systems use up to 95% less water than hydroponics. In hydroponics, roots are constantly submerged in nutrient solution, while aeroponics uses a fine mist, dramatically reducing water consumption.'
          },
          {
            title: 'Oxygen Availability',
            content: 'Aeroponics provides superior oxygenation to roots as they are suspended in air. Hydroponic systems require additional oxygenation through air stones or water movement, which can be less efficient.'
          },
          {
            title: 'Nutrient Absorption',
            content: 'Plants in aeroponic systems can absorb nutrients more efficiently due to the increased oxygen availability and the fine mist delivery system. This results in faster growth rates compared to traditional hydroponic methods.'
          }
        ],
        conclusion: 'While both methods have their merits, aeroponics often proves superior in terms of resource efficiency and growth rates. However, it requires more precise control and monitoring than traditional hydroponics.'
      }
    },
    {
      title: 'Getting Started with SmartAero',
      description: 'Your first steps into smart agriculture.',
      icon: Sprout,
      link: '#',
      content: {
        intro: 'SmartAero combines cutting-edge aeroponic technology with smart monitoring systems to create an efficient and user-friendly growing experience. This guide will help you get started with your SmartAero system.',
        sections: [
          {
            title: 'Initial Setup',
            content: 'Begin by assembling your SmartAero tower following the included instructions. Connect the smart monitoring system to your Wi-Fi network and download the SmartAero app. The system will guide you through the initial calibration process.'
          },
          {
            title: 'Choosing Plants',
            content: 'Start with easy-to-grow plants like lettuce, herbs, or leafy greens. These plants adapt well to aeroponic systems and provide quick results. As you gain experience, you can move on to more challenging crops.'
          },
          {
            title: 'Maintenance',
            content: 'Regular maintenance is crucial for optimal performance. Check nutrient levels weekly, clean misting nozzles monthly, and monitor pH levels daily through the SmartAero app. The app will send notifications when attention is needed.'
          }
        ],
        conclusion: 'With proper setup and maintenance, your SmartAero system will provide fresh, healthy produce year-round. The smart monitoring system takes the guesswork out of growing, making it accessible to both beginners and experienced growers.'
      }
    }
  ];

  const benefits = [
    {
      title: '98% Less Water Usage',
      description: 'Compared to traditional soil farming',
      icon: CloudRain
    },
    {
      title: '300% Faster Growth',
      description: 'Plants grow significantly faster in aeroponic systems',
      icon: Zap
    },
    {
      title: '70% Higher Yield',
      description: 'More efficient use of space and resources',
      icon: LineChart
    }
  ];

  const plants = [
    {
      name: 'Leafy Greens',
      varieties: ['Lettuce', 'Spinach', 'Kale', 'Swiss Chard'],
      growthTime: '30-45 days',
      yield: 'High',
      difficulty: 'Easy'
    },
    {
      name: 'Herbs',
      varieties: ['Basil', 'Mint', 'Parsley', 'Cilantro'],
      growthTime: '20-30 days',
      yield: 'High',
      difficulty: 'Easy'
    },
    {
      name: 'Fruiting Plants',
      varieties: ['Tomatoes', 'Peppers', 'Strawberries'],
      growthTime: '60-80 days',
      yield: 'Medium',
      difficulty: 'Moderate'
    },
    {
      name: 'Root Vegetables',
      varieties: ['Carrots', 'Radishes', 'Beets'],
      growthTime: '40-60 days',
      yield: 'Medium',
      difficulty: 'Advanced'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <main className={`pt-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-12">
        {/* Articles Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            Learn About <span className="text-emerald-500">Aeroponics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-500">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{article.title}</h3>
                  </div>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {article.description}
                  </p>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-emerald-500 hover:text-emerald-600 font-medium"
                  >
                    Read more →
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            Why Choose <span className="text-emerald-500">Aeroponics?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } rounded-lg p-6 shadow-lg text-center`}
                >
                  <div className="inline-block p-4 rounded-full bg-emerald-500/20 text-emerald-500 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Plants Guide Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold mb-8">
            What Can You <span className="text-emerald-500">Grow?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plants.map((plant, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-lg p-6 shadow-lg`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Plant className="text-emerald-500" size={24} />
                  <h3 className="text-xl font-semibold">{plant.name}</h3>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Varieties:</span>{' '}
                    {plant.varieties.join(', ')}
                  </p>
                  <p>
                    <span className="font-medium">Growth Time:</span>{' '}
                    {plant.growthTime}
                  </p>
                  <p>
                    <span className="font-medium">Expected Yield:</span>{' '}
                    {plant.yield}
                  </p>
                  <p>
                    <span className="font-medium">Difficulty Level:</span>{' '}
                    {plant.difficulty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedArticle(null)}
              />
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`relative w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } p-8 shadow-xl`}
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <X size={24} />
                </button>

                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-500">
                      <selectedArticle.icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
                  </div>
                  
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedArticle.content?.intro}
                  </p>
                </div>

                <div className="space-y-8">
                  {selectedArticle.content?.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedArticle.content?.conclusion}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ResourcesPage;