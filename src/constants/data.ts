import { Product, TeamMember, Feature } from '../types';
import { Wifi, BarChart2, Globe, Bell, Brain } from 'lucide-react';

export const products: Product[] = [
  {
    id: 1,
    name: 'SmartAero Tower',
    description: 'All-in-one smart agriculture tower with sensors for temperature, humidity, soil moisture, water level, and pH. Solar-powered. Connects to SmartAero mobile app.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 299.99,
    category: 'Main Product',
    features: [
      'Temperature & Humidity Monitoring',
      'Soil Moisture Sensing',
      'Water Level Detection',
      'pH Measurement',
      'Solar Power System',
      'Mobile App Integration',
      'Real-time Data Analytics'
    ],
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userId: '1',
        userName: 'John D.',
        rating: 5,
        comment: 'Excellent product, transformed my farming operations!',
        date: '2025-02-15'
      }
    ],
    specifications: {
      'Power Source': 'Solar with Battery Backup',
      'Connectivity': 'WiFi + Bluetooth',
      'Sensor Range': 'Up to 100m',
      'Battery Life': '72 hours backup',
      'Weather Resistance': 'IP67 rated'
    }
  },
  {
    id: 2,
    name: 'Soil Moisture Sensor Kit',
    description: 'Professional-grade soil moisture sensors with high accuracy and long-term stability. Perfect for precision agriculture.',
    image: 'https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 49.99,
    category: 'Agriculture IoT Devices',
    features: [
      'High Accuracy Sensing',
      'Long-term Stability',
      'Easy Installation',
      'Wireless Connectivity',
      'Mobile App Compatible'
    ],
    rating: 4.6,
    reviews: [],
    specifications: {
      'Sensor Type': 'Capacitive',
      'Range': '0-100% VWC',
      'Accuracy': '±3%',
      'Power': '3.3-5V DC'
    }
  },
  {
    id: 3,
    name: 'Smart Irrigation Controller',
    description: 'Automated irrigation system with smart scheduling and weather adaptation. Save water while maintaining optimal soil moisture.',
    image: 'https://images.pexels.com/photos/2132780/pexels-photo-2132780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 149.99,
    category: 'Agriculture IoT Devices',
    features: [
      'Weather-based Scheduling',
      'Mobile Control',
      'Water Usage Analytics',
      'Multiple Zone Control',
      'Rain Delay Feature'
    ],
    rating: 4.7,
    reviews: [],
    specifications: {
      'Zones': 'Up to 8',
      'WiFi': '2.4GHz',
      'Weather Data': 'Real-time',
      'Scheduling': 'Smart AI-based'
    }
  },
  {
    id: 4,
    name: 'pH Meter Kit PHO-14',
    description: 'Professional pH measurement kit with digital display and automatic temperature compensation.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 79.99,
    category: 'Agriculture IoT Devices',
    features: [
      'Digital Display',
      'Auto Temperature Compensation',
      'Quick Readings',
      'Calibration Solution Included',
      'Waterproof Design'
    ],
    rating: 4.5,
    reviews: [],
    specifications: {
      'Range': '0-14 pH',
      'Accuracy': '±0.01 pH',
      'Response Time': '≤1 minute',
      'Battery Life': '2000 hours'
    }
  },
  {
    id: 5,
    name: 'IoT Weather Station',
    description: 'Compact weather station with multiple sensors for comprehensive environmental monitoring.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 199.99,
    category: 'Agriculture IoT Devices',
    features: [
      'Temperature Monitoring',
      'Humidity Sensing',
      'Wind Speed & Direction',
      'Rainfall Measurement',
      'Solar Radiation'
    ],
    rating: 4.8,
    reviews: [],
    specifications: {
      'Sensors': '7 integrated',
      'Power': 'Solar + Battery',
      'Range': '100m wireless',
      'Updates': 'Every 5 minutes'
    }
  },
  {
    id: 6,
    name: 'SmartAero ESP32 IoT Kit',
    description: 'Pre-configured ESP32 development kit with sensors and software for SmartAero integration.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 89.99,
    category: 'Agriculture IoT Devices',
    features: [
      'Pre-configured Setup',
      'Multiple Sensors',
      'Development Guide',
      'SmartAero Compatible',
      'Example Projects'
    ],
    rating: 4.6,
    reviews: [],
    specifications: {
      'Processor': 'ESP32-WROOM',
      'Memory': '4MB Flash',
      'Connectivity': 'WiFi + BLE',
      'Sensors': '5 included'
    }
  },
  {
    id: 7,
    name: 'Sensor Cable Kit',
    description: 'Professional-grade weatherproof cables for sensor installations.',
    image: 'https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 29.99,
    category: 'Accessories & Components',
    features: [
      'Weatherproof Design',
      'UV Resistant',
      'Multiple Lengths',
      'Color Coded',
      'Strain Relief'
    ],
    rating: 4.7,
    reviews: [],
    specifications: {
      'Length': '5m/cable',
      'Rating': 'IP67',
      'Temperature': '-40°C to 80°C',
      'Conductor': 'Copper'
    }
  },
  {
    id: 8,
    name: 'Solar Power Kit',
    description: 'Complete solar power solution for SmartAero devices with battery backup.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 159.99,
    category: 'Accessories & Components',
    features: [
      'Solar Panel',
      'Battery Pack',
      'Charge Controller',
      'Mounting Hardware',
      'Installation Guide'
    ],
    rating: 4.8,
    reviews: [],
    specifications: {
      'Panel Power': '20W',
      'Battery': '10000mAh',
      'Output': '5V/12V DC',
      'Runtime': '72h backup'
    }
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Med Ghaith Romdhani',
    role: 'Co-Founder & Lead R&D',
    image: '/ghaith.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/mohamedghaithromdhani/'
  },
  {
    id: 2,
    name: 'Mohamed Ali Jaadari',
    role: 'Co-Founder & Lead Developer',
    image: '/me.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/mohamed-ali-jaadari-191b9412b/'
  },
  {
    id: 3,
    name: 'Aziz Ben Salem',
    role: 'Co-Founder & Lead Developer',
    image: '/aziz.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/aziz-ben-salem-5946842b3/'
  },
  {
    id: 4,
    name: 'Oumayma Nacib',
    role: 'Co-Founder & Finance Manager',
    image: '/ncib.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/oumayma-nacib-b25622329/'
  },
  {
    id: 5,
    name: 'Yassine Ben Younes',
    role: 'Co-Founder & Media Manager',
    image: '/yassin.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/yassine-ben-younes-9537ba1b9/'
  }
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Wireless Sensor Connection',
    description: 'Our ESP32 Wi-Fi enabled devices connect seamlessly to your network, ensuring reliable data transmission without complicated wiring.',
    icon: 'Wifi'
  },
  {
    id: 2,
    title: 'Data Visualization',
    description: 'Comprehensive charts and logs help you understand trends and make informed decisions based on historical and real-time data.',
    icon: 'BarChart2'
  },
  {
    id: 3,
    title: 'Remote Control',
    description: 'Take action from anywhere in the world with our web and mobile apps, providing complete control over your environment.',
    icon: 'Globe'
  },
  {
    id: 4,
    title: 'Real-time Alerts',
    description: 'Receive instant notifications when environmental conditions change, allowing for immediate response to critical situations.',
    icon: 'Bell'
  },
  {
    id: 5,
    title: 'AI-powered Insights',
    description: 'Our intelligent system analyzes data patterns to provide recommendations for optimal environmental conditions.',
    icon: 'Brain'
  }
];

export const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wifi':
      return Wifi;
    case 'BarChart2':
      return BarChart2;
    case 'Globe':
      return Globe;
    case 'Bell':
      return Bell;
    case 'Brain':
      return Brain;
    default:
      return Wifi;
  }
};