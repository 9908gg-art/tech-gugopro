import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { products, categories, getProductsByCategory } = useProducts();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'url(/manus-storage/hero-background_1a22172e.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="container relative z-10 py-20 md:py-32">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold leading-tight text-foreground md:text-6xl">
                Discover Premium 3C Tech Products
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Curated recommendations for headphones, keyboards, mice, monitors, and more
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={() => {
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Products
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="border-b border-border py-16 md:py-24">
          <div className="container">
            <PageHeader
              title="Products"
              subtitle="Handpicked tech products from around the world"
            />

            {/* Categories with Products */}
            {categories.map((category) => {
              const categoryProducts = getProductsByCategory(category.id);
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.id} id={category.id} className="mb-16 scroll-mt-20">
                  <h2 className="mb-8 text-3xl font-bold text-foreground">{category.name}</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        currency={product.currency}
                        rating={product.rating}
                        reviews={product.reviews}
                        image={product.image}
                        amazonLink={product.amazonLink}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-b border-border py-16 md:py-24">
          <div className="container max-w-2xl">
            <PageHeader
              title="About"
              subtitle="Why Tech GuGoPro?"
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Tech GuGoPro, we believe that finding the right tech products shouldn't be complicated. 
                Our mission is to provide you with carefully curated recommendations for the best 3C tech 
                products available on Amazon.
              </p>
              <p>
                Whether you're a professional looking for productivity tools or a gamer seeking the latest 
                gaming peripherals, we've got you covered. Our recommendations are based on quality, 
                performance, and user satisfaction.
              </p>
              <p>
                We partner with Amazon to bring you the best deals and exclusive offers. When you purchase 
                through our affiliate links, you support our mission to provide quality tech recommendations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
