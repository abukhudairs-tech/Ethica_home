import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs font-medium tracking-wide">
        FREE SHIPPING ON ORDERS OVER $100 | ETHICALLY SOURCED
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div className={`text-lg font-medium py-2 transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"}`}>
                      {link.label}
                    </div>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/">
              <div className="font-serif text-2xl font-bold tracking-tight text-primary cursor-pointer">
                Ethica Home
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 mx-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${isActive(link.href) ? "text-primary" : "text-muted-foreground"}`}>
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className={`relative transition-all duration-300 ${isSearchOpen ? "w-48 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>
              <Input 
                placeholder="Search..." 
                className="h-8 text-xs bg-muted/50 border-none focus-visible:ring-1"
              />
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-semibold text-primary">Ethica Home</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Curating ethically sourced homeware that brings warmth to your space and dignity to artisans worldwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm uppercase tracking-wider text-foreground/80">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/shop?category=kitchen">Kitchen & Dining</Link></li>
                <li><Link href="/shop?category=decor">Home Décor</Link></li>
                <li><Link href="/shop?category=textiles">Textiles & Rugs</Link></li>
                <li><Link href="/shop?category=new">New Arrivals</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-sm uppercase tracking-wider text-foreground/80">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/sustainability">Sustainability</Link></li>
                <li><Link href="/artisans">Meet the Artisans</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-sm uppercase tracking-wider text-foreground/80">Stay Connected</h4>
              <p className="text-sm text-muted-foreground">
                Join our newsletter for fair trade stories and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="bg-background" />
                <Button variant="default">Join</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Ethica Home. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
