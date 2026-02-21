"use client";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";

import "./globals.css";
import Header from "@/components/navbar";
import { useRouter } from "next/navigation";
import MobileNav from "@/components/MobileNav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleSearch = (query: string) => {
    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans dark antialiased`}
      >
        <Providers>
          <Header onSearch={handleSearch} />

          <main className="min-h-screen">
            {children}
            {/* 7. Mobile Navigation */}
            {/* <MobileNav activeTab={activeT ab} setActiveTab={setActiveTab} /> */}
          </main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
