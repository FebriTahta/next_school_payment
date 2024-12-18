"use client";

import { Wallet, WalletMinimal, ListStart, Home } from "lucide-react";
import Link from "next/link";
import SearchBoxButton from "../button/search-box-button";
import { usePathname } from "next/navigation";

export function BottomMenu() {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/" && (
        <div className="fixed inset-x-0 bottom-4 z-50 mx-auto w-full max-w-md pr-5 pl-5">
          <nav className="grid grid-cols-12 items-center gap-2 rounded-xl border bg-background/80 px-3 py-2 shadow-lg backdrop-blur-lg">
            {/* Home Button (2 columns) */}
            <div
              className={`col-span-2 flex h-8 w-full items-center justify-center rounded-md transition-transform duration-200 ${
                pathName === "/home"
                  ? "bg-gradient-to-br from-black to-purple-500 text-white scale-110"
                  : "bg-gray-200 dark:bg-gray-800 hover:scale-125"
              }`}
            >
              <Link href={"/home"}>
                <Home className="h-5 w-5" />
              </Link>
            </div>

            {/* Search Box (5 columns) */}
            <div className="col-span-5">
              <SearchBoxButton />
            </div>

            {/* Other Buttons (5 columns, split equally) */}
            <div className="col-span-5 flex justify-around">
              {/* Payment List Button */}
              <div
                className={`flex h-8 w-9 items-center justify-end rounded-md shrink-0 transition-transform duration-200 ${
                  pathName === "/payment-list"
                    ? "bg-gradient-to-br from-black to-purple-500 text-white scale-110"
                    : "bg-gray-200 dark:bg-gray-800 hover:scale-125"
                }`}
              >
                <Link href={"/payment-list"} className="p-2">
                  <ListStart className="h-5 w-5"/>
                </Link>
              </div>

              {/* Wallet Minimal Button */}
              <div className="flex h-8 w-9 items-center justify-end rounded-md bg-gray-200 dark:bg-gray-800 transition-transform duration-200 hover:scale-125">
                <Link href={"/"} className="p-2">
                  <WalletMinimal className="h-5 w-5" />
                </Link>
              </div>

              {/* Wallet Button */}
              <div className="flex h-8 w-9 items-center justify-end rounded-md bg-gray-200 dark:bg-gray-800 transition-transform duration-200 hover:scale-125">
                <Link href={"/"} className="p-2">
                  <Wallet className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
