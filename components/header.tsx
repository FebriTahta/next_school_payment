'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { DarkThemeButton } from "./button/dark-theme-button";
import Image from "next/image";

const Header = () => {
  return (
    <>
    <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-4 left-8 z-10"
      >
        <Link href={'/home'}>
          <div className="h-9 w-9 flex items-center justify-center bg-white rounded-full cursor-pointer shadow-md">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="logo"
              priority
              style={{ height: "auto", width: "auto" }}
            />
          </div>
        </Link>
      </motion.div>

      {/* Tombol Tema di pojok kanan atas */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="absolute top-4 right-8 z-10"
      >
        <DarkThemeButton />
      </motion.div>
    </>
  )
}

export default Header