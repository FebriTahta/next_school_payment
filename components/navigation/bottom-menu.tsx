"use client"

import { Wallet, WalletMinimal, ListStart, Home } from 'lucide-react';
import Link from 'next/link';
import SearchBoxButton from '../button/search-box-button';
import { usePathname } from 'next/navigation';

export function BottomMenu() {
  
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/" 
      
      && 
      
      <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-full max-w-md">
        <nav className="mx-4 flex items-center gap-2 rounded-xl border bg-background/80 pl-3 pr-3 pt-2 pb-2 shadow-lg backdrop-blur-lg">
          
          <div className={`flex h-8 w-8 items-center justify-center rounded-md bg-gray-200 shrink-0 dark:bg-gray-800 transition-transform duration-200 hover:scale-125 ${
            pathName == '/home' 
            ? "bg-gradient-to-br from-black to-purple-500 text-white scale-110 hover:scale-125"
            : "bg-gray-200 dark:bg-gray-800 hover:scale-125"
          }`}>
            <Link href={'/home'}>
              <Home className="h-5 w-5" />
              </Link>
          </div>
          <div className="relative flex flex-1 items-center">
            <SearchBoxButton />
          </div>
          <div className={`flex items-center gap-2 h-8 w-8 justify-center rounded-md bg-gray-200 shrink-0 
          dark:bg-gray-800 transition-transform duration-200 hover:scale-125 ${
            pathName == '/payment-list' 
            ? "bg-gradient-to-br from-black to-purple-500 text-white scale-110 hover:scale-125"
            : "bg-gray-200 dark:bg-gray-800 hover:scale-125"
          }`}>
            <Link href={'/payment-list'} className="p-2">
              <ListStart className='h-5 w-5'/>
            </Link>
          </div>
          <div className="flex items-center gap-2 h-8 w-8 justify-center rounded-md bg-gray-200 shrink-0 dark:bg-gray-800 transition-transform duration-200 hover:scale-125">
            <Link href={'/'} className="p-2">
              <WalletMinimal className='h-5 w-5'/>
            </Link>
          </div>
          <div className="flex items-center gap-2 h-8 w-8 justify-center rounded-md bg-gray-200 shrink-0 dark:bg-gray-800 transition-transform duration-200 hover:scale-125">
            <Link href={'/'} className="p-2">
              <Wallet className='h-5 w-5'/>
            </Link>
          </div>
        </nav>
      </div>
      }
    </>
  );
}
