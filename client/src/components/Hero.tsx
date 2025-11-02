import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_lifestyle_fashion_shot_141de14a.png";
import { useLocation } from 'wouter';
export default function Hero() {
    const [_, navigate] = useLocation();
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Elevate Your Style
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of timeless pieces designed for the modern woman
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 min-w-[160px]"
            data-testid="button-shop-now"
            onClick={() => navigate('/products')}
          >
            SHOP NOW
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent backdrop-blur-sm border-white/40 text-white hover:bg-white/10 min-w-[160px]"
            data-testid="button-explore"
            onClick={() => navigate('/products')}
          >
            EXPLORE COLLECTION
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
