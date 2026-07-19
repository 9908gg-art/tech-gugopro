import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  let t = (key: string) => key;
  try {
    const ctx = useLanguage();
    t = ctx.t;
  } catch (e) {
    // useLanguage not available, use default
  }

  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-sm font-bold text-accent-foreground">TG</span>
              </div>
              <span className="font-bold text-foreground">Tech GuGoPro</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Curated 3C tech product recommendations for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('nav.about')}
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#headphones" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('category.headphones')}
                </a>
              </li>
              <li>
                <a href="#keyboards" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('category.keyboards')}
                </a>
              </li>
              <li>
                <a href="#mice" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('category.mice')}
                </a>
              </li>
              <li>
                <a href="#monitors" className="text-muted-foreground transition-colors hover:text-accent">
                  {t('category.monitors')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <p className="text-xs text-muted-foreground">{t('footer.disclaimer')}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
