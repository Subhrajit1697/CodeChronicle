import { useState } from "react";
import Header from "@/components/Header";
import ShoppingCart, { type CartItem } from "@/components/ShoppingCart";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Hero_lifestyle_fashion_shot_141de14a.png";
import dressImage from "@assets/generated_images/Woman_in_mauve_dress_75837bf2.png";

export default function About() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every piece is carefully crafted using premium materials and meticulous attention to detail."
    },
    {
      title: "Timeless Design",
      description: "We create elegant, versatile pieces that transcend trends and remain stylish season after season."
    },
    {
      title: "Sustainable Practices",
      description: "Committed to ethical production and environmentally responsible sourcing for a better future."
    },
    {
      title: "Exceptional Service",
      description: "Our dedicated team ensures a seamless shopping experience from browsing to delivery."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header 
        onCartClick={() => setCartOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      /> */}
      
      <main className="flex-1">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Our Story
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Crafting timeless elegance for the modern woman
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
                Since 2020
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
                A Vision of Elegance
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Elegance was born from a simple belief: that every woman deserves to feel confident, 
                beautiful, and empowered through what she wears. Our journey began in a small studio, 
                where our founder envisioned creating a fashion brand that celebrates individuality while 
                honoring timeless style.
              </p>
              
              <p className="leading-relaxed">
                What sets us apart is our unwavering commitment to quality and craftsmanship. Each piece 
                in our collection is thoughtfully designed and meticulously crafted using the finest materials. 
                We work closely with skilled artisans who share our passion for excellence, ensuring that 
                every garment meets our exacting standards.
              </p>
              
              <p className="leading-relaxed">
                Today, Elegance has grown into a global community of women who appreciate the art of 
                sophisticated dressing. We continue to innovate while staying true to our core values: 
                creating beautiful, well-made pieces that you'll treasure for years to come.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 border-card-border" data-testid={`card-value-${index}`}>
                  <h3 className="font-serif text-2xl font-bold mb-4" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
                <img
                  src={dressImage}
                  alt="Our craftsmanship"
                  className="w-full h-full object-cover"
                  data-testid="img-craftsmanship"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                    Craftsmanship
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                    Made with Love & Expertise
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Our atelier brings together traditional techniques and modern innovation. 
                    Each garment is a testament to the skill and dedication of our craftspeople, 
                    who pour their expertise into every stitch.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    From selecting the finest fabrics to the final quality check, we ensure 
                    that every piece meets the highest standards of excellence. This attention 
                    to detail is what makes Elegance truly special.
                  </p>
                </div>
                
                <Button size="lg" data-testid="button-explore-collection">
                  EXPLORE OUR COLLECTION
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 leading-relaxed">
              Be part of a community that celebrates style, quality, and individuality. 
              Follow us on social media and share your Elegance moments with us.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              data-testid="button-follow"
            >
              FOLLOW US
            </Button>
          </div>
        </section>
      </main>


      <ShoppingCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
      />
    </div>
  );
}
