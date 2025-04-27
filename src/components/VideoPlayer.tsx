import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoPlayerProps {
  isDarkMode: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ isDarkMode }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto group">
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/smartaero.mp4"
          muted={isMuted}
          loop
          playsInline
          onClick={togglePlay}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className={`p-3 rounded-full ${
              isDarkMode 
                ? 'bg-white/10 hover:bg-white/20' 
                : 'bg-black/10 hover:bg-black/20'
            } backdrop-blur-sm text-white transition-colors`}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </motion.button>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className={`p-3 rounded-full ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-black/10 hover:bg-black/20'
              } backdrop-blur-sm text-white transition-colors`}
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFullscreen}
              className={`p-3 rounded-full ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-black/10 hover:bg-black/20'
              } backdrop-blur-sm text-white transition-colors`}
            >
              {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;