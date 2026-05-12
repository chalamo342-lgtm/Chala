import React from 'react';
import { motion } from 'motion/react';
import { Search, Flame, TrendingUp, Users, Link as ChainIcon } from 'lucide-react';

interface ExploreProps {
  onChainClick?: () => void;
}

export const Explore: React.FC<ExploreProps> = ({ onChainClick }) => {
  const categories = ['Trending', 'Music', 'Gaming', 'Art', 'Dance', 'Fitness'];
  const trendingChains = [
    { id: 1, title: 'Neon Dance Challenge', participants: '124k', color: 'from-fuchsia-500' },
    { id: 2, title: 'AI Storytelling', participants: '89k', color: 'from-violet-500' },
    { id: 3, title: 'Future Beats', participants: '56k', color: 'from-blue-500' },
  ];

  return (
    <div className="h-full w-full bg-black pt-16 px-6 overflow-y-auto no-scrollbar pb-24">
      {/* Search Bar */}
      <div className="glass rounded-2xl p-4 flex items-center gap-3 border-white/5 mb-8">
        <Search className="w-5 h-5 text-white/40" />
        <input 
          type="text" 
          placeholder="Explore the VibeChain..." 
          className="bg-transparent border-none outline-none text-sm w-full"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-8">
        {categories.map((cat, i) => (
          <button key={cat} className={`px-5 py-2 rounded-full whitespace-nowrap text-xs font-bold uppercase tracking-widest ${i === 0 ? 'bg-white text-black' : 'glass border-white/5'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Trending Section */}
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-xl flex items-center gap-2">
              <Flame className="w-5 h-5 text-fuchsia-500" />
              Hot Chains
            </h3>
            <span className="text-[10px] uppercase font-bold text-fuchsia-500 tracking-widest">See All</span>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {trendingChains.map((chain) => (
              <div 
                key={chain.id} 
                onClick={onChainClick}
                className={`h-32 rounded-3xl bg-gradient-to-br ${chain.color} to-zinc-900 overflow-hidden relative p-6 flex flex-col justify-between cursor-pointer`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <ChainIcon className="w-20 h-20" />
                </div>
                <h4 className="text-xl font-bold font-display z-10">{chain.title}</h4>
                <div className="flex items-center gap-3 z-10">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-zinc-800" />
                    ))}
                  </div>
                  <span className="text-xs font-bold opacity-80">{chain.participants} participating</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
           <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-xl flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-500" />
              Top Creators
            </h3>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-fuchsia-500 to-violet-600">
                  <div className="w-full h-full rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-[10px] font-bold">@creator_{i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
