import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import AmbientBackground from "@/components/AmbientBackground";
import CustomCursor from "@/components/CustomCursor";
import SiteNav from "@/components/SiteNav";
import { dmSans, libreBaskerville } from "@/lib/fonts";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amrita Arun",
  description: "Amrita Arun's Developer Portfolio",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${libreBaskerville.variable} ${geistMono.variable} relative min-h-screen font-sans antialiased text-black`}
      >
        <CustomCursor />
        <div className="relative z-10 flex min-h-screen flex-col">
          <AmbientBackground />
          <SiteNav />
          {children}
        </div>
      </body>
    </html>
  );
}
