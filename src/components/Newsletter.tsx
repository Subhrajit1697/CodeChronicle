import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail("");
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg mb-8 text-primary-foreground/90">
          Subscribe to receive exclusive offers, style inspiration, and early access to new collections
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white text-foreground border-0"
            required
            data-testid="input-newsletter-main"
          />
          <Button 
            type="submit"
            size="lg"
            variant="secondary"
            className="sm:w-auto"
            data-testid="button-subscribe-main"
          >
            SUBSCRIBE
          </Button>
        </form>
        
        <p className="text-sm text-primary-foreground/70 mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service
        </p>
      </div>
    </section>
  );
}
