export interface JourneyMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  quote?: {
    text: string;
    author?: string;
  };
  achievements?: string[];
  images: string[];
  icon?: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'spark',
    date: 'August 10, 2024',
    title: 'The Spark of Innovation',
    description: 'SmartAero began as a bold idea during the Tunisia 2056 Challenge, proudly representing the IEEE ISIMa Student Branch in the AgriTech sector.',
    quote: {
      text: 'Congratulations! Your team has achieved the highest score among all teams from your Student Branch.',
      author: 'IEEE Judges'
    },
    images: ['/The Spark of Innovation 1.jpg']
  },
  {
    id: 'vision',
    date: 'August - December 2024',
    title: 'Shaping the Vision',
    description: 'We joined an elite incubation and mentorship program, diving into workshops with industry leaders.',
    achievements: [
      'Our value proposition',
      'An MVP with IoT + AI-driven databases',
      'Our business strategy'
    ],
    images: [
      '/Shaping the Vision 1.jpg',
      '/Shaping the Vision 2.jpg',
      '/Shaping the Vision 3.jpg',
      '/Shaping the Vision 4.jpg',
      '/Shaping the Vision 5.jpg',
      '/Shaping the Vision 6.jpg',
      '/Shaping the Vision 7.jpg',
      '/Shaping the Vision 8.jpg'
    ]
  },
  {
    id: 'competition',
    date: 'November 25, 2024',
    title: 'Rising in Competitions',
    description: 'We presented our prototype at PYFAC X and earned 3rd Place nationally.',
    quote: {
      text: 'The jury tour engaged with participants, negotiated, and crowned the winners of the day.',
      author: 'PYFAC X Committee'
    },
    images: [
      '/Rising in Competitions 1.jpg',
      '/Rising in Competitions 2.jpg'
    ]
  },
  {
    id: 'spotlight',
    date: 'December 7, 2024',
    title: 'A National Spotlight',
    description: 'Finalists at TSYP TN2056, we received a national-stage pitch opportunity and a professional booth.',
    quote: {
      text: "Your hard work and innovation stood out. We can't wait to see you shine in the finals!",
      author: 'TSYP Committee'
    },
    images: ['/A National Spotlight 1.jpg']
  },
  {
    id: 'victory',
    date: 'December 2024',
    title: 'The Grand Victory',
    description: 'We won 1st Place in AgriTech at the TN2056 Challenge!',
    achievements: [
      'Incubation with Ninety Startup House',
      'Seed funding secured',
      'National recognition from media & investors'
    ],
    images: [
      '/The Grand Victory 1.jpg',
      '/The Grand Victory 2.jpg',
      '/The Grand Victory 3.jpg',
      '/The Grand Victory 4.jpg',
      '/The Grand Victory 5.jpg'
    ]
  },
  {
    id: 'future',
    date: '2025 and Beyond',
    title: "What's Next?",
    description: "With an award-winning concept and unstoppable team, we're scaling to bring smart farming to every home and farm in Tunisia.",
    achievements: [
      'Launch AI-powered web & mobile platform',
      'Expand regionally into AgriTech markets',
      'Partner with agricultural institutions'
    ],
    images: ['/future 1.jpg']
  }
];