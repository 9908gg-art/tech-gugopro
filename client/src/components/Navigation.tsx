import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  let language: 'en' | 'ja' = 'en';
  let setLanguage = (lang: 'en' | 'ja') => {};
  let t = (key: string) => key;
  try {
    const ctx = useLanguage();
    language = ctx.language;
    setLanguage = ctx.setLanguage;
    t = ctx.t;
  } catch (e) {
    // useLanguage not available, use defaults
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-sm font-bold text-accent-foreground">TG</span>
          </div>
          <span className="hidden font-bold text-foreground sm:inline">Tech GuGoPro</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t('nav.home')}
          </a>
          <a href="#products" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t('nav.products')}
          </a>
          <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
            {t('nav.about')}
          </a>
        </div>

        {/* Language Switcher and Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 rounded-lg border border-border bg-secondary p-1">
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="h-7 px-2 text-xs"
            >
              EN
            </Button>
            <Button
              variant={language === 'ja' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('ja')}
              className="h-7 px-2 text-xs"
            >
              日本語
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="/" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              {t('nav.home')}
            </a>
            <a href="#products" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              {t('nav.products')}
            </a>
            <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              {t('nav.about')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
