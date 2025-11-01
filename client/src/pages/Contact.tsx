import { useState } from "react";
import Header from "@/components/Header";
import ShoppingCart, { type CartItem } from "@/components/ShoppingCart";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Fashion Avenue, New York, NY 10001"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@elegance.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM EST"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onCartClick={() => setCartOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      
      <main className="flex-1">
        <section className="py-16 sm:py-20 lg:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have a question about our products, 
              need styling advice, or just want to say hello, our team is here to help.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-card-border text-center" data-testid={`card-contact-info-${index}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2" data-testid={`text-contact-title-${index}`}>
                    {info.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-contact-content-${index}`}>
                    {info.content}
                  </p>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      data-testid="input-subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Find quick answers to common questions about orders, shipping, and returns.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">What is your return policy?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We offer free returns within 30 days of purchase. Items must be unworn, 
                      unwashed, and in original condition with tags attached.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">How long does shipping take?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Standard shipping takes 5-7 business days. Express shipping (2-3 business days) 
                      is available at checkout for an additional fee.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Do you ship internationally?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! We ship to over 50 countries worldwide. International shipping times 
                      and costs vary by destination.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">How do I track my order?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Once your order ships, you'll receive a tracking number via email. 
                      You can also track your order in your account dashboard.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Do you offer gift wrapping?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes, complimentary gift wrapping is available at checkout. 
                      We'll beautifully package your items with a personalized note.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Visit Our Showroom
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience our collection in person at our flagship store in New York. 
              Our styling consultants are available to help you find the perfect pieces.
            </p>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">123 Fashion Avenue</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
