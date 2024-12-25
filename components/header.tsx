'use client';

import { motion } from 'framer-motion';
import { DarkThemeButton } from './button/dark-theme-button';
import { LogIn, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Periksa token hanya di sisi client
  useEffect(() => {
    const token = Cookies.get('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove('authToken');
    toast({
      title: 'Goodbye!',
      description: 'You have been logged out.',
    });
    router.push('/login'); // Arahkan ke halaman login
  };

  return (
    <div className="flex justify-between items-center w-full absolute top-4 px-4 z-50">
      {/* Tombol kiri */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        {!isLoggedIn ? (
          <Button onClick={() => router.push('/login')}>
            <LogIn />
          </Button>
        ) : (
          <Button onClick={handleLogout} variant="destructive">
            <LogOut />
          </Button>
        )}
      </motion.div>

      {/* Tombol kanan */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        <DarkThemeButton />
      </motion.div>
    </div>
  );
};

export default Header;
