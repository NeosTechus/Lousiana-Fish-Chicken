import { cn } from "@/lib/utils";
import { useRef } from "react";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryNav({ categories, activeCategory, onCategoryChange }: CategoryNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto px-4 flex items-center">
        <button
          className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-2xl mr-2"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          &#8592;
        </button>
        <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all font-bold",
                  activeCategory === category
                    ? "bg-gradient-gold text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-2xl ml-2"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
