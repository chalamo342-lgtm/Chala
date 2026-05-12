import React from 'react';
import { motion } from 'motion/react';
import { Phone, Video, Info, Send, Smile, Paperclip, ChevronLeft, Mic } from 'lucide-react';
import { User } from '../types';

interface ChatProps {
  user: User;
  onBack: () => void;
}

export const Chat: React.FC<ChatProps> = ({ user, onBack }) => {
  return (
    <div className="h-full w-full bg-black flex flex-col pt-12 pb-6">
      {/* Header */}
      <div className="px-4 pb-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <div className="relative">
            <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-none mb-1">{user.name}</h3>
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online Now</span>
          </div>
        </div>
        <div className="flex gap-5 text-white/80">
          <Phone className="w-5 h-5" />
          <Video className="w-5 h-5 text-fuchsia-500" />
          <Info className="w-5 h-5" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col gap-6">
        <div className="text-center">
          <p className="text-[10px] uppercase font-bold text-white/20 tracking-[0.2em] mb-8">Friday, May 12</p>
        </div>

        <div className="flex flex-col gap-2 max-w-[80%]">
          <div className="glass rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed">
            Yo! That transition in your last chain was insane. How did you do it? ⛓️🔥
          </div>
          <span className="text-[10px] text-white/20 font-bold ml-1">09:12 AM</span>
        </div>

        <div className="flex flex-col gap-2 max-w-[80%] self-end">
          <div className="bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-2xl rounded-tr-sm p-4 text-sm leading-relaxed neon-glow">
            Thanks Alex! Used the new AI tool in the creator studio. I'll send you the preset!
          </div>
          <span className="text-[10px] text-white/20 font-bold mr-1 self-end">09:45 AM</span>
        </div>

        <div className="flex flex-col gap-2 max-w-[80%]">
          <div className="glass rounded-2xl rounded-tl-sm p-3 overflow-hidden">
            <div className="aspect-video bg-zinc-900 rounded-xl mb-2 relative group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400" className="w-full h-full object-cover rounded-xl opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
            <p className="text-xs font-medium px-1">Check this out!</p>
          </div>
          <span className="text-[10px] text-white/20 font-bold ml-1">09:47 AM</span>
        </div>
      </div>

      {/* Input */}
      <div className="px-6 space-y-4">
        <div className="glass rounded-2xl p-2 pl-4 flex items-center gap-3 border-white/5">
          <Smile className="w-5 h-5 text-white/40" />
          <input 
            type="text" 
            placeholder="Reconnect through stories..." 
            className="flex-1 bg-transparent border-none outline-none text-sm py-2"
          />
          <Paperclip className="w-5 h-5 text-white/40" />
          <div className="w-10 h-10 bg-fuchsia-500 rounded-xl flex items-center justify-center neon-glow">
            <Send className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-8 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};
