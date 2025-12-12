import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Leaf, Heart, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-living-room.png" 
            alt="Ethical living room interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container text-center text-white space-y-6 max-w-3xl px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium tracking-wider uppercase mb-2">
            Conscious Living
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-sm">
            Home with a Heart
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto font-light leading-relaxed">
            Handcrafted homeware that honors the earth and empowers artisans. 
            Bring authentic warmth to your space.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 min-w-[160px] h-12 text-base">
                Shop Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 min-w-[160px] h-12 text-base">
                Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Eco-Friendly Materials</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We use only sustainable, recycled, or natural materials that tread lightly on the planet.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Fair Trade Certified</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Every purchase supports fair wages and safe working conditions for our artisan partners.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold">Global Heritage</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Preserving traditional craftsmanship and cultural techniques from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-2">Curated Categories</h2>
            <p className="text-muted-foreground">Explore our ethically sourced collections</p>
          </div>
          <Link href="/shop">
            <Button variant="link" className="text-primary hidden md:flex group">
              View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Item */}
          <Link href="/shop?category=kitchen">
            <div className="group relative h-[400px] md:h-[500px] lg:col-span-1 overflow-hidden rounded-lg cursor-pointer">
              <img 
                src="/images/cat-kitchen.png" 
                alt="Kitchen & Dining" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white font-serif text-2xl mb-2">Kitchen & Dining</h3>
                <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors flex items-center">
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/shop?category=textiles">
              <div className="group relative h-[240px] overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="/images/cat-textiles.png" 
                  alt="Textiles" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-serif text-xl">Textiles & Rugs</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=decor">
              <div className="group relative h-[240px] overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src="/images/cat-decor.png" 
                  alt="Home Decor" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-serif text-xl">Home Décor</h3>
                </div>
              </div>
            </Link>

            <Link href="/shop?category=lighting">
              <div className="group relative h-[240px] overflow-hidden rounded-lg cursor-pointer sm:col-span-2 bg-[#E8E4D9]">
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <h3 className="text-primary font-serif text-2xl mb-2">New Arrivals</h3>
                    <p className="text-muted-foreground mb-4">Fresh finds from our artisan partners</p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      Discover Now
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product Spotlight */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white/5">
                {/* Placeholder for a specific product spotlight image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                  <img 
                    src="/images/cat-kitchen.png" 
                    alt="Artisan Spotlight" 
                    className="w-full h-full object-cover opacity-90 mix-blend-overlay"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <span className="text-accent font-medium tracking-wider uppercase text-sm">Artisan Spotlight</span>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">The Oaxaca Clay Collection</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Hand-dug clay, burnished with quartz stones, and fired in traditional wood-burning kilns. 
                Each piece in this collection tells the story of generations of Zapotec pottery tradition.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 border-none">
                  Explore the Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">Join Our Community</h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to receive updates on new collections, artisan stories, and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 h-12 px-4 rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <Button type="submit" size="lg" className="h-12 px-8">Subscribe</Button>
        </form>
      </section>
    </Layout>
  );
}
