import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useWishlist } from "@/context/WishlistContext";
import brand from "@assets/generated_images/icon2.png";

interface HeaderProps {
  onCartClick?: () => void;
  cartItemCount?: number;
}

export default function Header({ onCartClick, cartItemCount = 0 }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { wishlist } = useWishlist();
  const [location, navigate] = useLocation();

  const menuItems = [
    { name: "New Arrivals", type: "section", sectionId: "new-arrivals" },
    { name: "Categories", type: "section", sectionId: "categories" },
    { name: "Best Sellers", type: "section", sectionId: "best-sellers" },
    { name: "About", type: "page", href: "/about" },
    { name: "Contact", type: "page", href: "/contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.type === "section") {
      scrollToSection(item.sectionId!);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl supports-[backdrop-filter]:bg-background/30 border-b border-border/40 shadow-sm">
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
              <img src={brand} alt="Brand Logo" className="h-32 w-auto" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              item.type === "page" ? (
                <Link key={item.name} href={item.href!} data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}>
                  <span className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              ) : (
                <span
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors cursor-pointer"
                  data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.name}
                </span>
              )
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
                <Link href="/wishlist">
                  <Button size="icon" variant="ghost" className="relative" data-testid="button-wishlist">
                    <Heart className="h-5 w-5" />
                    {wishlist.length > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium">
                        {wishlist.length}
                      </span>
                    )}
                  </Button>
                </Link>
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
              {menuItems.map((item) => (
                item.type === "page" ? (
                  <Link key={item.name} href={item.href!}>
                    <span
                      className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md"
                      data-testid={`mobile-link-${item.name.toLowerCase().replace(' ', '-')}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <span
                    key={item.name}
                    onClick={() => handleMenuClick(item)}
                    className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md cursor-pointer"
                    data-testid={`mobile-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </span>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
