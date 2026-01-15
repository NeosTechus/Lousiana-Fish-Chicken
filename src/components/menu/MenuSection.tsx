import { useState } from "react";
import { MenuCategory } from "@/data/menuData";
import { MenuCard } from "./MenuCard";

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-gradient-gold mb-2">
          {category.name}
        </h2>
        {category.subtitle && (
          <p className="text-muted-foreground text-lg md:text-2xl font-semibold">
            {category.subtitle}
          </p>
        )}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {category.items.map((item) => {
          let imageUrl: string | undefined = undefined;
          // German Chocolate Cake (id 45)
          if (item.id === 45) {
            imageUrl = `/images/pictures/37.jpg`;
          } else
            // Strawberry Cake (id 44)
            if (item.id === 44) {
              imageUrl = `/images/pictures/36.jpg`;
            } else
              // Chocolate Cake (id 43)
              if (item.id === 43) {
                imageUrl = `/images/pictures/35.jpg`;
              } else
                // Plain Cheesecake (id 42)
                if (item.id === 42) {
                  imageUrl = `/images/pictures/34.jpg`;
                } else
                  // Oreo Cake (id 46)
                  if (item.id === 46) {
                    imageUrl = `/images/pictures/38.jpg`;
                  } else
                    // Caramel Cake (id 47)
                    if (item.id === 47) {
                      imageUrl = `/images/pictures/39.jpg`;
                    } else
                      // 4pc Mozzarella Sticks (id 40)
                      if (item.id === 40) {
                        imageUrl = `/images/pictures/33.jpg`;
                      } else if (item.id >= 1 && item.id <= 32) {
                        imageUrl = `/images/pictures/${item.id}.jpg`;
                      } else if (item.id === 34) {
                        imageUrl = `/images/pictures/4.jpg`;
                      } else if ([33, 37].includes(item.id)) {
                        imageUrl = `/images/pictures/1.jpg`;
                      } else if (item.id === 39) {
                        imageUrl = `/images/pictures/8.jpg`;
                      } else if (item.id === 36) {
                        imageUrl = `/images/pictures/64.jpg`;
                      } else if (item.id === 35 || item.id === 41) {
                        imageUrl = `/images/pictures/6.jpg`;
                      } else if (item.id === 68) {
                        imageUrl = `/images/pictures/61.jpg`;
                      } else if (item.id === 69) {
                        imageUrl = `/images/pictures/drinks.jpg`;
                      } else if (item.id === 70) {
                        imageUrl = undefined;
                      } else if (item.id === 48) {
                        imageUrl = `/images/pictures/40.jpg`;
                      } else if (item.id === 49) {
                        imageUrl = `/images/pictures/41.jpg`;
                      } else if (item.id === 50) {
                        imageUrl = `/images/pictures/42.jpg`;
                      } else if (item.id === 51) {
                        imageUrl = `/images/pictures/43.jpg`;
                      } else if (item.id === 52) {
                        imageUrl = `/images/pictures/62.jpg`;
                      } else if (item.id === 53) {
                        imageUrl = `/images/pictures/45.jpg`;
                      } else if (item.id === 54) {
                        imageUrl = `/images/pictures/46.jpg`;
                      } else if (item.id === 55) {
                        imageUrl = `/images/pictures/47.jpg`;
                      } else if (item.id === 56) {
                        imageUrl = `/images/pictures/48.jpg`;
                      } else if (item.id === 57) {
                        imageUrl = `/images/pictures/49.jpg`;
                      } else if (item.id === 58) {
                        imageUrl = `/images/pictures/50.jpg`;
                      } else if (item.id === 59) {
                        imageUrl = `/images/pictures/51.jpg`;
                      } else if (item.id === 60) {
                        imageUrl = `/images/pictures/52.jpg`;
                      } else if (item.id === 61) {
                        imageUrl = `/images/pictures/53.jpg`;
                      } else if (item.id === 62) {
                        imageUrl = `/images/pictures/54.jpg`;
                      } else if (item.id === 63) {
                        imageUrl = `/images/pictures/55.jpg`;
                      } else if (item.id === 64) {
                        imageUrl = `/images/pictures/56.jpg`;
                      } else if (item.id === 65) {
                        imageUrl = `/images/pictures/57.jpg`;
                      } else if (item.id === 66) {
                        imageUrl = `/images/pictures/58.jpg`;
                      } else if (item.id === 67) {
                        imageUrl = `/images/pictures/59.jpg`;
                      } else if (item.id === 38) {
                        imageUrl = `/images/pictures/11.jpg`;
                      }
          return (
            <MenuCard
              key={item.id}
              item={item}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </section>
  );
}
