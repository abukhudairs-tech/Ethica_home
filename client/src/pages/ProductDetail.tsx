import { useState } from "react";
import { useRoute, Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, Star, Truck, ShieldCheck, Heart } from "lucide-react";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [quantity, setQuantity] = useState(1);

  if (!match) return <NotFound />;

  const product = products.find((p) => p.id === params.id);

  if (!product) return <NotFound />;

  // Recommendation Logic: Same category, excluding current product
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="container py-12">
        <Link href="/shop">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-md bg-secondary/20 overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                  <img 
                    src={product.image} 
                    alt={`View ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    New Arrival
                  </span>
                )}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-medium">${product.price}</span>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-muted-foreground text-sm ml-2">(12 reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Artisan Made</h4>
                  <p className="text-sm text-muted-foreground">
                    Crafted by {product.artisan} in {product.origin}.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">Carbon Neutral Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders over $100.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-input rounded-md">
                  <button 
                    className="px-4 py-2 hover:bg-secondary/50"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 font-medium">{quantity}</span>
                  <button 
                    className="px-4 py-2 hover:bg-secondary/50"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button size="lg" className="flex-1 text-base">
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button size="icon" variant="outline" className="h-11 w-11">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-border pt-16">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/product/${rp.id}`}>
                  <div className="group cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden rounded-md bg-secondary/20 mb-4">
                      <img
                        src={rp.image}
                        alt={rp.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors">
                      {rp.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">${rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
