import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Scissors, Wand2, Type, Sparkles, Check, Link as ChainIcon, Layers, Play } from 'lucide-react';
import { VibeButton } from '../components/UI';

interface VideoEditorProps {
  onBack: () => void;
  onFinish?: () => void;
}

export const VideoEditor: React.FC<VideoEditorProps> = ({ onBack, onFinish }) => {
  const [isChainMode, setIsChainMode] = useState(true);

  return (
    <div className="h-full w-full bg-black flex flex-col pt-12">
      {/* Header */}
      <div className="px-6 flex items-center justify-between mb-4">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        
        <div className="flex bg-zinc-900 rounded-full p-1 border border-white/5">
          <button 
            onClick={() => setIsChainMode(false)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${!isChainMode ? 'bg-white text-black' : 'text-white/40'}`}
          >
            Solo
          </button>
          <button 
            onClick={() => setIsChainMode(true)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${isChainMode ? 'bg-fuchsia-500 text-white neon-glow' : 'text-white/40'}`}
          >
            Chain
          </button>
        </div>

        <div className="flex gap-4">
           <button 
             onClick={onFinish}
             className="bg-white text-black font-bold px-4 py-1.5 rounded-full text-sm hover:bg-white/90 active:scale-95 transition-all"
           >
             Finish
           </button>
        </div>
      </div>

      {/* Chain Preview (Top Strip) */}
      <AnimatePresence>
        {isChainMode && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 mb-4 flex items-center gap-3 overflow-hidden"
          >
            <div className="flex -space-x-4">
              {[1, 2].map((i) => (
                <div key={i} className="w-10 h-14 rounded-lg bg-zinc-800 border border-black overflow-hidden relative grayscale opacity-40">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=100`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 h-14 rounded-lg border-2 border-dashed border-fuchsia-500/30 flex items-center justify-center bg-fuchsia-500/5">
               <span className="text-[10px] font-bold uppercase text-fuchsia-400 tracking-widest">Your Part (Continuation)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editor Main View */}
      <div className="flex-1 bg-zinc-900 mx-4 rounded-[40px] relative overflow-hidden mb-6">
        <img src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800" className="w-full h-full object-cover opacity-80" />
        
        {/* Chain Bridge Overlay */}
        {isChainMode && (
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-fuchsia-500/10 to-transparent flex flex-col items-center justify-center border-l-4 border-fuchsia-500">
            <ChainIcon className="w-5 h-5 text-fuchsia-500 mb-2 neon-text" />
            <span className="text-[8px] font-black uppercase tracking-tighter text-fuchsia-500 leading-none text-center px-1">Bridge <br/> Transition</span>
          </div>
        )}

        {/* Editing Overlay Tools */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Type className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Text</span>
          </button>
           <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Effects</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-fuchsia-500 group">
            <div className="w-10 h-10 rounded-full glass border-fuchsia-500/50 bg-fuchsia-500/10 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
              <Wand2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">AI Sync</span>
          </button>
          <button className="flex flex-col items-center gap-1 group">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Overlay</span>
          </button>
        </div>

        {/* Playback Progress */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 glass rounded-full flex items-center justify-between px-6">
           <Play className="w-5 h-5 fill-white" />
           <div className="flex-1 mx-4 h-1 bg-white/10 rounded-full overflow-hidden">
             <div className="h-full w-1/3 bg-fuchsia-500" />
           </div>
           <span className="text-[10px] font-mono">0:04</span>
        </div>
      </div>

      {/* Timeline Controls */}
      <div className="px-6 mb-8 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scissors className="w-4 h-4 text-fuchsia-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Refine Chain Link</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[10px] font-bold text-white/40 hover:text-white transition-colors">UNDO</button>
            <span className="text-xs font-mono opacity-40 italic">00:08 / 00:15</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="h-16 w-full glass rounded-2xl flex items-center p-1 gap-1 border-white/5 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-full flex-1 bg-zinc-800 rounded-sm overflow-hidden opacity-30">
                  <img src={`https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=100&q=1`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Trim Handles */}
            <div className="absolute left-[30%] right-[10%] top-0 bottom-0 border-2 border-fuchsia-500 rounded-lg pointer-events-none z-10">
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-fuchsia-500 rounded-full" />
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-fuchsia-500 rounded-full" />
            </div>
            {/* Split Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-white z-20 shadow-lg" />
          </div>
        </div>
      </div>

      {/* Tool Selection */}
      <div className="px-6 pb-12 flex gap-4 overflow-x-auto no-scrollbar">
        {['Transfers', 'Mirror', 'Ghost', 'Loop', 'Slow-mo', 'Glitch'].map((tool, i) => (
          <div key={tool} className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className={`w-14 h-14 rounded-2xl bg-zinc-900 border ${i === 0 ? 'border-fuchsia-500 bg-fuchsia-500/10' : 'border-white/5'} flex items-center justify-center transition-all cursor-pointer hover:border-white/20 active:scale-90`}>
                <Layers className={`w-6 h-6 ${i === 0 ? 'text-fuchsia-500' : 'text-white/40'}`} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{tool}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

