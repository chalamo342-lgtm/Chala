import React from 'react';
import { motion } from 'motion/react';
import { Camera, ChevronLeft, Zap, Music, Filter, Scissors, Mic, Wand2, Volume2 } from 'lucide-react';
import { VibeButton } from '../components/UI';

interface CreateProps {
  onBack: () => void;
  onNext: () => void;
}

export const Create: React.FC<CreateProps> = ({ onBack, onNext }) => {
  return (
    <div className="h-full w-full bg-zinc-900 relative">
      {/* Mock Camera View */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691523567-6170c3295db6?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full pt-12 px-6 flex justify-between items-start z-10">
        <motion.button 
          whileTap={{ scale: 0.9 }} 
          onClick={onBack}
          className="w-10 h-10 rounded-full glass flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <div className="flex flex-col items-center gap-6">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
            <Music className="w-4 h-4" />
            <span className="text-xs font-bold">Add Sound</span>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Wand2 className="w-5 h-5 text-fuchsia-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">AI Magic</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Filter className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Filters</span>
            </div>
            <div className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Speed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-8 z-10 px-6">
        {/* Record Modes */}
        <div className="flex gap-6 items-center">
          <span className="text-sm font-bold opacity-40">60s</span>
          <span className="text-sm font-bold">15s</span>
          <span className="text-sm font-bold opacity-40">Photo</span>
        </div>

        {/* Shutter Button */}
        <div className="flex items-center justify-between w-full">
          <div className="w-12 h-12 rounded-xl glass border-white/5 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540206276207-3af25c08abbb?w=200" className="w-full h-full object-cover opacity-50" />
          </div>
          
          <div className="relative" onClick={onNext}>
            <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white neon-glow shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-pointer" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-fuchsia-500 rounded-full flex items-center justify-center border-2 border-black">
              <Zap className="w-3 h-3 text-white fill-current" />
            </div>
          </div>

          <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center">
            <Filter className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
