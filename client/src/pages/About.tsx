import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-living-room.png" 
            alt="Artisan working" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container text-center text-white max-w-3xl px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Bridging the gap between conscious consumers and master artisans around the world.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">The Mission</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary">More Than Just Decor</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ethica Home was founded on a simple belief: that the things we bring into our homes should reflect our values. 
              We partner directly with artisan cooperatives in Mexico, Peru, India, and beyond to bring you handcrafted goods 
              that preserve cultural heritage and provide sustainable livelihoods.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every bowl, rug, and vase has a story. By cutting out the middlemen, we ensure that 
              makers receive fair compensation—often 2-3x the local minimum wage—allowing them to invest in their 
              families and communities.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden bg-secondary/20">
            <img 
              src="/images/cat-textiles.png" 
              alt="Textile weaving" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-6">
              <div className="font-serif text-5xl font-bold mb-2">350+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Artisans Supported</div>
            </div>
            <div className="p-6">
              <div className="font-serif text-5xl font-bold mb-2">12</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Countries Represented</div>
            </div>
            <div className="p-6">
              <div className="font-serif text-5xl font-bold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Fair Trade Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Contact CTA */}
      <section className="py-20 container text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-6">Join the Movement</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Whether you're looking to refresh your living room or find the perfect gift, 
          your choice matters. Thank you for choosing ethical.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/shop">
            <Button size="lg">Shop Collection</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Contact Us</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
