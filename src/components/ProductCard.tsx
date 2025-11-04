import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWishlist } from "@/context/WishlistContext";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group overflow-hidden border-card-border hover:shadow-2xl hover:border-border/60 transition-all duration-500 cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-[3/4] bg-gradient-to-br from-muted/50 to-muted">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            data-testid={`img-product-${product.id}`}
          />
          
          {/* Overlay gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 z-20 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 left-60 z-20 bg-white/95 backdrop-blur-md hover:bg-white hover:scale-110 transition-all duration-300 rounded-full shadow-lg ${isWishlisted ? 'text-red-500 scale-110' : 'text-gray-600'}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          data-testid={`button-wishlist-${product.id}`}
        >
          <Heart className={`h-5 w-5 transition-all ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick View Button */}
        <div className={`absolute inset-x-0 bottom-0 p-4 z-10 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <Button 
            className="w-full bg-white/95 backdrop-blur-md text-foreground hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.(product);
            }}
            data-testid={`button-quick-view-${product.id}`}
          >
            QUICK VIEW
          </Button>
        </div>
      </div>

      <div className="p-5 bg-gradient-to-b from-background to-card/50">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold" data-testid={`text-category-${product.id}`}>
          {product.category}
        </p>
        <h3 className="font-semibold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors" data-testid={`text-name-${product.id}`}>
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid={`text-price-${product.id}`}>
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through" data-testid={`text-original-price-${product.id}`}>
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
