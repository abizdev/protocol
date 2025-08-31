'use client';

import { useState, useEffect } from 'react';
import { PhoneIcon, ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Restore scroll position after language change
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }, 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setIsLanguageOpen(false);
    
    // Store current scroll position in sessionStorage
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    // Get current path without locale
    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(ru|uz|en)/, '');
    const newPath = `/${langCode}${pathWithoutLocale || '/'}`;
    
    // Navigate to new locale
    router.push(newPath);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isScrolled ? 'bg-blue-600' : 'bg-white bg-opacity-20'
              }`}>
                <svg 
                  className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h1 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                  {t('company')}
                </h1>
                <p className={`text-xs md:text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  {t('tagline')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Language Switcher and Contact Links */}
          <div className="flex items-center space-x-2 md:space-x-3">
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' 
                    : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white backdrop-blur-sm'
                }`}
              >
                <GlobeAltIcon className="w-4 h-4" />
                <span className="text-lg">{currentLanguage?.flag}</span>
                <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-3 ${
                        locale === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Telegram Link - Icon Only */}
            <a
              href="https://t.me/europrotocol_uz"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30 text-white backdrop-blur-sm'
              }`}
              title="Telegram"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>

            {/* Phone Link - Icon Only */}
            <a
              href="tel:+998993280777"
              className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
                  : 'bg-yellow-500 hover:bg-yellow-600 text-black'
              }`}
              title="+998 99 328 07 77"
            >
              <PhoneIcon className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;