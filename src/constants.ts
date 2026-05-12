import { Video, User } from './types';

export const COLORS = {
  primary: '#d946ef', // Fuchsia/Pink
  secondary: '#8b5cf6', // Violet/Purple
  accent: '#a855f7', // Purple
  dark: '#000000',
  glass: 'rgba(255, 255, 255, 0.05)',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
};

export const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-dancing-with-neon-lights-40081-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    creator: {
      id: 'u1',
      name: 'CyberVibe',
      handle: '@cybervibe',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      isVerified: true,
    },
    caption: 'Join the chain! #VibeChain #Futuristic #Dance',
    likes: 12400,
    comments: 243,
    shares: 890,
    chains: 12,
    musicName: 'Neon Dreams - Lofi Beats',
  },
  {
    id: '2',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-skateboarding-at-sunset-44365-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=1000&auto=format&fit=crop',
    creator: {
      id: 'u2',
      name: 'SkateFuture',
      handle: '@skate_future',
      avatar: 'https://images.unsplash.com/photo-1506794778242-aff56d591f1a?q=80&w=200&auto=format&fit=crop',
      isVerified: false,
    },
    caption: 'The sun never sets on the chain. 🛹🔥',
    likes: 45201,
    comments: 1102,
    shares: 3200,
    chains: 45,
    musicName: 'Sunset Run - Synthwave',
  }
];

export const MOCK_USER: User = {
  id: 'me',
  name: 'Alex Rivera',
  handle: '@alex_codes',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
  bio: 'Building the future of social video. Chain by chain. ⛓️✨',
  followers: 12500,
  following: 450,
  likes: 89200,
  chainsCreated: 24,
};
