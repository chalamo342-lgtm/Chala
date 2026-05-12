import React from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { VibeButton } from '../components/UI';

interface OnboardingProps {
  onNext: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onNext }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center px-8 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-fuchsia-500/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-violet-500/20 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-8"
      >
        <div className="w-24 h-24 bg-gradient-to-tr from-fuchsia-500 to-violet-600 rounded-3xl flex items-center justify-center neon-glow">
          <Layers className="w-12 h-12 text-white" />
        </div>

        <div>
          <h1 className="text-5xl font-display font-extrabold tracking-tight mb-4">
            Vibe<span className="text-fuchsia-500">Chain</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xs leading-relaxed">
            Build the chain. <br /> Keep the vibe going.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 mt-8">
          <VibeButton fullWidth size="lg" onClick={onNext}>
            Get Started
          </VibeButton>
          <p className="text-white/40 text-sm">
            Already have an account? <span className="text-fuchsia-400 font-medium cursor-pointer">Log in</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
