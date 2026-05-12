export type Screen = 
  | 'onboarding' 
  | 'login' 
  | 'home' 
  | 'explore' 
  | 'create' 
  | 'profile' 
  | 'chat' 
  | 'editor' 
  | 'chain' 
  | 'notifications' 
  | 'settings'
  | 'live_host'
  | 'live_viewer'
  | 'achievements';

export interface Video {
  id: string;
  url: string;
  thumbnail: string;
  creator: {
    id: string;
    name: string;
    handle: string;
    avatar: string;
    isVerified: boolean;
  };
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  chains: number;
  musicName: string;
}

export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  likes: number;
  chainsCreated: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  progress?: number;
}

export interface LiveStream {
  id: string;
  host: User;
  viewerCount: number;
  title: string;
}
