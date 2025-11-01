import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <Card 
      className="group overflow-hidden border-card-border hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid={`img-product-${product.id}`}
        />
        
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white transition-all ${isWishlisted ? 'text-primary' : ''}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          data-testid={`button-wishlist-${product.id}`}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>

        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <Button 
            className="w-full bg-white text-foreground hover:bg-white/90"
            onClick={() => onQuickView?.(product)}
            data-testid={`button-quick-view-${product.id}`}
          >
            QUICK VIEW
          </Button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1" data-testid={`text-category-${product.id}`}>
          {product.category}
        </p>
        <h3 className="font-medium text-base mb-2 line-clamp-2" data-testid={`text-name-${product.id}`}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold" data-testid={`text-price-${product.id}`}>
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
