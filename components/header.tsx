'use client';

import { motion } from 'framer-motion';
import { DarkThemeButton } from './button/dark-theme-button';
import { LogIn, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useCallback, useEffect, useState } from 'react';
import { checkTokenActive } from '@/lib/jwt';

const Header = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogout = useCallback(
    ({ desc }: { desc: string }) => {
      Cookies.remove('authToken');
      toast({
        title: 'Goodbye!',
        description: desc ? 'You have been logged out.' : '',
      });
      router.push('/login');
    },
    [toast, router]
  );

  useEffect(() => {
    const token = Cookies.get('authToken');
    const statusToken = checkTokenActive();

    if (statusToken.status === false && statusToken.data == 401) {
      handleLogout({ desc: 'Sesi anda telah habis' });
    }

    setIsLoggedIn(!!token);
  }, [handleLogout]);

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
          <Button onClick={() => handleLogout({ desc: 'You have been logged out.' })} variant="destructive">
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
