'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

export const useScrollRestoration = () => {
  const locale = useLocale();

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    
    if (savedScrollPosition) {
      const scrollPos = parseInt(savedScrollPosition);
      
      // Function to restore scroll position
      const restoreScroll = () => {
        window.scrollTo({
          top: scrollPos,
          behavior: 'instant'
        });
      };
      
      // Multiple restoration attempts for better reliability
      const timeouts = [0, 50, 100, 200, 500].map(delay => 
        setTimeout(restoreScroll, delay)
      );
      
      // Clean up
      const cleanup = setTimeout(() => {
        sessionStorage.removeItem('scrollPosition');
      }, 600);
      
      return () => {
        timeouts.forEach(clearTimeout);
        clearTimeout(cleanup);
      };
    }
  }, [locale]);

  const saveScrollPosition = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
  };

  return { saveScrollPosition };
};