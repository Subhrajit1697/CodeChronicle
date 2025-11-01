import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  name: string;
  image: string;
  itemCount: string;
}

interface CategoryShowcaseProps {
  categories: Category[];
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group overflow-hidden border-card-border hover-elevate transition-all duration-300 cursor-pointer"
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
                  >
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
