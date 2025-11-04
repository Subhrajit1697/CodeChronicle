import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { name: "New Arrivals", href: "/" },
    { name: "Dresses", href: "/" },
    { name: "Tops", href: "/" },
    { name: "Bottoms", href: "/" },
    { name: "Accessories", href: "/" },
  ];

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Sustainability", href: "/about" },
    { name: "Careers", href: "/about" },
  ];

  const customerLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping Info", href: "/contact" },
    { name: "Returns", href: "/contact" },
    { name: "Size Guide", href: "/contact" },
    { name: "FAQ", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Elegance</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Curating timeless pieces for the modern woman. Discover elegance in every detail.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" data-testid="button-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" data-testid="button-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">About</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Customer Service</h4>
            <ul className="space-y-3 mb-6">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>&copy; 2024 Elegance. All rights reserved.</span>
              <div className="flex gap-4">
                <Link href="/">
                  <span className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy Policy</span>
                </Link>
                <Link href="/">
                  <span className="hover:text-foreground transition-colors" data-testid="link-terms">Terms of Service</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-sm font-medium">Newsletter</span>
              <div className="flex gap-2 w-full sm:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-64"
                  data-testid="input-newsletter"
                />
                <Button data-testid="button-subscribe">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
