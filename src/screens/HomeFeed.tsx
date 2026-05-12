import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Share2, Link as ChainIcon, Music, Plus } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
  onChainClick?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isActive, onChainClick }) => {
  const [liked, setLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay blocked'));
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className="relative h-full w-full bg-black flex items-center justify-center snap-start overflow-hidden">
      {/* Video Content */}
      <video
        ref={videoRef}
        src={video.url}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
      />

      {/* Overlay - Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* Action Buttons - Right Side */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <div className="flex flex-col items-center gap-1 group">
          <div className="relative">
            <img 
              src={video.creator.avatar} 
              className="w-12 h-12 rounded-full border-2 border-fuchsia-500 bg-white/10" 
              alt={video.creator.handle}
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-fuchsia-500 rounded-full flex items-center justify-center border-2 border-black">
              <Plus className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        <button 
          onClick={() => setLiked(!liked)}
          className="flex flex-col items-center gap-1"
        >
          <motion.div whileTap={{ scale: 1.5 }}>
            <Heart className={`w-8 h-8 ${liked ? 'fill-fuchsia-500 text-fuchsia-500' : 'text-white'}`} />
          </motion.div>
          <span className="text-xs font-semibold">{video.likes.toLocaleString()}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <MessageCircle className="w-8 h-8 text-white" />
          <span className="text-xs font-semibold">{video.comments.toLocaleString()}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <ChainIcon className="w-8 h-8 text-white neon-text" />
          <span className="text-xs font-semibold text-fuchsia-400">{video.chains.toLocaleString()}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <Share2 className="w-8 h-8 text-white" />
          <span className="text-xs font-semibold">{video.shares.toLocaleString()}</span>
        </button>

        {/* Spinning Record Icon */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/20 flex items-center justify-center mt-4"
        >
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <img src={video.thumbnail} className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Info - Bottom Left */}
      <div className="absolute left-4 bottom-8 flex flex-col gap-3 max-w-[75%] z-10">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg">{video.creator.handle}</h3>
          {video.creator.isVerified && (
            <div className="w-4 h-4 bg-fuchsia-500 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
            </div>
          )}
        </div>
        <p className="text-sm line-clamp-2 text-white/90">{video.caption}</p>
        <div className="flex items-center gap-2 text-sm font-medium overflow-hidden">
          <Music className="w-4 h-4 flex-shrink-0" />
          <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite]">
            <span className="mr-8">{video.musicName}</span>
            <span className="mr-8">{video.musicName}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onChainClick}
          className="mt-2 py-2.5 px-6 rounded-full glass border-fuchsia-500/50 bg-fuchsia-500/10 flex items-center gap-2 w-fit"
        >
          <ChainIcon className="w-4 h-4 text-fuchsia-400" />
          <span className="font-bold text-sm tracking-wide neon-text">CONTINUE CHAIN</span>
        </motion.button>
      </div>
    </div>
  );
};

interface HomeFeedProps {
  videos: Video[];
  onChainClick?: () => void;
  onLiveClick?: () => void;
}

export const HomeFeed: React.FC<HomeFeedProps> = ({ videos, onChainClick, onLiveClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'following' | 'foryou'>('foryou');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPos = containerRef.current.scrollTop;
      const height = containerRef.current.clientHeight;
      const index = Math.round(scrollPos / height);
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative h-screen w-full bg-black">
      {/* Live Badge */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLiveClick}
        className="absolute top-14 left-6 z-30 flex items-center gap-2 bg-red-600 px-3 py-1.5 rounded-full neon-glow pointer-events-auto"
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-widest">Live Now</span>
      </motion.button>

      {/* Top Tabs */}
      <div className="absolute top-0 left-0 w-full pt-12 flex justify-center gap-6 z-20 pointer-events-none">
        <button 
          onClick={() => setActiveTab('following')}
          className={`text-lg font-bold transition-opacity pointer-events-auto ${activeTab === 'following' ? 'opacity-100 underline decoration-fuchsia-500 underline-offset-8' : 'opacity-50'}`}
        >
          Following
        </button>
        <button 
          onClick={() => setActiveTab('foryou')}
          className={`text-lg font-bold transition-opacity pointer-events-auto ${activeTab === 'foryou' ? 'opacity-100 underline decoration-fuchsia-500 underline-offset-8' : 'opacity-50'}`}
        >
          For You
        </button>
      </div>

      {/* Main Video Scroll */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video, index) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            isActive={index === activeIndex} 
            onChainClick={onChainClick}
          />
        ))}
      </div>
    </div>
  );
};
