import { Button } from "@/components/ui/button";

interface FeaturedCollectionProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
}

export default function FeaturedCollection({ 
  image, 
  title, 
  subtitle, 
  description, 
  reverse = false 
}: FeaturedCollectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : ''}`}>
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                data-testid="img-featured"
              />
            </div>
          </div>
          
          <div className={`${reverse ? 'lg:order-1' : ''} space-y-6`}>
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide" data-testid="text-subtitle">
                {subtitle}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-title">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-description">
                {description}
              </p>
            </div>
            
            <Button size="lg" data-testid="button-explore-collection">
              EXPLORE COLLECTION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
