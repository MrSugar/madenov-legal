/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import {
  ShieldCheck, TrendingDown, FileText, AlertTriangle, Scale, Users,
  CheckCircle, MapPin, Phone, Mail, Menu, X, Moon, Sun, Globe,
  Instagram, Video
} from 'lucide-react';



const translations = {
  ru: {
    title: "Юристы по долгам и банкротству в Казахстане",
    subtitle: "Защищаем от банков, МФО и коллекторов законными способами",
    cta: "Получить консультацию",
    whatsapp: "Написать в WhatsApp",
    servicesTitle: "Чем мы помогаем",
    aboutTitle: "О юристе",
    aboutName: "Маденов Вилиятулла Насырович",
    aboutSpec: "Специализация — долги и банкротство физических лиц",
    casesTitle: "Успешные кейсы",
    pricesTitle: "Цены на услуги",
    pricesNote: "Точная стоимость — после анализа вашей ситуации",
    contactsTitle: "Контакты",
    formName: "Ваше имя",
    formPhone: "Телефон",
    formMessage: "Сообщение (необязательно)",
    formSubmit: "Отправить заявку",
    formSuccess: "Спасибо! Мы свяжемся с вами в ближайшее время",
    menu: ['Услуги', 'О нас', 'Кейсы', 'Цены', 'Контакты'],
    services: [
      { title: "Реструктуризация долгов", desc: "Снижение платежей и процентов" },
      { title: "Отмена исполнительных надписей", desc: "Оспариваем незаконные действия" },
      { title: "Жалобы в госорганы", desc: "АРРФР, прокуратура, МВД" },
      { title: "Внесудебное банкротство", desc: "Списание без суда" },
      { title: "Судебное банкротство", desc: "Полное списание через суд" },
      { title: "Защита в суде", desc: "От банков и коллекторов" },
    ],
    credentials: [
      "Член Палаты юридических консультантов «Лига юристов Астаны», рег. № 339",
      "Опыт работы с банками, МФО и коллекторами",
      "Практика по банкротству и защите должников",
      "Работаем по договору с фиксацией стоимости"
    ],
    cases: [
      { situation: "Клиентка из Караганды, долг по МФО, арест счетов", result: "Производство прекращено" },
      { situation: "Мужчина из Алматы, 5 кредитов", result: "Долги списаны полностью" },
      { situation: "Семья из Астаны, ипотека и автокредит", result: "График снижен, иски отозваны" },
      { situation: "Женщина из Алматы, 8 кредитов, частичные платежи не помогали", result: "Проведена процедура банкротства, долги списаны" },
      { situation: "Женщина из Актау, Несколько крупных кредитов, критическая долговая нагрузка. Процесс длился долго, включал многократные судебные заседания, запросы в банки, проверку начислений и спорных процентов.", result: "Суд полностью списал все долги, несмотря на сопротивление кредиторов" },
      { situation: "Клиент, Алматы — ИП, бизнес по аренде машин. Множество кредитов, финансовая нагрузка огромная. Не знал, как выйти из долговой ямы", result: "Благодаря процедуре реабилитации и нашей работе суд был выигран после долгого разбирательства. Клиент снова контролирует бизнес и финансы" },
    ],
    pricing: [
      { service: "Консультация для физических лиц", price: "10 000 ₸" },
      { service: "Консультация для юридических лиц", price: "от 15 000 ₸" },
    ],
  },

  kk: {
    title: "Қазақстанда қарыздар және банкроттық бойынша заңгерлер",
    subtitle: "Банктерден, МҚҰ-дан және коллекторлардан заңды жолмен қорғаймыз",
    cta: "Кеңес алу",
    whatsapp: "WhatsApp-қа жазу",
    servicesTitle: "Біз немен көмектесеміз",
    aboutTitle: "Заңгер туралы",
    aboutName: "Мәденов Вилиятулла Насырович",
    aboutSpec: "Мамандығы — жеке тұлғалардың қарыздары және банкроттығы",
    casesTitle: "Сәтті істер",
    pricesTitle: "Қызметтер бағасы",
    pricesNote: "Нақты құны — жағдайыңызды талдағаннан кейін",
    contactsTitle: "Байланыстар",
    formName: "Аты-жөніңіз",
    formPhone: "Телефон",
    formMessage: "Хабарлама (міндетті емес)",
    formSubmit: "Өтініш жіберу",
    formSuccess: "Рахмет! Біз сізбен тез арада хабарласамыз",
    menu: ['Қызметтер', 'Біз туралы', 'Істер', 'Бағалар', 'Байланыс'],
    services: [
      { title: "Қарызды қайта құрылымдау", desc: "Төлемдер мен пайыздарды төмендету" },
      { title: "Атқарушылық жазбаларды жою", desc: "Заңсыз әрекеттерді даулаймыз" },
      { title: "Меморгандарға шағымдар", desc: "АҚШҚ, прокуратура, ІІМ" },
      { title: "Соттан тыс банкроттық", desc: "Сотсыз қарызды есептен шығару" },
      { title: "Сот банкроттығы", desc: "Сот арқылы толық есептен шығару" },
      { title: "Сотта қорғау", desc: "Банктер мен коллекторлардан" },
    ],
    credentials: [
      "«Астана заңгерлері лигасы» мүшесі, рег. № 339",
      "Банктермен, МҚҰ-мен және коллекторлармен жұмыс тәжірибесі",
      "Азаматтардың банкроттығы және борышкерлерді қорғау практикасы",
      "Шарт бойынша жұмыс істейміз, бағаны бекітеміз"
    ],
    cases: [
      { situation: "Қарағандыдан клиентка, МҚҰ бойынша қарыз", result: "Іс тоқтатылды" },
      { situation: "Алматыдан ер адам, 5 несие", result: "Қарыз толық есептен шығарылды" },
      { situation: "Астанадан отбасы, ипотека және автонесие", result: "Төлем кестесі төмендетілді" },
    ],
    pricing: [
      { service: "Жеке тұлғаларға арналған кеңес беру", price: "10 000 ₸" },
      { service: "Заңды тұлғаларға арналған кеңес беруу", price: "15 000 ₸-ден бастап" },
    ],
  }
};

export default function App() {
  const [lang, setLang] = useState('ru');
  const [dark, setDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Загружаем тему
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme !== null) {
      setDark(savedTheme === 'true');
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(systemDark);
    }

    setIsLoaded(true);
  }, []);

  // Применяем тему
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem('darkMode', dark);

    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark, isLoaded]);

  // Реакция на системную тему
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = e => {
      const saved = localStorage.getItem('darkMode');
      if (saved === null) setDark(e.matches);
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t = translations[lang];
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnneglgd';
  const waLink = 'https://wa.me/+77717639528';

  const scrollTo = (itemName) => {
    const idMap = {
      'Услуги': 'услуги', 'Қызметтер': 'услуги',
      'О нас': 'о-нас', 'Біз туралы': 'о-нас',
      'Кейсы': 'кейсы', 'Істер': 'кейсы',
      'Цены': 'цены', 'Бағалар': 'цены',
      'Контакты': 'контакты', 'Байланыс': 'контакты',
      'hero': 'hero'
    };
    const id = idMap[itemName] || 'hero';
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message || '—',
          _subject: 'Новая заявка | Madenov Legal Group',
        }),
      });
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch {
      alert('Ошибка отправки. Напишите в WhatsApp');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500">

     {/* ПЕРЕКЛЮЧАТЕЛИ ТЕМЫ И ЯЗЫКА */}
<div className="
  fixed
  bottom-4 right-4
  md:top-24 md:bottom-auto
  z-40
  flex gap-3
">
  <button
    onClick={() => setDark(!dark)}
    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition"
    aria-label="Toggle theme"
  >
    {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>

  <button
    onClick={() => setLang(lang === 'ru' ? 'kk' : 'ru')}
    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
    aria-label="Toggle language"
  >
    <Globe className="w-4 h-4" />
    {lang === 'ru' ? 'ҚАЗ' : 'РУС'}
  </button>
</div>


      {/* ШАПКА */}
      <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div onClick={() => scrollTo('hero')} className="flex items-center space-x-3 cursor-pointer">
            {/*импорт лого*/}
            <img
  
  src={dark ? "/logo-light.png" : "/logo-dark.png"}
  alt="Logo"
  className="h-12"
/>


            {/*<ShieldCheck className="w-12 h-12 text-yellow-600" /> */}
            <div>
              <div className="font-bold text-2xl text-blue-900 dark:text-blue-400">Madenov</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Legal Group</div>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-10">
            {t.menu.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition">
                {item}
              </button>
            ))}
          </nav>

          <a href={waLink} className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold">
            {t.whatsapp}
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 border-t py-4">
            {t.menu.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-8 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                {item}
              </button>
            ))}
            <a href={waLink} className="block text-center bg-green-500 text-white py-3 mx-8 rounded-lg">{t.whatsapp}</a>
          </div>
        )}
      </header>

      {/* ГЕРОЙ */}
      <section id="hero" className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-32 text-center transition-all duration-500">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">{t.subtitle}</p>
          <a href={waLink} className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-xl text-xl font-bold">{t.cta}</a>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section id="услуги" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-400">{t.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((s, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О НАС */}
      <section id="о-нас" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-900 dark:text-blue-400">{t.aboutTitle}</h2>
          <div className="max-w-4xl mx-auto">

            {/*фото*/}
            
           <img
  src="/photo.jpg"
  alt="Маденов Вилиятулла Насырович"
  className="w-64 h-64 mx-auto mb-8 rounded-xl object-cover shadow-lg"
/>


            <h3 className="text-3xl font-bold mb-4">{t.aboutName}</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">{t.aboutSpec}</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {t.credentials.map((text, i) => (
                <div key={i} className="flex items-start gap-4 text-left bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* КЕЙСЫ */}
      <section id="кейсы" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-400">{t.casesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-cols-3 gap-8">
            {t.cases.map((c, i) => (
              <div key={i} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{c.situation}"</p>
                <p className="text-green-600 dark:text-green-400 font-bold text-lg">Результат: {c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЦЕНЫ */}
      <section id="цены" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900 dark:text-blue-400">{t.pricesTitle}</h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
            {t.pricing.map((p, i) => (
              <div key={i} className={`flex justify-between px-8 py-5 ${i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}`}>
                <span className="font-medium">{p.service}</span>
                <span className="font-bold text-blue-900 dark:text-blue-400">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">{t.pricesNote}</p>
        </div>
      </section>

      {/* КОНТАКТЫ */}
            {/* КОНТАКТЫ */}
      <section id="контакты" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">{t.contactsTitle}</h2>
            <div className="space-y-6 text-lg">

              <p className="flex items-center gap-3">
                <MapPin className="w-6 h-6" /> 
                г. Астана, ул. Женис, д. 29, БЦ "Табыс", офис 422
              </p>

              <p className="flex items-center gap-3">
                <Phone className="w-6 h-6" /> 
                <a href="tel:+77717639528">+7 (771) 763-95-28</a>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="w-6 h-6" /> 
                mail@madenovlegal.kz
              </p>

              {/* TikTok */}
              <p className="flex items-center gap-3">
                <Video className="w-6 h-6 text-[#FF0050]" /> 
                <a 
                  href="https://www.tiktok.com/@madenov_legal_group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FF0050] transition-colors"
                >
                  TikTok @madenov_legal_group
                </a>
              </p>

              {/* Instagram */}
              <p className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-[#E1306C]" /> 
                <a 
                  href="https://www.instagram.com/madenov_legal_group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#E1306C] transition-colors"
                >
                  Instagram @madenov_legal_group
                </a>
              </p>

              <a 
                href={waLink} 
                className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold mt-6"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* Форма заявки (оставил без изменений) */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
            {isSubmitted ? (
              <p className="text-green-400 text-xl">{t.formSuccess}</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder={t.formName} 
                  required 
                  value={formData.name} 
                  onChange={e => setFormData({ ...formData, name: e.target.value })} 
                  className="w-full p-4 rounded-lg bg-slate-800 text-white" 
                />
                <input 
                  type="tel" 
                  placeholder={t.formPhone} 
                  required 
                  value={formData.phone} 
                  onChange={e => setFormData({ ...formData, phone: e.target.value })} 
                  className="w-full p-4 rounded-lg bg-slate-800 text-white" 
                />
                <textarea 
                  placeholder={t.formMessage} 
                  rows="4" 
                  value={formData.message} 
                  onChange={e => setFormData({ ...formData, message: e.target.value })} 
                  className="w-full p-4 rounded-lg bg-slate-800 text-white"
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-lg font-bold"
                >
                  {isSubmitting ? '...' : t.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-gray-400 py-8 text-center">
        <p>© 2026 Madenov Legal Group. Все права защищены.</p>
      </footer>
    </div>
  );
}
