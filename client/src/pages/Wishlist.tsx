import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";
import ProductDetail, { type ProductDetailData } from "@/components/ProductDetail";
import ShoppingCart, { type CartItem } from "@/components/ShoppingCart";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart, ShoppingBag } from "lucide-react";
import { useLocation } from "wouter";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const [_, navigate] = useLocation();
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product);
  };

  const handleAddToCart = (productId: string, size: string, quantity: number) => {
    const product = wishlist.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(
      (item) => item.id === productId && item.size === size
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        quantity,
      };
      setCartItems([...cartItems, newItem]);
    }

    setQuickViewProduct(null);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Mock product details for quick view
  const quickViewProductDetail = quickViewProduct
    ? ({
        ...quickViewProduct,
        images: [
          quickViewProduct.image,
          quickViewProduct.image,
          quickViewProduct.image,
          quickViewProduct.image,
        ],
        description: `Premium quality ${quickViewProduct.name.toLowerCase()}. Crafted with attention to detail for the discerning customer.`,
        sizes: ["XS", "S", "M", "L", "XL"],
        materials: "Premium Materials",
      } as ProductDetailData)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="relative h-[30vh] min-h-[250px] bg-gradient-to-br from-rose-100 via-pink-50 to-purple-50 dark:from-rose-950 dark:via-pink-950 dark:to-purple-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <Heart className="w-16 h-16 mb-4 text-rose-500 fill-rose-500" />
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400">
            My Wishlist
          </h1>
          <p className="text-lg text-muted-foreground">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved for later
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted mb-6">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="font-serif text-2xl font-bold mb-3">
              Your wishlist is empty
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Start adding items you love to your wishlist by clicking the heart icon
              on any product.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/products")}
              className="gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {wishlist.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <ShoppingCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />

      <Dialog
        open={!!quickViewProduct}
        onOpenChange={() => setQuickViewProduct(null)}
      >
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
