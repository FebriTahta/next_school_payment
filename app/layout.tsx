import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lights } from "@/components/background/lights";
import { Starfall } from "@/components/background/star-fall";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";
import { BottomMenu } from "@/components/navigation/bottom-menu";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payment Administration System",
  description: "Implement modern web development with next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black w-full min-h-screen relative overflow-hidden flex items-center justify-center antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Toaster />
        <Starfall/>
        
        {/* Header */}
        <Header />

        {/* Konten Utama */}
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>

        {/* Efek dan Elemen Tambahan */}
        <div className="absolute inset-0 z-0 animate-appear opacity-0">
          <Lights />
        </div>
        <div className="absolute inset-0 z-5 bg-grid-white/[0.03]"></div>
        <BottomMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
