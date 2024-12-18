'use client';
import { useEffect } from 'react';
// import { Lights } from "../background/lights";
// import { Starfall } from "../background/star-fall";
import { useRouter } from 'next/navigation'; // Tambahkan ini

export const Landing = () => {
  const router = useRouter(); // Inisialisasi router

  useEffect(() => {
    // Redirect ke halaman home setelah 3 detik
    const timer = setTimeout(() => {
      router.push('/login'); // Navigasi ke halaman home
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
            Payment Administration System SMK Krian 1 
          </p>
        </div>
      </div>
    </div>
  );
};