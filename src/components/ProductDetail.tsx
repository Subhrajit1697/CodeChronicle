import { useState } from "react";
import { Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ProductDetailData {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  sizes: string[];
  materials: string;
}

interface ProductDetailProps {
  product: ProductDetailData;
  onAddToCart?: (productId: string, size: string, quantity: number) => void;
}

export default function ProductDetail({ product, onAddToCart }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    onAddToCart?.(product.id, selectedSize, quantity);
    console.log('Added to cart:', { productId: product.id, size: selectedSize, quantity });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-main-product"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-[3/4] bg-muted rounded-md overflow-hidden border-2 transition-all ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
                data-testid={`button-thumbnail-${index}`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm text-muted-foreground mb-2" data-testid="text-category">
            {product.category}
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4" data-testid="text-product-name">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl lg:text-3xl font-bold" data-testid="text-price">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through" data-testid="text-original-price">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-description">
            {product.description}
          </p>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-3 block">Select Size</label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    data-testid={`button-size-${size}`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-testid="button-decrease-quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium" data-testid="text-quantity">
                  {quantity}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                  data-testid="button-increase-quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                className="flex-1" 
                size="lg"
                onClick={handleAddToCart}
                data-testid="button-add-to-bag"
              >
                ADD TO BAG
              </Button>
              <Button
                size="icon"
                variant="outline"
                className={`h-11 w-11 ${isWishlisted ? 'text-primary' : ''}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
                data-testid="button-wishlist-detail"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>

          <Separator className="my-6" />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger data-testid="accordion-description">Description</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="materials">
              <AccordionTrigger data-testid="accordion-materials">Materials & Care</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.materials}
                </p>
                <ul className="mt-3 space-y-1 text-muted-foreground text-sm">
                  <li>• Dry clean only</li>
                  <li>• Do not bleach</li>
                  <li>• Iron on low heat</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="shipping">
              <AccordionTrigger data-testid="accordion-shipping">Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground leading-relaxed">
                  Free standard shipping on orders over $100. Express shipping available at checkout.
                  Easy returns within 30 days of purchase.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
