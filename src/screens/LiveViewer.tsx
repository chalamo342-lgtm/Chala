import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Heart, Share2, Link as ChainIcon, MessageSquare, Gift } from 'lucide-react';
import { User } from '../types';

interface LiveViewerProps {
  onClose: () => void;
  host: User;
}

export const LiveViewer: React.FC<LiveViewerProps> = ({ onClose, host }) => {
  const [reactions, setReactions] = React.useState<number[]>([]);

  const addReaction = () => {
    setReactions(prev => [...prev, Date.now()]);
    setTimeout(() => {
      setReactions(prev => prev.slice(1));
    }, 2000);
  };

  return (
    <div className="h-full w-full bg-black relative">
      {/* Mock Live Stream Video */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full pt-12 px-6 flex justify-between items-start z-10">
        <div className="flex items-center gap-3">
          <img src={host.avatar} className="w-10 h-10 rounded-full border-2 border-fuchsia-500" alt={host.handle} />
          <div>
            <h3 className="text-white font-bold text-sm leading-none mb-1">{host.handle}</h3>
            <div className="flex items-center gap-1.5 bg-red-500 px-1.5 py-0.5 rounded flex-shrink-0">
              <span className="text-[8px] font-black uppercase text-white tracking-widest">LIVE</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] font-bold">1,482</span>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-10 h-10 glass rounded-full flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Audience Reactions Floating Area */}
      <div className="absolute bottom-24 right-6 w-12 h-64 pointer-events-none z-20">
         <AnimatePresence>
           {reactions.map(id => (
             <motion.div
               key={id}
               initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
               animate={{ opacity: 1, scale: 1.2, y: -200, x: Math.random() * 20 - 10 }}
               exit={{ opacity: 0 }}
               className="absolute bottom-0 left-0"
             >
               <Heart className="w-8 h-8 fill-fuchsia-500 text-fuchsia-500" />
             </motion.div>
           ))}
         </AnimatePresence>
      </div>

      {/* Chat and Controls */}
      <div className="absolute bottom-0 left-0 w-full pb-8 pt-20 px-6 bg-gradient-to-t from-black/80 to-transparent z-10">
        {/* Chat */}
        <div className="flex flex-col gap-2 mb-6 max-h-40 overflow-hidden">
          <p className="text-xs"><span className="font-bold opacity-60">@user_99:</span> Wow, great vibe! ⛓️⚡</p>
          <p className="text-xs"><span className="font-bold text-violet-400">@chain_maker:</span> Join the chain live?</p>
          <p className="text-xs"><span className="font-bold text-fuchsia-400">@top_fan:</span> sent a Galaxy Gift 🌌</p>
        </div>

        {/* Input & Interaction */}
        <div className="flex items-center gap-3">
          <div className="flex-1 glass rounded-2xl h-12 flex items-center px-4">
            <span className="text-sm text-white/40">Add a comment...</span>
          </div>
          
          <button className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
            <Gift className="w-5 h-5 text-violet-400" />
          </button>

          <button 
            onClick={addReaction}
            className="w-12 h-12 glass rounded-2xl flex items-center justify-center"
          >
            <Heart className="w-6 h-6 text-fuchsia-500" />
          </button>

          <button className="w-12 h-12 bg-gradient-to-tr from-fuchsia-500 to-violet-600 rounded-2xl flex items-center justify-center neon-glow">
            <ChainIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-fuchsia-400">
            <Share2 className="w-3 h-3" />
            Share Stream
          </button>
        </div>
      </div>
    </div>
  );
};
