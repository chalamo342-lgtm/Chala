import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Share2, MessageSquare, Play, Link as ChainIcon, Plus } from 'lucide-react';
import { VibeButton } from '../components/UI';

interface ChainDetailProps {
  onBack: () => void;
}

export const ChainDetail: React.FC<ChainDetailProps> = ({ onBack }) => {
  return (
    <div className="h-full w-full bg-black flex flex-col pt-12">
      {/* Header */}
      <div className="px-6 flex items-center justify-between mb-8">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] opacity-40">Chain View</h2>
        <Share2 className="w-6 h-6" />
      </div>

      {/* Main Video Preview */}
      <div className="px-6 mb-8">
        <div className="aspect-[9/10] w-full rounded-[40px] bg-zinc-900 overflow-hidden relative group">
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center neon-glow">
              <Play className="w-6 h-6 fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <h3 className="text-xl font-bold font-display mb-1">CyberVibe</h3>
              <p className="text-sm opacity-60">Starter of the vibe ⛓️</p>
            </div>
            <div className="flex gap-2">
               <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chain Timeline */}
      <div className="flex-1 px-6 space-y-6 overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Chain Path</h3>
          <span className="text-xs font-bold text-fuchsia-400">12 Parts</span>
        </div>

        <div className="relative pl-4 space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gradient-to-b from-fuchsia-500 to-violet-600 opacity-30" />

          {[1, 2, 3].map((i) => (
            <div key={i} className="relative flex items-center gap-4">
              <div className="absolute -left-[18px] w-2 h-2 rounded-full bg-fuchsia-500 neon-glow shadow-[0_0_10px_rgba(217,70,239,1)]" />
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 overflow-hidden border border-white/5">
                <img src={`https://i.pravatar.cc/100?u=chain_${i}`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold">Part {i+1} by @user_{i}</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/30">2h ago</p>
              </div>
              <Play className="w-4 h-4 opacity-40" />
            </div>
          ))}

          {/* Join Node */}
          <div className="relative flex items-center gap-4 pt-4">
            <div className="absolute -left-[18px] w-2 h-2 rounded-full border-2 border-fuchsia-500 bg-black" />
            <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
              <Plus className="w-5 h-5 text-white/20" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold opacity-40 italic">Continue the vibe...</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="p-8">
        <VibeButton fullWidth size="lg">
          <ChainIcon className="w-5 h-5 mr-2" />
          Continue Chain
        </VibeButton>
      </div>
    </div>
  );
};
