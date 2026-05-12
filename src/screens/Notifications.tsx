import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, UserPlus, ChevronLeft, Calendar } from 'lucide-react';

interface NotificationItem {
  id: string;
  type: 'like' | 'comment' | 'follow';
  user: {
    name: string;
    avatar: string;
  };
  content?: string;
  time: string;
  isUnread: boolean;
}

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    type: 'like',
    user: { name: 'Sarah J.', avatar: 'https://i.pravatar.cc/100?u=1' },
    content: 'liked your video chain',
    time: '2m ago',
    isUnread: true
  },
  {
    id: '2',
    type: 'follow',
    user: { name: 'VibeHunter', avatar: 'https://i.pravatar.cc/100?u=2' },
    content: 'started following you',
    time: '15m ago',
    isUnread: true
  },
  {
    id: '3',
    type: 'comment',
    user: { name: 'CyberArtist', avatar: 'https://i.pravatar.cc/100?u=3' },
    content: 'replied: "This vibe is unmatched! 🔥"',
    time: '1h ago',
    isUnread: false
  },
  {
    id: '4',
    type: 'like',
    user: { name: 'NeonPulse', avatar: 'https://i.pravatar.cc/100?u=4' },
    content: 'liked your part in "Future Beats" chain',
    time: '3h ago',
    isUnread: false
  }
];

export const Notifications = () => {
  return (
    <div className="h-full w-full bg-black pt-16 flex flex-col">
      <div className="px-6 mb-8">
        <h2 className="text-2xl font-display font-bold mb-6">Inbox</h2>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-full bg-fuchsia-500 text-white text-xs font-bold uppercase tracking-widest">Activity</button>
          <button className="px-5 py-2 rounded-full glass border-white/5 text-xs font-bold uppercase tracking-widest opacity-40">Messages</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-2">
        <div className="space-y-1">
          {MOCK_NOTIFICATIONS.map((notif) => (
            <motion.div 
              key={notif.id}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              className={`p-4 rounded-3xl flex items-center gap-4 transition-colors ${notif.isUnread ? 'bg-fuchsia-500/5' : ''}`}
            >
              <div className="relative">
                <img src={notif.user.avatar} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={notif.user.name} />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                  {notif.type === 'like' && <Heart className="w-3 h-3 text-fuchsia-500 fill-fuchsia-500" />}
                  {notif.type === 'follow' && <UserPlus className="w-3 h-3 text-blue-400" />}
                  {notif.type === 'comment' && <MessageCircle className="w-3 h-3 text-violet-400" />}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-bold mr-1">{notif.user.name}</span>
                  <span className="text-white/60">{notif.content}</span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">{notif.time}</span>
                </div>
              </div>

              {notif.isUnread && (
                <div className="w-2 h-2 rounded-full bg-fuchsia-500 neon-glow" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
