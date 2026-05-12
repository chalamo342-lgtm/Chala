import React from 'react';
import { motion } from 'motion/react';
import { Mail, Apple, Chrome, ArrowLeft } from 'lucide-react';
import { VibeButton, GlassCard } from '../components/UI';

interface LoginProps {
  onBack: () => void;
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onBack, onLogin }) => {
  return (
    <div className="h-full flex flex-col justify-between p-8 pt-12 relative">
      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={onBack}
        className="w-10 h-10 glass rounded-full flex items-center justify-center mb-12"
      >
        <ArrowLeft className="w-5 h-5" />
      </motion.button>

      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-display font-bold mb-2">Welcome</h2>
          <p className="text-white/60 mb-12">Log in to continue the chain.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4"
        >
          <VibeButton variant="glass" fullWidth className="py-4 justify-start px-8 rounded-2xl border-white/5">
            <Chrome className="w-5 h-5 mr-4 text-fuchsia-400" />
            Continue with Google
          </VibeButton>
          <VibeButton variant="glass" fullWidth className="py-4 justify-start px-8 rounded-2xl border-white/5">
            <Apple className="w-5 h-5 mr-4" />
            Continue with Apple
          </VibeButton>
          <VibeButton variant="glass" fullWidth className="py-4 justify-start px-8 rounded-2xl border-white/5">
            <Mail className="w-5 h-5 mr-4 text-violet-400" />
            Continue with Email
          </VibeButton>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-black px-2 text-white/40">Or</span>
            </div>
          </div>

          <VibeButton fullWidth size="lg" onClick={onLogin}>
            Log In
          </VibeButton>
        </motion.div>
      </div>

      <p className="text-center text-white/40 text-xs px-8">
        By continuing, you agree to our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.
      </p>
    </div>
  );
};
