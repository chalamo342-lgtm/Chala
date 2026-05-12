import React from 'react';
import { motion } from 'motion/react';
import { Settings, Grid, Bookmark, MessageSquare, Phone, Video as VideoIcon, UserCheck, MoreHorizontal, Link as ChainIcon } from 'lucide-react';
import { User, Video } from '../types';
import { VibeButton } from '../components/UI';

interface ProfileProps {
  user: User;
  onSettings: () => void;
  onLiveHost?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onSettings, onLiveHost }) => {
  return (
    <div className="h-full w-full bg-black overflow-y-auto no-scrollbar pt-12 pb-24">
      {/* Header */}
      <div className="px-6 flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold font-display">{user.handle}</h2>
        <div className="flex gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }} 
            onClick={onLiveHost}
            className="text-fuchsia-500 font-bold text-xs uppercase tracking-widest border border-fuchsia-500/30 px-3 py-1 rounded-full bg-fuchsia-500/10"
          >
            Go Live
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} onClick={onSettings}>
            <Settings className="w-6 h-6" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }}>
            <MoreHorizontal className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-fuchsia-500 to-violet-600 neon-glow">
            <img src={user.avatar} className="w-full h-full rounded-full border-2 border-black object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-fuchsia-500 rounded-full border-2 border-black flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
        <p className="text-white/60 text-center px-12 text-sm leading-relaxed mb-6">{user.bio}</p>

        {/* Stats */}
        <div className="flex gap-8 mb-8">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{(user.followers / 1000).toFixed(1)}k</span>
            <span className="text-white/40 text-xs uppercase tracking-widest leading-none">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{(user.likes / 1000).toFixed(1)}k</span>
            <span className="text-white/40 text-xs uppercase tracking-widest leading-none">Likes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">{user.chainsCreated}</span>
            <span className="text-white/40 text-xs uppercase tracking-widest leading-none">Chains</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 w-full mb-8">
          <VibeButton className="flex-1 rounded-2xl py-3.5">Follow</VibeButton>
          <div className="flex gap-2">
            <motion.button className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5">
              <MessageSquare className="w-5 h-5" />
            </motion.button>
            <motion.button className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-white/5">
              <VideoIcon className="w-5 h-5 text-fuchsia-400" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 mb-0 px-2">
        <button className="flex-1 py-4 flex flex-col items-center gap-1.5 border-b-2 border-fuchsia-500">
          <Grid className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Videos</span>
        </button>
        <button className="flex-1 py-4 flex flex-col items-center gap-1.5 opacity-40">
          <ChainIcon className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Chains</span>
        </button>
        <button className="flex-1 py-4 flex flex-col items-center gap-1.5 opacity-40">
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-widest font-bold">Saved</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-zinc-900 overflow-hidden relative group">
            <img 
              src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=400&auto=format&fit=crop`} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold">
              <VideoIcon className="w-3 h-3" />
              <span>1.2M</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
