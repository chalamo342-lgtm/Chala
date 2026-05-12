import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Moon, Download, Bookmark, Bell, Lock, HelpCircle, LogOut } from 'lucide-react';

interface SettingsProps {
  onBack: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onBack }) => {
  const sections = [
    { 
      title: 'Preferences', 
      items: [
        { icon: <Moon className="w-5 h-5 text-fuchsia-500" />, label: 'Dark Mode', value: 'Active' },
        { icon: <Bell className="w-5 h-5 text-violet-500" />, label: 'Notifications', value: 'On' },
        { icon: <Download className="w-5 h-5" />, label: 'Downloads' },
        { icon: <Bookmark className="w-5 h-5" />, label: 'Saved Videos' },
      ]
    },
    { 
      title: 'Security', 
      items: [
        { icon: <Lock className="w-5 h-5" />, label: 'Privacy Settings' },
        { icon: <Lock className="w-5 h-5" />, label: 'Two-Factor Auth' },
      ]
    },
    { 
      title: 'Support', 
      items: [
        { icon: <HelpCircle className="w-5 h-5" />, label: 'Help Center' },
        { icon: <LogOut className="w-5 h-5 text-red-500" />, label: 'Log Out' },
      ]
    }
  ];

  return (
    <div className="h-full w-full bg-black flex flex-col pt-12 overflow-y-auto no-scrollbar pb-12">
      <div className="px-6 flex items-center gap-4 mb-10">
        <motion.button whileTap={{ scale: 0.9 }} onClick={onBack}>
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <h2 className="text-xl font-display font-bold">Settings</h2>
      </div>

      <div className="px-6 space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs uppercase font-bold text-white/20 tracking-[0.2em] mb-4">{section.title}</h3>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.label} className="glass rounded-2xl p-4 flex items-center justify-between border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  {item.value ? (
                    <span className="text-xs font-bold font-mono text-fuchsia-500">{item.value}</span>
                  ) : (
                    <ChevronLeft className="w-4 h-4 rotate-180 opacity-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">VibeChain v1.0.4 - Built for the Chain</p>
      </div>
    </div>
  );
};
