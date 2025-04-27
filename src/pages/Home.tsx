import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Features from '../components/Features';
import VideoPlayer from '../components/VideoPlayer';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <main>
      <Hero isDarkMode={isDarkMode} />
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch Our <span className="text-emerald-500">Launch Video</span>
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Experience the future of smart agriculture and home automation
            </p>
          </div>
          <VideoPlayer isDarkMode={isDarkMode} />
        </div>
      </section>
      <About isDarkMode={isDarkMode} />
      <Products isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
    </main>
  );
};

export default Home;