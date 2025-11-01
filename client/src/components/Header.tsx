import { useState } from "react";
import { Link } from "wouter";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onCartClick?: () => void;
  cartItemCount?: number;
}

export default function Header({ onCartClick, cartItemCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const categories = [
    { name: "New Arrivals", href: "/" },
    { name: "Dresses", href: "/" },
    { name: "Tops", href: "/" },
    { name: "Bottoms", href: "/" },
    { name: "Accessories", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            
            <Link href="/" data-testid="link-home">
              <h1 className="font-serif text-2xl font-bold tracking-tight">Elegance</h1>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} data-testid={`link-${category.name.toLowerCase().replace(' ', '-')}`}>
                <span className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
                  {category.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {searchOpen ? (
              <div className="flex items-center gap-2">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-48 sm:w-64"
                  autoFocus
                  data-testid="input-search"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSearchOpen(false)}
                  data-testid="button-close-search"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setSearchOpen(true)}
                  data-testid="button-search"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" data-testid="button-wishlist">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="relative"
                  onClick={onCartClick}
                  data-testid="button-cart"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium" data-testid="text-cart-count">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </>
            )}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-2">
              {categories.map((category) => (
                <Link key={category.name} href={category.href}>
                  <span className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md" data-testid={`mobile-link-${category.name.toLowerCase().replace(' ', '-')}`}>
                    {category.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
