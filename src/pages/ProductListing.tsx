import { useState } from "react";
import ProductCard, { type Product } from "@/components/ProductCard";
import ShoppingCart, { type CartItem } from "@/components/ShoppingCart";
import ProductDetail, { type ProductDetailData } from "@/components/ProductDetail";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

import dressImage from "@assets/generated_images/Woman_in_mauve_dress_75837bf2.png";
import blackDressImage from "@assets/generated_images/Black_cocktail_dress_85fd198d.png";
import sweaterImage from "@assets/generated_images/Cream_cashmere_sweater_f77fd6f1.png";
import trousersImage from "@assets/generated_images/Navy_blue_trousers_028ba23d.png";
import handbagImage from "@assets/generated_images/Burgundy_leather_handbag_b5972d24.png";
import blouseImage from "@assets/generated_images/White_silk_blouse_199f23e2.png";
import skirtImage from "@assets/generated_images/Rose_pink_midi_skirt_ed8a7f4d.png";

export default function ProductListing() {
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [filterCategory, setFilterCategory] = useState("all");

  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Flowing Mauve Silk Midi Dress',
      price: 289,
      originalPrice: 359,
      image: dressImage,
      category: 'Dresses'
    },
    {
      id: '2',
      name: 'Elegant Black Cocktail Dress',
      price: 189,
      originalPrice: 249,
      image: blackDressImage,
      category: 'Dresses'
    },
    {
      id: '3',
      name: 'Cream Cashmere Sweater',
      price: 149,
      image: sweaterImage,
      category: 'Tops'
    },
    {
      id: '4',
      name: 'Navy Wide-Leg Trousers',
      price: 129,
      image: trousersImage,
      category: 'Bottoms'
    },
    {
      id: '5',
      name: 'Burgundy Leather Handbag',
      price: 299,
      image: handbagImage,
      category: 'Accessories'
    },
    {
      id: '6',
      name: 'White Silk Blouse',
      price: 119,
      image: blouseImage,
      category: 'Tops'
    },
    {
      id: '7',
      name: 'Rose Pink Midi Skirt',
      price: 139,
      image: skirtImage,
      category: 'Bottoms'
    },
    {
      id: '8',
      name: 'Classic Navy Blazer',
      price: 219,
      image: trousersImage,
      category: 'Tops'
    },
    {
      id: '9',
      name: 'Signature White Silk Blouse',
      price: 119,
      image: blouseImage,
      category: 'Tops'
    },
    {
      id: '10',
      name: 'Rose Pink Midi Skirt',
      price: 139,
      originalPrice: 169,
      image: skirtImage,
      category: 'Bottoms'
    },
    {
      id: '11',
      name: 'Premium Cashmere Sweater',
      price: 149,
      image: sweaterImage,
      category: 'Tops'
    },
    {
      id: '12',
      name: 'Luxury Leather Handbag',
      price: 299,
      image: handbagImage,
      category: 'Accessories'
    },
  ];

  const productDetailsMap: Record<string, ProductDetailData> = {
    '1': {
      id: '1',
      name: 'Flowing Mauve Silk Midi Dress',
      price: 289,
      originalPrice: 359,
      images: [dressImage, dressImage, dressImage, dressImage],
      category: 'Dresses',
      description: 'A stunning silk midi dress featuring a flowing silhouette and elegant draping. Perfect for special occasions or elevated everyday wear.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '100% Premium Silk'
    },
    '2': {
      id: '2',
      name: 'Elegant Black Cocktail Dress',
      price: 189,
      originalPrice: 249,
      images: [blackDressImage, blackDressImage, blackDressImage, blackDressImage],
      category: 'Dresses',
      description: 'A timeless black cocktail dress with a sophisticated cut. Features a flattering silhouette and premium fabric.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '95% Polyester, 5% Elastane'
    },
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleAddToCart = (productId: string, size: string, quantity: number) => {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId && item.size === size);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity
      };
      setCartItems([...cartItems, newItem]);
    }

    setQuickViewProduct(null);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Filter products
  const filteredProducts = filterCategory === "all"
    ? allProducts
    : allProducts.filter(p => p.category === filterCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const quickViewProductDetail = quickViewProduct && productDetailsMap[quickViewProduct.id]
    ? productDetailsMap[quickViewProduct.id]
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-br from-purple-100 via-pink-50 to-amber-50 dark:from-purple-950 dark:via-pink-950 dark:to-amber-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            Our Collection
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6">
            Discover timeless elegance with our curated selection of premium fashion pieces
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
              {sortedProducts.length} Products
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-1">Shop All</h2>
            <p className="text-sm text-muted-foreground">
              {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} available
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Dresses">Dresses</SelectItem>
              <SelectItem value="Tops">Tops</SelectItem>
              <SelectItem value="Bottoms">Bottoms</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name">Name: A to Z</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found matching your filters.
            </p>
          </div>
        )}
      </div>

      <ShoppingCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />

      <Dialog open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
          {quickViewProductDetail && (
            <ProductDetail
              product={quickViewProductDetail}
              onAddToCart={handleAddToCart}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
