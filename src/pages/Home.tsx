import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryShowcase from "@/components/CategoryShowcase";
import FeaturedCollection from "@/components/FeaturedCollection";
import Newsletter from "@/components/Newsletter";
import ShoppingCart, { type CartItem } from "@/components/ShoppingCart";
import Footer from "@/components/Footer";
import { type Product } from "@/components/ProductCard";
import ProductDetail, { type ProductDetailData } from "@/components/ProductDetail";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import dressImage from "@assets/generated_images/Woman_in_mauve_dress_75837bf2.png";
import blackDressImage from "@assets/generated_images/black_cocktail_dress.jfif";
import sweaterImage from "@assets/generated_images/Women's_Sweater.jfif";
import trousersImage from "@assets/generated_images/LTS Tall Womens Black Wide Leg High Waisted Trousers _ Long Tall Sally.jfif";
import handbagImage from "@assets/generated_images/handbag03.jfif";
import blouseImage from "@assets/generated_images/20 Best Formal Shirts for Women With Latest Designs.jfif";
import skirtImage from "@assets/generated_images/Ivanka Trump cuts a classic figure as she heads out to work.jfif";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  console.log('quickViewProduct state', quickViewProduct)
  const newArrivals: Product[] = [
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
    }
  ];

  const bestSellers: Product[] = [
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
    {
      id: '13',
      name: 'Navy Wide-Leg Trousers',
      price: 129,
      image: trousersImage,
      category: 'Bottoms'
    },
    {
      id: '14',
      name: 'Black Cocktail Dress',
      price: 189,
      image: blackDressImage,
      category: 'Dresses'
    },
    {
      id: '15',
      name: 'Mauve Silk Dress',
      price: 289,
      image: dressImage,
      category: 'Dresses'
    },
    {
      id: '16',
      name: 'Elegant Blazer',
      price: 219,
      image: trousersImage,
      category: 'Tops'
    }
  ];

  const categories = [
    { name: 'Dresses', image: dressImage, itemCount: '120+ Styles', id: '1' },
    { name: 'Bottoms', image: skirtImage, itemCount: '95+ Styles', id: '2' },
    { name: 'Accessories', image: handbagImage, itemCount: '60+ Styles', id: '3' },
    { name: 'Dresses', image: dressImage, itemCount: '120+ Styles', id: '4' },
    { name: 'Tops', image: blouseImage, itemCount: '85+ Styles', id: '5' },
    { name: 'Bottoms', image: skirtImage, itemCount: '95+ Styles', id: '6' },
    { name: 'Accessories', image: handbagImage, itemCount: '60+ Styles', id: '7' },
    { name: 'Dresses', image: dressImage, itemCount: '120+ Styles', id: '8' },
    { name: 'Bottoms', image: skirtImage, itemCount: '95+ Styles', id: '9' },
    { name: 'Accessories', image: handbagImage, itemCount: '60+ Styles', id: '10' },
    { name: 'Dresses', image: dressImage, itemCount: '120+ Styles', id: '11' },
    { name: 'Tops', image: blouseImage, itemCount: '85+ Styles', id: '12' },
    { name: 'Accessories', image: handbagImage, itemCount: '60+ Styles', id: '13' },
  ];

  const allProducts = [...newArrivals, ...bestSellers];

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
    '3': {
      id: '3',
      name: 'Cream Cashmere Sweater',
      price: 149,
      images: [sweaterImage, sweaterImage, sweaterImage, sweaterImage],
      category: 'Tops',
      description: 'Luxuriously soft cashmere sweater in a versatile cream shade. Features a classic crewneck design and ribbed trim for a refined finish.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '100% Pure Cashmere'
    },
    '4': {
      id: '4',
      name: 'Navy Wide-Leg Trousers',
      price: 129,
      images: [trousersImage, trousersImage, trousersImage, trousersImage],
      category: 'Bottoms',
      description: 'Sophisticated wide-leg trousers in rich navy. Featuring a high-rise waist and flowing silhouette for effortless elegance.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '70% Wool, 30% Polyester'
    },
    '5': {
      id: '5',
      name: 'Burgundy Leather Handbag',
      price: 299,
      images: [handbagImage, handbagImage, handbagImage, handbagImage],
      category: 'Accessories',
      description: 'Premium leather handbag in deep burgundy. Features multiple compartments, adjustable strap, and gold-tone hardware.',
      sizes: ['One Size'],
      materials: '100% Genuine Leather'
    },
    '6': {
      id: '6',
      name: 'White Silk Blouse',
      price: 119,
      images: [blouseImage, blouseImage, blouseImage, blouseImage],
      category: 'Tops',
      description: 'Classic white silk blouse with delicate button detailing. Perfect for both professional and casual settings.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '100% Silk'
    },
    '7': {
      id: '7',
      name: 'Rose Pink Midi Skirt',
      price: 139,
      images: [skirtImage, skirtImage, skirtImage, skirtImage],
      category: 'Bottoms',
      description: 'Romantic midi skirt in soft rose pink. Features a flowing A-line silhouette and hidden side zipper.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '65% Polyester, 35% Cotton'
    },
    '8': {
      id: '8',
      name: 'Classic Navy Blazer',
      price: 219,
      images: [trousersImage, trousersImage, trousersImage, trousersImage],
      category: 'Tops',
      description: 'Timeless navy blazer with structured shoulders and notched lapels. A wardrobe essential for any occasion.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '75% Wool, 25% Polyester'
    },
    '9': {
      id: '9',
      name: 'Signature White Silk Blouse',
      price: 119,
      images: [blouseImage, blouseImage, blouseImage, blouseImage],
      category: 'Tops',
      description: 'Our signature silk blouse in pristine white. Features elegant draping and mother-of-pearl buttons.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '100% Mulberry Silk'
    },
    '10': {
      id: '10',
      name: 'Rose Pink Midi Skirt',
      price: 139,
      originalPrice: 169,
      images: [skirtImage, skirtImage, skirtImage, skirtImage],
      category: 'Bottoms',
      description: 'Feminine midi skirt in delicate rose pink. Features a flattering high waist and graceful pleating.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '70% Viscose, 30% Linen'
    },
    '11': {
      id: '11',
      name: 'Premium Cashmere Sweater',
      price: 149,
      images: [sweaterImage, sweaterImage, sweaterImage, sweaterImage],
      category: 'Tops',
      description: 'Premium grade cashmere sweater for ultimate comfort. Features ribbed cuffs and hem with a relaxed fit.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '100% Grade-A Cashmere'
    },
    '12': {
      id: '12',
      name: 'Luxury Leather Handbag',
      price: 299,
      images: [handbagImage, handbagImage, handbagImage, handbagImage],
      category: 'Accessories',
      description: 'Luxury leather handbag crafted from Italian leather. Features structured design with elegant hardware details.',
      sizes: ['One Size'],
      materials: '100% Italian Leather'
    },
    '13': {
      id: '13',
      name: 'Navy Wide-Leg Trousers',
      price: 129,
      images: [trousersImage, trousersImage, trousersImage, trousersImage],
      category: 'Bottoms',
      description: 'Elegant wide-leg trousers in classic navy. Features tailored fit through the hip with relaxed leg opening.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '68% Polyester, 30% Viscose, 2% Elastane'
    },
    '14': {
      id: '14',
      name: 'Black Cocktail Dress',
      price: 189,
      images: [blackDressImage, blackDressImage, blackDressImage, blackDressImage],
      category: 'Dresses',
      description: 'Sophisticated black cocktail dress with figure-flattering silhouette. Perfect for evening events and special occasions.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '92% Polyester, 8% Elastane'
    },
    '15': {
      id: '15',
      name: 'Mauve Silk Dress',
      price: 289,
      images: [dressImage, dressImage, dressImage, dressImage],
      category: 'Dresses',
      description: 'Luxurious mauve silk dress with elegant draping and flowing movement. A statement piece for any wardrobe.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '100% Silk Charmeuse'
    },
    '16': {
      id: '16',
      name: 'Elegant Blazer',
      price: 219,
      images: [trousersImage, trousersImage, trousersImage, trousersImage],
      category: 'Tops',
      description: 'Impeccably tailored blazer with modern silhouette. Features single-button closure and functional pockets.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      materials: '80% Wool, 20% Polyester'
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

  const quickViewProductDetail = quickViewProduct && productDetailsMap[quickViewProduct.id]
    ? productDetailsMap[quickViewProduct.id]
    : null;

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <Hero />
        <div id="categories">
          <CategoryShowcase categories={categories} />
        </div>
        <div id="new-arrivals">
          <ProductGrid products={newArrivals} onQuickView={handleQuickView} />
        </div>
        <FeaturedCollection
          image={dressImage}
          title="Winter Essentials"
          subtitle="New Collection"
          description="Discover our carefully curated selection of Winter essentials. From flowing dresses to elegant accessories, each piece is designed to elevate your wardrobe with timeless sophistication."
        />
        <section id="best-sellers" className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Best Sellers</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our most loved pieces, chosen by you
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {bestSellers.map((product) => (
                <div key={product.id}>
                  {/* Inline ProductCard to avoid import issues */}
                  <div
                    className="group overflow-hidden border border-card-border hover-elevate transition-all duration-300 rounded-md bg-card"
                    onClick={() => handleQuickView(product)}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-medium text-base mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Newsletter />
      </main>


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
