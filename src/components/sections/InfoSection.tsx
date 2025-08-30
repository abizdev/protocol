'use client';

import { 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  PhoneIcon 
} from '@heroicons/react/24/outline';

const InfoSection = () => {
  const infoItems = [
    {
      icon: ClockIcon,
      title: "24/7 Круглосуточно",
      description: "Наши специалисты работают круглосуточно и готовы выехать к месту ДТП в любое время суток. Быстрое реагирование и профессиональная помощь."
    },
    {
      icon: ShieldCheckIcon,
      title: "Профессиональная Экспертиза",
      description: "Квалифицированные эксперты с многолетним опытом проведут полную оценку ущерба и оформят все необходимые документы согласно требованиям."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Доступные Цены",
      description: "Самые конкурентные цены в Ташкенте на услуги европротокола. Прозрачное ценообразование без скрытых платежей."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Info Items Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Phone Call Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mb-16 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Нужна срочная помощь?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Звоните прямо сейчас! Наш аварийный комиссар выедет к вам в течение 15 минут
            </p>
            <a 
              href="tel:+998993280777"
              className="inline-flex items-center gap-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl"
            >
              <PhoneIcon className="w-6 h-6" />
              +998 99 328 07 77
            </a>
            <p className="mt-4 text-blue-200 text-sm">
              Звонок бесплатный • Консультация бесплатная
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Как оформить европротокол?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите подробную инструкцию о том, как правильно оформить европротокол 
              и какие документы необходимы для получения страховой выплаты
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
              {/* YouTube Video Embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Как оформить европротокол - подробная инструкция"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Fallback for when iframe doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Видео инструкция</h3>
                  <p className="text-gray-300">Как правильно оформить европротокол</p>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">В видео вы узнаете:</h4>
                <ul className="space-y-1">
                  <li>• Когда можно оформить европротокол</li>
                  <li>• Какие документы необходимы</li>
                  <li>• Как правильно заполнить бланк</li>
                  <li>• Что делать после оформления</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Важные моменты:</h4>
                <ul className="space-y-1">
                  <li>• Максимальная сумма ущерба</li>
                  <li>• Сроки подачи документов</li>
                  <li>• Особенности для разных страховых</li>
                  <li>• Типичные ошибки при оформлении</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Services and Pricing Section */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Услуги европротокола
            </h2>
            
            {/* Pricing */}
            <div className="mb-8">
              <p className="text-red-400 text-lg line-through mb-2">
                1 200 000.00 so'm
              </p>
              <p className="text-4xl md:text-5xl font-bold text-white">
                999 999.95 so'm
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              МЫ РАБОТАЕМ КРУГЛОСУТОЧНО<br />
              С НАМИ — ПРОСТО И БЫСТРО
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <p className="text-yellow-400 text-lg leading-relaxed mb-6">
                  Пользуясь нашими услугами, вы можете быть уверены, что ваш Европротокол будет составлен 
                  правильно, что важно для последующего урегулирования страховых и юридических вопросов. 
                  Обратитесь к нам, и мы обеспечим вам надежную поддержку на каждом этапе.
                </p>
              </div>
              <div>
                <p className="text-white text-lg leading-relaxed">
                  Правильное заполнение Европротокола играет решающую роль в процессе урегулирования 
                  страховых и юридических вопросов после ДТП. Ошибки или пропуски в заполнении могут 
                  привести к недопониманиям, задержкам в процессе урегулирования и негативным 
                  последствиям для сторон происшествия.
                </p>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Быстрое оформление</h4>
                <p className="text-gray-300 text-sm">
                  Оформление документов в течение 30 минут на месте происшествия
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Гарантия качества</h4>
                <p className="text-gray-300 text-sm">
                  100% гарантия правильного оформления всех документов
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Поддержка 24/7</h4>
                <p className="text-gray-300 text-sm">
                  Круглосуточная консультационная поддержка по всем вопросам
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;