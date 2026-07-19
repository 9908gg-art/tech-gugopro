import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  rating: number;
  reviews: number;
  image: string;
  amazonLink: string;
}

export function ProductCard({
  name,
  description,
  price,
  currency,
  rating,
  reviews,
  image,
  amazonLink,
}: ProductCardProps) {
  let t = (key: string) => key;
  try {
    const ctx = useLanguage();
    t = ctx.t;
  } catch (e) {
    // useLanguage not available, use default
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        {/* Title */}
        <h3 className="line-clamp-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
          {name}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`transition-colors ${
                  i < Math.floor(rating)
                    ? 'fill-accent text-accent'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {rating} ({reviews} {t('product.reviews')})
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="text-2xl font-bold text-accent">
            {currency}
            {price.toLocaleString()}
          </div>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-accent text-accent-foreground transition-all duration-300 hover:bg-accent/90"
          >
            <a href={amazonLink} target="_blank" rel="noopener noreferrer">
              {t('product.viewOnAmazon')}
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
