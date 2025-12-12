import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { products, Product } from "@/data/products";
import { Filter, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Shop() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialCategory = searchParams.get("category");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortOrder, setSortOrder] = useState("featured");

  const categories = [
    { id: "kitchen", label: "Kitchen & Dining" },
    { id: "decor", label: "Home Décor" },
    { id: "textiles", label: "Textiles & Rugs" },
    { id: "lighting", label: "Lighting" },
    { id: "local-artisans", label: "Local Artisans" },
  ];

  useEffect(() => {
    let result = products;

    // Filter by Category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by Price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "newest") {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }

    setFilteredProducts(result);
  }, [selectedCategories, priceRange, sortOrder]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif font-medium mb-4">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox 
                id={category.id} 
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <label
                htmlFor={category.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif font-medium mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 300]}
          max={300}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}+</span>
        </div>
      </div>
    </div>
  );

  const isLocalArtisans = selectedCategories.includes("local-artisans") && selectedCategories.length === 1;

  return (
    <Layout>
      {isLocalArtisans && (
        <div 
          className="fixed inset-0 z-[-1] opacity-10 pointer-events-none animate-in fade-in duration-1000"
          style={{
            backgroundImage: `url('/images/tatreez-pattern.png')`,
            backgroundSize: '400px',
            backgroundRepeat: 'repeat',
            animation: 'scrollBackground 60s linear infinite'
          }}
        />
      )}
      <style>{`
        @keyframes scrollBackground {
          from { background-position: 0 0; }
          to { background-position: 100% 100%; }
        }
      `}</style>
      <div className="container py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-2">Shop All</h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden flex-1">
                  <Filter className="mr-2 h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            <select 
              className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-full md:w-[180px]"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block col-span-1">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="col-span-1 md:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary/20 mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                          New
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <Button className="w-full bg-white text-primary hover:bg-white/90 shadow-sm">
                          Quick View
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-lg font-medium group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{product.artisan} • {product.origin}</p>
                      <p className="font-medium">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-secondary/10 rounded-lg">
                <h3 className="font-serif text-xl mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 300]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
