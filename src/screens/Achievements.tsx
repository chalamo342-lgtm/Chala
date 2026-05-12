import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Trophy, Star, Zap, Flame, Rocket, Award, ShieldCheck } from 'lucide-react';
import { Achievement } from '../types';

interface AchievementsProps {
  onBack: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({ onBack }) => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'First Chain',
      description: 'Successfully joined or started your very first video chain.',
      icon: 'Rocket',
      unlockedAt: '2026-05-10',
    },
    {
      id: '2',
      title: 'Top Contributor',
      description: 'Your videos have been part of 50+ successful chains.',
      icon: 'Trophy',
      progress: 65,
    },
    {
      id: '3',
      title: 'Viral Vibe',
      description: 'One of your chains reached over 1 million views.',
      icon: 'Flame',
      unlockedAt: '2026-05-12',
    },
    {
      id: '4',
      title: 'Daily Vibe',
      description: 'Login and engage for 7 consecutive days.',
      icon: 'Zap',
      progress: 80,
    },
    {
      id: '5',
      title: 'Vibe Guardian',
      description: 'Reported 10+ inappropriate pieces of content.',
      icon: 'ShieldCheck',
      progress: 20,
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Rocket': return <Rocket className="w-6 h-6 text-blue-400" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 'Flame': return <Flame className="w-6 h-6 text-fuchsia-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-violet-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-green-500" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <div className="h-full w-full bg-black flex flex-col pt-12 overflow-y-auto no-scrollbar pb-12">
      <div className="px-6 flex items-center gap-4 mb-8">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <h2 className="text-xl font-display font-bold">Achievements</h2>
      </div>

      <div className="px-6 flex flex-col gap-6">
        {/* Featured Achievement */}
        <div className="bg-gradient-to-tr from-fuchsia-500/20 to-violet-600/20 rounded-3xl p-6 border border-fuchsia-500/30 neon-glow">
          <div className="flex gap-4 items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500 flex items-center justify-center">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Vibe Master</h3>
              <p className="text-xs text-white/60">Unlock all primary achievements to earn this legendary badge.</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
             <div className="h-full w-1/3 bg-white rounded-full" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest mt-2 text-white/40">Progress: 36%</p>
        </div>

        <h3 className="text-xs uppercase font-bold text-white/20 tracking-[0.2em] mt-4">All Badges</h3>

        {achievements.map((item) => (
          <div key={item.id} className={`glass rounded-2xl p-5 border-white/5 flex gap-4 items-center ${!item.unlockedAt ? 'opacity-50 grayscale' : ''}`}>
             <div className={`w-14 h-14 rounded-2xl bg-black flex items-center justify-center border-2 ${item.unlockedAt ? 'border-fuchsia-500/50' : 'border-white/5'}`}>
               {getIcon(item.icon)}
             </div>
             <div className="flex-1">
               <div className="flex justify-between items-center mb-1">
                 <h4 className="font-bold text-sm">{item.title}</h4>
                 {item.unlockedAt && <span className="text-[8px] font-bold bg-fuchsia-500 px-1.5 py-0.5 rounded text-white uppercase tracking-widest">Unlocked</span>}
               </div>
               <p className="text-[10px] text-white/60 leading-relaxed mb-2">{item.description}</p>
               
               {item.progress !== undefined && !item.unlockedAt && (
                 <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-violet-500 rounded-full" style={{ width: `${item.progress}%` }} />
                 </div>
               )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
