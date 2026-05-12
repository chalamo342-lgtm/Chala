import React from 'react';
import { motion } from 'motion/react';
import { X, Users, MessageSquare, Zap, Mic, Video, Settings, Share2 } from 'lucide-react';
import { User } from '../types';
import { VibeButton } from '../components/UI';

interface LiveHostProps {
  onEnd: () => void;
  user: User;
}

export const LiveHost: React.FC<LiveHostProps> = ({ onEnd, user }) => {
  return (
    <div className="h-full w-full bg-zinc-900 relative">
      {/* Mock Camera Feed */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Header Info */}
      <div className="absolute top-0 left-0 w-full pt-12 px-6 flex justify-between items-start z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-fuchsia-500" alt="Host" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm leading-none mb-1">LIVE</h3>
            <div className="flex items-center gap-1.5 opacity-60">
              <Users className="w-3 h-3" />
              <span className="text-[10px] font-bold">12.4K</span>
            </div>
          </div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onEnd}
          className="w-10 h-10 glass rounded-full flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Side Tools */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {[
          { icon: <Mic className="w-5 h-5" />, label: 'Mute' },
          { icon: <Video className="w-5 h-5" />, label: 'Flip' },
          { icon: <Zap className="w-5 h-5 text-fuchsia-400" />, label: 'Filters' },
          { icon: <Share2 className="w-5 h-5" />, label: 'Share' },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings' }
        ].map((item, i) => (
          <button key={i} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Live Chat Overlay */}
      <div className="absolute bottom-24 left-6 right-20 z-10 max-h-48 overflow-hidden pointer-events-none">
        <div className="flex flex-col gap-2 justify-end h-full">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-zinc-800" />
             <p className="text-xs"><span className="font-bold text-fuchsia-400">@vibemaster:</span> This is fire! 🔥</p>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-zinc-800" />
             <p className="text-xs"><span className="font-bold text-violet-400">@neo_user:</span> Keep the chain going!</p>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-zinc-800" />
             <p className="text-xs"><span className="font-bold text-white/60">@chain_react:</span> joined the stream</p>
           </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-8 left-0 w-full px-6 flex items-center justify-between z-10">
          <div className="flex-1 glass rounded-2xl h-12 flex items-center px-4 mr-4">
            <MessageSquare className="w-5 h-5 text-white/40 mr-3" />
            <span className="text-sm text-white/40">Say something...</span>
          </div>
          <VibeButton className="rounded-2xl h-12 px-6">
            <Zap className="w-4 h-4 mr-2" />
            GO LIVE
          </VibeButton>
      </div>
    </div>
  );
};
