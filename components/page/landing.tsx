'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const Landing = () => {
  const router = useRouter();

  useEffect(() => {
    // Periksa apakah token login ada
    const token = Cookies.get('authToken');
    const timer = setTimeout(() => {

      if (token) {
        router.push('/home');
      }else{
        router.push('/login');
      }

    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex flex-col items-center sm:items-center animate-moveUp">
        <h1 className="text-transparent text-center font-bold text-4xl sm:text-5xl bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6] mb-4 max-w-2xl">
          Welcome To
        </h1>
        <div className="max-w-xl">
          <p className="text-white/[0.7] text-center mb-8 w-full">
            Administration Payment System
          </p>
        </div>
      </div>
    </div>
  );
};