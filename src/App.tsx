/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Search, Plus, Bell, User as UserIcon } from 'lucide-react';
import { Screen } from './types';
import { MOCK_VIDEOS, MOCK_USER } from './constants';

// Screens
import { Onboarding } from './screens/Onboarding';
import { Login } from './screens/Login';
import { HomeFeed } from './screens/HomeFeed';
import { Profile } from './screens/Profile';
import { Chat } from './screens/Chat';
import { Create } from './screens/Create';
import { Explore } from './screens/Explore';
import { ChainDetail } from './screens/ChainDetail';
import { VideoEditor } from './screens/VideoEditor';
import { Settings } from './screens/Settings';
import { LiveHost } from './screens/LiveHost';
import { LiveViewer } from './screens/LiveViewer';
import { Achievements } from './screens/Achievements';
import { Notifications } from './screens/Notifications';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [history, setHistory] = useState<Screen[]>(['onboarding']);

  const navigate = (screen: Screen) => {
    setHistory([...history, screen]);
    setCurrentScreen(screen);
  };

  const back = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentScreen(newHistory[newHistory.length - 1]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <Onboarding onNext={() => navigate('login')} />;
      case 'login':
        return <Login onBack={back} onLogin={() => navigate('home')} />;
      case 'home':
        return (
          <HomeFeed 
            videos={MOCK_VIDEOS} 
            onChainClick={() => navigate('chain')} 
            onLiveClick={() => navigate('live_viewer')}
          />
        );
      case 'explore':
        return <Explore onChainClick={() => navigate('chain')} />;
      case 'profile':
        return (
          <Profile 
            user={MOCK_USER} 
            onSettings={() => navigate('settings')} 
            onLiveHost={() => navigate('live_host')}
          />
        );
      case 'chat':
        return <Chat user={MOCK_USER} onBack={back} />;
      case 'notifications':
        return <Notifications />;
      case 'create':
        return <Create onBack={back} onNext={() => navigate('editor')} />;
      case 'chain':
        return <ChainDetail onBack={back} />;
      case 'editor':
        return <VideoEditor onBack={back} onFinish={() => navigate('profile')} />;
      case 'settings':
        return <Settings onBack={back} />;
      case 'live_host':
        return <LiveHost user={MOCK_USER} onEnd={back} />;
      case 'live_viewer':
        return <LiveViewer host={MOCK_USER} onClose={back} />;
      case 'achievements':
        return <Achievements onBack={back} />;
      default:
        return <div className="flex items-center justify-center h-full">Screen Coming Soon</div>;
    }
  };

  // Add more triggers for live/achievements for demo purposes
  const showNav = ['home', 'explore', 'profile', 'notifications', 'achievements'].includes(currentScreen);

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-zinc-950">
      {/* Phone Mockup Frame */}
      <div className="relative w-full max-w-[420px] h-[840px] bg-black rounded-[50px] border-[8px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col box-content">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-50 flex items-center justify-center">
            <div className="w-10 h-1 bg-zinc-900 rounded-full" />
        </div>

        {/* Status Bar */}
        <div className="h-12 w-full flex justify-between items-end px-12 pb-2 z-40 relative">
          <span className="text-xs font-bold font-mono">9:41</span>
          <div className="flex gap-1.4 items-center">
            <div className="w-3.5 h-3.5 rounded-sm border border-white/20" />
            <div className="w-3.5 h-3.5 rounded-sm border border-white/20" />
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Navigation Bar */}
        {showNav && (
          <nav className="h-24 glass border-t-0 rounded-t-[40px] flex items-center justify-around px-4 pb-4 z-40">
            <NavIcon 
              icon={<Home />} 
              label="Home" 
              active={currentScreen === 'home'} 
              onClick={() => setCurrentScreen('home')} 
            />
            <NavIcon 
              icon={<Search />} 
              label="Explore" 
              active={currentScreen === 'explore'} 
              onClick={() => setCurrentScreen('explore')} 
            />
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('create')}
              className="w-14 h-11 bg-white rounded-xl flex items-center justify-center -mt-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Plus className="w-6 h-6 text-black group-hover:text-white transition-colors relative z-10" />
            </motion.button>

            <NavIcon 
              icon={<Bell />} 
              label="Inbox" 
              active={currentScreen === 'notifications'} 
              onClick={() => setCurrentScreen('notifications')} 
            />
            <NavIcon 
              icon={<Trophy className="w-5 h-5" />} 
              label="Badges" 
              active={currentScreen === 'achievements'} 
              onClick={() => setCurrentScreen('achievements')} 
            />
            <NavIcon 
              icon={<UserIcon />} 
              label="Profile" 
              active={currentScreen === 'profile'} 
              onClick={() => setCurrentScreen('profile')} 
            />
          </nav>
        )}
      </div>
    </div>
  );
}

import { Trophy } from 'lucide-react';

function NavIcon({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <motion.button 
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'text-white' : 'text-white/40'}`}
    >
      {active ? (
        <div className="relative">
          <div className="absolute -inset-2 bg-fuchsia-500/20 blur-md rounded-full" />
          {icon}
        </div>
      ) : icon}
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-dot"
          className="w-1 h-1 bg-fuchsia-500 rounded-full" 
        />
      )}
    </motion.button>
  );
}
