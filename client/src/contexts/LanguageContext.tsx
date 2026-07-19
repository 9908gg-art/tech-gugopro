import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Discover Premium 3C Tech Products',
    'hero.subtitle': 'Curated recommendations for headphones, keyboards, mice, monitors, and more',
    'hero.cta': 'Explore Products',
    'category.headphones': 'Headphones',
    'category.keyboards': 'Keyboards',
    'category.mice': 'Mice',
    'category.monitors': 'Monitors',
    'category.accessories': 'Mobile Accessories',
    'product.price': 'Price',
    'product.rating': 'Rating',
    'product.reviews': 'Reviews',
    'product.viewOnAmazon': 'View on Amazon',
    'product.affiliate': 'Affiliate Link',
    'footer.copyright': '© 2026 Tech GuGoPro. All rights reserved.',
    'footer.disclaimer': 'We are Amazon Associates. We earn commissions from qualifying purchases.',
    'language.en': 'English',
    'language.ja': '日本語',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.products': '製品',
    'nav.about': 'について',
    'nav.contact': 'お問い合わせ',
    'hero.title': 'プレミアム 3C テック製品を発見',
    'hero.subtitle': 'ヘッドフォン、キーボード、マウス、モニターなどの厳選推奨',
    'hero.cta': '製品を探索',
    'category.headphones': 'ヘッドフォン',
    'category.keyboards': 'キーボード',
    'category.mice': 'マウス',
    'category.monitors': 'モニター',
    'category.accessories': 'モバイルアクセサリー',
    'product.price': '価格',
    'product.rating': '評価',
    'product.reviews': 'レビュー',
    'product.viewOnAmazon': 'Amazon で表示',
    'product.affiliate': 'アフィリエイトリンク',
    'footer.copyright': '© 2026 Tech GuGoPro. すべての権利を保有しています。',
    'footer.disclaimer': '私たちは Amazon アソシエイトです。適格な購入から手数料を獲得します。',
    'language.en': 'English',
    'language.ja': '日本語',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const stored = localStorage.getItem('language') as Language | null;
    if (stored) {
      setLanguageState(stored);
    } else {
      const browserLang = navigator.language || 'en';
      const lang = browserLang.startsWith('ja') ? 'ja' : 'en';
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
