'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/sections/Header';
import { ProfileSection } from '@/sections/Profile';
import { ProjectsSection } from '@/sections/Projects';
import { AboutSection } from '@/sections/About';
import { Footer } from '@/sections/Footer';
import { AchievementsSection } from '@/sections/Achievements';
import { ChatbotSection } from '@/sections/Chatbot';
import { StarMap } from '@/sections/StarMap';
import { GameSection } from '@/sections/Game';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Immediately prevent any potential scrolling
    window.scrollTo(0, 0);
    
    const handleLoad = () => {
      window.scrollTo(0, 0);
      setIsLoading(false);
    };

    // Add scroll prevention before load completes
    window.history.scrollRestoration = 'manual';

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const timer = setTimeout(() => {
        if (isLoading) {
          handleLoad();
        }
      }, 1000);

      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []); // Removed isLoading dependency

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <main className="bg-gray-950 text-white antialiased font-serif">
      <Header />
      <ProfileSection />
      <ProjectsSection />
      <AchievementsSection />
      <ChatbotSection />
      <StarMap />
      <AboutSection />
      <GameSection />
      <Footer />
    </main>
  );
}
