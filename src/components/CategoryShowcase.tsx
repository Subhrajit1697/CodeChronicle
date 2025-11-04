import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useLocation } from 'wouter';

interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: string;
}

interface CategoryShowcaseProps {
  categories: Category[];
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  const [_, navigate] = useLocation();

  const CategoryShowcase = () => {
    const [location, setLocation] = useLocation();
  
    const handleCategoryClick = (categoryId: string) => {
      setLocation(`/products?category=${categoryId}`);
    };
  
    return (
      <Carousel>
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem key={category.id} className="md:basis-1/3 lg:basis-1/4">
              <Card 
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => handleCategoryClick(category.id)}
              >
                {/* Card content remains same */}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <section className="pt-10 sm:pt-14 lg:pt-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections
          </p>
        </div>

        <div className="overflow-hidden px-4">
          <Carousel opts={{ align: 'start', loop: true }} className="max-w-[calc(100vw-100px)]">
            <CarouselContent className="-ml-4">
              {categories.map((category, index) => (
                <CarouselItem key={category.name} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card
                    className="group overflow-hidden border-card-border hover-elevate transition-all duration-300 cursor-pointer h-full"
                    data-testid={`card-category-${index}`}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        data-testid={`img-category-${index}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-1" data-testid={`text-category-name-${index}`}>
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/80 mb-4" data-testid={`text-category-count-${index}`}>
                          {category.itemCount}
                        </p>
                        <Button
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                          data-testid={`button-shop-category-${index}`}
                          onClick={() => navigate(`/products`)}
                        >
                          SHOP NOW
                        </Button>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 top-5 -translate-y-1/2 mr-2 mt-2 h-10 w-10" />
            <CarouselNext className="-right-4 top-5 -translate-x-1/2 h-10 mt-2 w-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}