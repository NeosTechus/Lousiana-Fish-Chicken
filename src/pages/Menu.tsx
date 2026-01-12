import { useState, useRef, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { MenuSection } from "@/components/menu/MenuSection";
import { CategoryNav } from "@/components/menu/CategoryNav";
import { menuCategories } from "@/data/menuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const element = sectionRefs.current[category];
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 160;
      let current = menuCategories[0].name;

      menuCategories.forEach((category) => {
        const element = sectionRefs.current[category.name];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            current = category.name;
          }
        }
      });

      setActiveCategory(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-card py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Menu</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Fresh fried chicken and fish dinners, sandwiches, combos, and more. 
            All served with love.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <CategoryNav
        categories={menuCategories.map((c) => c.name)}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {menuCategories.map((category) => (
          <div
            key={category.name}
            ref={(el) => (sectionRefs.current[category.name] = el)}
          >
            <MenuSection category={category} />
          </div>
        ))}
      </div>
    </Layout>
  );
}
