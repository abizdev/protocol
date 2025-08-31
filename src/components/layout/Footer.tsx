'use client';

import { 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        
        {/* Contact Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-400 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t('consultation')}
          </h2>

          {/* Contact Buttons */}
          <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-12">
            {/* Telegram Button */}
            <a 
              href="https://t.me/europrotocol_uz" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <div className="text-left">
                <div className="text-sm font-normal">TELEGRAM</div>
                <div className="text-lg font-bold">{t('telegram')}</div>
              </div>
            </a>

            {/* Phone Button */}
            <a 
              href="tel:+998993280777"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <PhoneIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm font-normal">+998 99 328 07 77</div>
                <div className="text-lg font-bold">{t('phone')}</div>
              </div>
            </a>

            {/* Location Button */}
            <div className="bg-yellow-600 text-white font-semibold py-4 px-8 rounded-lg flex items-center justify-center gap-3">
              <MapPinIcon className="w-6 h-6" />
              <div className="text-left">
                <div className="text-sm font-normal">ЛОКАЦИЯ ОФИСА</div>
                <div className="text-lg font-bold">{t('location')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-400 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {t('additionalServices')}
          </h2>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              {t('additionalDescription1')}
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              {t('additionalDescription2')}
            </p>
          </div>

          {/* Telegram CTA */}
          <a 
            href="https://t.me/europrotocol_uz" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            {t('writeToTelegram')}
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contacts')}</h3>
              <p className="text-gray-300 mb-2">{t('contactInfo.phone')}</p>
              <p className="text-gray-300 mb-2">{t('contactInfo.email')}</p>
              <p className="text-gray-300">{t('contactInfo.address')}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
              <ul className="text-gray-300 space-y-2">
                <li>{t('servicesItems.europrotocol')}</li>
                <li>{t('servicesItems.damageAssessment')}</li>
                <li>{t('servicesItems.consultation')}</li>
                <li>{t('servicesItems.legalSupport')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('workingHours')}</h3>
              <p className="text-gray-300 mb-2">{t('workingHoursItems.24_7')}</p>
              <p className="text-gray-300 mb-2">{t('workingHoursItems.noWeekends')}</p>
              <p className="text-gray-300">{t('workingHoursItems.emergencyCall')}</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-gray-600">
            <p className="text-gray-400">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;