// --- INGREDIENTS NOTE ---
// Cheeseburger: Mayo, Ketchup, Onion, Lettuce, Tomato, Pickles
// Philly Sandwiches (Chicken Philly, Philly Steak): Onion, Green Pepper, Mayo, Cheese
// Salad (Greek Salad, Grilled Shrimp, Gyro Salad, Grilled Chicken): Lettuce, Red Onion, Olive, Cheese, Banana Pepper, Tomato
// (Source: in-store menu photo, 2026-01-11)
export interface MenuItem {
  id: number;
  name: string;
  prices: { size: string; price: number }[];
  description?: string;
  category: string;
  ingredients?: string[];
  imageUrl?: string;
  options?: string[];
}

export interface MenuCategory {
  name: string;
  subtitle?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Chicken Dinner",
    subtitle: "All Dinners Served with Fries & Can Soda. (Hot, Honey Glaze ,Honey BBQ, Buffalo), Additional Charge for Flavored Wings",
    items: [
      { id: 1, name: "6 Whole Wings", prices: [{ size: "", price: 9.99 }], category: "Chicken Dinner" },
      { id: 2, name: "8 Whole Wings", prices: [{ size: "", price: 11.99 }], category: "Chicken Dinner" },
      { id: 3, name: "10 Whole Wings", prices: [{ size: "", price: 14.99 }], category: "Chicken Dinner" },
      { id: 4, name: "Party Wings", prices: [
        { size: "6pc", price: 8.99 },
        { size: "8pc", price: 10.99 },
        { size: "10pc", price: 11.99 }
      ], category: "Chicken Dinner" },
      { id: 5, name: "15 Party Wings", prices: [{ size: "", price: 15.99 }], category: "Chicken Dinner" },
      { id: 6, name: "Chicken Tenders", prices: [
        { size: "4pc", price: 9.99 },
        { size: "6pc", price: 12.99 }
      ], category: "Chicken Dinner", imageUrl: "/images/pictures/6.jpg" },
      { id: 7, name: "Doritos Nachos", prices: [{ size: "", price: 9.99 }], category: "Chicken Dinner", ingredients: ["Beef Meat", "Cheese", "Lettuce", "Onion", "Tomato", "Jalapeño", "Sour Cream"] },
      { id: 8, name: "Chicken Nuggets", prices: [
        { size: "8pc", price: 7.99 },
        { size: "15pc", price: 9.99 },
        { size: "20pc", price: 11.99 }
      ], category: "Chicken Dinner", imageUrl: "/images/pictures/8.jpg" },
    ],
  },
  {
    name: "Fish Dinner (Southern-Style Fish)",
    subtitle: "Fried",
    items: [
      { id: 9, name: "Catfish Nuggets", prices: [
        { size: "Sm (10pc)", price: 9.99 },
        { size: "Lg (15pc)", price: 11.99 }
      ], category: "Fish Dinner (Southern-Style Fish)", imageUrl: "/images/pictures/9.jpg" },
      { id: 10, name: "Catfish Fillet", prices: [
        { size: "2pc", price: 9.99 },
        { size: "3pc", price: 11.99 },
        { size: "4pc", price: 13.99 }
      ], category: "Fish Dinner (Southern-Style Fish)", imageUrl: "/images/pictures/10.jpg" },
      { id: 11, name: "Tilapia", prices: [
        { size: "2pc", price: 9.99 },
        { size: "3pc", price: 11.99 },
        { size: "4pc", price: 13.99 }
      ], category: "Fish Dinner (Southern-Style Fish)", imageUrl: "/images/pictures/11.jpg" },
      { id: 12, name: "Ocean Perch", prices: [
        { size: "2pc", price: 9.99 },
        { size: "3pc", price: 11.99 },
        { size: "4pc", price: 13.99 }
      ], category: "Fish Dinner (Southern-Style Fish)", imageUrl: "/images/pictures/12.jpg" },
      { id: 13, name: "Jack Fillet", prices: [
        { size: "2pc", price: 9.99 },
        { size: "3pc", price: 11.99 },
        { size: "4pc", price: 13.99 }
      ], category: "Fish Dinner (Southern-Style Fish)", imageUrl: "/images/pictures/13.jpg" },
      { id: 14, name: "Whole Jack", prices: [
        { size: "2pc", price: 9.99 },
        { size: "3pc", price: 11.99 },
        { size: "4pc", price: 13.99 }
      ], category: "Fish Dinner (Southern-Style Fish)", imageUrl: "/images/pictures/14.jpg" },
    ],
  },
  {
    name: "Shrimp Dinner",
    subtitle: "Fried or Grilled",
    items: [
      { id: 15, name: "Jumbo Shrimp", prices: [
        { size: "5pc", price: 9.99 },
        { size: "8pc", price: 12.99 },
        { size: "16pc", price: 19.99 }
      ], category: "Shrimp Dinner", imageUrl: "/images/pictures/15.jpg" },
      { id: 16, name: "Regular Shrimp", prices: [
        { size: "10pc", price: 9.99 },
        { size: "15pc", price: 12.99 },
        { size: "25pc", price: 19.99 }
      ], category: "Shrimp Dinner", imageUrl: "/images/pictures/16.jpg" },
    ],
  },
  {
    name: "Sandwiches",
    subtitle: "Served with Fries & Can Soda || Onion, Green Pepper, Mayo",
    items: [
      { id: 17, name: "Chicken Philly", prices: [{ size: "Small (6in)", price: 9.99 }, { size: "Large (12in)", price: 12.99 }], category: "Sandwiches", ingredients: ["Onions", "Green Pepper", "Cheese", "Mayonnaise"] },
      { id: 18, name: "Philly Steak", prices: [{ size: "Small (6in)", price: 10.99 }, { size: "Large (12in)", price: 13.99 }], category: "Sandwiches", ingredients: ["Onions", "Green Pepper", "Cheese", "Mayonnaise"] },
      { id: 19, name: "Buffalo Chicken Philly", prices: [{ size: "Small (6in)", price: 9.99 }, { size: "Large (12in)", price: 12.99 }], category: "Sandwiches", ingredients: ["Onions", "Green Pepper", "Cheese", "Mayonnaise", "Buffalo Sauce"] },
      { id: 20, name: "Teriyaki Chicken Philly", prices: [{ size: "Small (6in)", price: 9.99 }, { size: "Large (12in)", price: 12.99 }], category: "Sandwiches", ingredients: ["Onions", "Green Pepper", "Cheese", "Mayonnaise", "Teriyaki Sauce"] },
      { id: 21, name: "Grilled Chicken Sandwich", prices: [{ size: "", price: 9.99 }], category: "Sandwiches", ingredients: ["Mayonnaise", "Lettuce", "Onion", "Tomato", "Cheese"] },
      { id: 22, name: "Cheese Burger", prices: [{ size: "Single", price: 7.99 }, { size: "Double", price: 9.99 }], category: "Sandwiches", ingredients: ["Ketchup", "Mayonnaise", "Lettuce", "Onion", "Tomato", "Pickles"] },
      { id: 23, name: "Fish Sandwich", prices: [{ size: "Any Type", price: 9.99 }], category: "Sandwiches", ingredients: ["Lettuce", "Onion", "Tomato", "Pickles", "Tartar Sauce"] },
      { id: 24, name: "Gyro Sandwich", prices: [{ size: "7\" Pita Bread", price: 9.99 }], category: "Sandwiches", ingredients: ["Lettuce", "Onion", "Tomato", "Cucumber Sauce"] },
    ],
  },
  {
    name: "Fish & Chicken Combos",
    subtitle: "Served with Fries & Can Soda",
    items: [
      { id: 25, name: "2 Tilapia & 4 Wings", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 26, name: "1 Catfish Fillet & 4 Wings", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 27, name: "Catfish Nuggets & 4 Wings", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 28, name: "4 Jumbo Shrimp & 4 Wings", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 29, name: "2 Jack Fillet & 4 Wings", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 30, name: "2 Ocean Perch & 2 Tenders", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 31, name: "8 Regular Shrimp & 4 Wings", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
      { id: 32, name: "Catfish Nuggets & 2 Tenders", prices: [{ size: "", price: 14.99 }], category: "Fish & Chicken Combos" },
    ],
  },
  {
    name: "Whole Wings",
    subtitle: "w/Fries & Soda || Extra Wing $1.99 each. Buffalo, Hot, Honey BBQ, Honey Glazed",
    items: [
      { id: 33, name: "Whole Wings", prices: [
        { size: "3 Wings", price: 6.99 },
        { size: "25 Wings", price: 31.99 },
        { size: "4 Wings", price: 8.99 },
        { size: "30 Wings", price: 37.99 },
        { size: "6 Wings", price: 9.99 },
        { size: "35 Wings", price: 43.99 },
        { size: "8 Wings", price: 11.99 },
        { size: "40 Wings", price: 51.99 },
        { size: "10 Wings", price: 14.99 },
        { size: "50 Wings", price: 65.99 },
        { size: "15 Wings", price: 21.99 },
        { size: "75 Wings", price: 89.99 },
        { size: "20 Wings", price: 24.99 },
        { size: "100 Wings", price: 129.99 }
      ], category: "Whole Wings" },
    ],
  },
  {
    name: "Party Wings",
    subtitle: "w/Fries & Soda || Extra Wing $1.99 each. Buffalo, Hot, Honey BBQ, Honey Glazed",
    items: [
      { id: 34, name: "Party Wings", prices: [
        { size: "6 Pcs", price: 8.99 },
        { size: "20 Pcs", price: 19.99 },
        { size: "8 Pcs", price: 10.99 },
        { size: "30 Pcs", price: 26.99 },
        { size: "10 Pcs", price: 11.99 },
        { size: "50 Pcs", price: 45.99 },
        { size: "15 Pcs", price: 15.99 },
        { size: "100 Pcs", price: 89.99 }
      ], category: "Party Wings" },
    ],
  },
  {
    name: "Chicken Tenders",
    items: [
      { id: 35, name: "Chicken Tenders (Regular)", prices: [
        { size: "4 Pcs", price: 9.99 },
        { size: "6 Pcs", price: 12.99 },
        { size: "10 Pcs", price: 18.99 },
        { size: "20 Pcs", price: 29.99 }
      ], category: "Chicken Tenders" },
      { id: 36, name: "Chicken Tenders (Flavored)", prices: [
        { size: "4 Pcs", price: 11.99 },
        { size: "6 Pcs", price: 14.99 },
        { size: "10 Pcs", price: 19.99 },
        { size: "20 Pcs", price: 33.99 }
      ], category: "Chicken Tenders" },
    ],
  },
  {
    name: "Kids Meal",
    subtitle: "$6.99 - Comes with Fries & Drink",
    items: [
      { id: 37, name: "2pc Chicken Wings", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
      { id: 38, name: "1pc Fish (Any Kind)", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
      { id: 39, name: "6pc Chick. Nuggets", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
      { id: 40, name: "6pc Mozzarella Sticks", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
      { id: 41, name: "2pc Chicken Tenders", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
      { id: 42, name: "Pizza Pie", prices: [{ size: "", price: 6.99 }], category: "Kids Meal", imageUrl: "/images/pictures/46.jpg" },
    ],
  },
  {
    name: "Desserts",
    subtitle: "Selections may vary",
    items: [
      { id: 43, name: "Plain Cheesecake", prices: [{ size: "", price: 3.99 }], category: "Desserts", imageUrl: "/images/pictures/34.jpg" },
      { id: 44, name: "Chocolate Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts", imageUrl: "/images/pictures/35.jpg" },
      { id: 45, name: "Strawberry Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts", imageUrl: "/images/pictures/71.jpg" },
      { id: 46, name: "German Chocolate Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts", imageUrl: "/images/pictures/72.jpg" },
      { id: 47, name: "Oreo Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts", imageUrl: "/images/pictures/38.jpg" },
      { id: 48, name: "Caramel Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts", imageUrl: "/images/pictures/39.jpg" },
    ],
  },
  {
    name: "Side Orders",
    items: [
      { id: 48, name: "Fries", prices: [{ size: "Small", price: 3.99 }, { size: "Large", price: 4.99 }], category: "Side Orders" },
      { id: 49, name: "Cheese Fries", prices: [{ size: "Small", price: 4.99 }, { size: "Large", price: 6.99 }], category: "Side Orders", imageUrl: "/images/pictures/73.jpg" },
      { id: 50, name: "Onion Rings", prices: [{ size: "(8)", price: 3.99 }, { size: "(15)", price: 5.99 }], category: "Side Orders" },
      { id: 51, name: "Zucchini Sticks", prices: [{ size: "(8)", price: 3.99 }, { size: "(14)", price: 5.99 }], category: "Side Orders" },
      { id: 52, name: "Breaded Mushrooms", prices: [{ size: "(8)", price: 3.99 }, { size: "(14)", price: 5.99 }], category: "Side Orders" },
      { id: 53, name: "Jalapeño Poppers", prices: [{ size: "(4)", price: 4.99 }, { size: "(8)", price: 6.99 }], category: "Side Orders" },
      { id: 54, name: "Pizza Pie", prices: [
        { size: "(1)", price: 3.99 },
        { size: "(2)", price: 5.99 }
      ], category: "Side Orders", ingredients: ["Beef", "Cheese", "Green Pepper"] },
      { id: 55, name: "Breaded Fried Cauliflower", prices: [{ size: "Small", price: 3.99 }, { size: "Large", price: 5.99 }], category: "Side Orders", imageUrl: "/images/pictures/63.jpg" },
      { id: 56, name: "Fried Okra", prices: [{ size: "Small", price: 3.99 }, { size: "Large", price: 5.99 }], category: "Side Orders" },
      { id: 57, name: "Toasted Ravioli (Beef)", prices: [{ size: "(6)", price: 4.99 }, { size: "(8)", price: 5.99 }], category: "Side Orders" },
    ],
  },
  {
    name: "Family Size Fish",
    items: [
      { id: 58, name: "Tilapia", prices: [{ size: "12 Pcs", price: 29.99 }, { size: "20 Pcs", price: 44.99 }], category: "Family Size Fish" },
      { id: 59, name: "Ocean Perch", prices: [{ size: "12 Pcs", price: 29.99 }, { size: "20 Pcs", price: 44.99 }], category: "Family Size Fish" },
      { id: 60, name: "Whole Jack", prices: [{ size: "12 Pcs", price: 29.99 }, { size: "20 Pcs", price: 44.99 }], category: "Family Size Fish" },
      { id: 61, name: "Jack Fillet", prices: [{ size: "12 Pcs", price: 29.99 }, { size: "20 Pcs", price: 47.99 }], category: "Family Size Fish", imageUrl: "/images/pictures/67.jpg" },
      { id: 62, name: "Catfish Fillet", prices: [{ size: "12 Pcs", price: 32.99 }, { size: "20 Pcs", price: 47.99 }], category: "Family Size Fish" },
    ],
  },
  {
    name: "Salad",
    subtitle: "Served with Ranch or Italian Dressing. Comes with Lettuce, Onions, Tomatoes, Cheese and Banana Peppers",
    items: [
      { id: 63, name: "Greek Salad", prices: [{ size: "", price: 6.99 }], category: "Salad", imageUrl: "/images/pictures/56.jpg" },
      { id: 64, name: "Grilled Shrimp Salad", prices: [{ size: "", price: 10.99 }], category: "Salad", imageUrl: "/images/pictures/70.jpg" },
      { id: 65, name: "Gyro Salad", prices: [{ size: "", price: 10.99 }], category: "Salad", imageUrl: "/images/pictures/69.jpg" },
      { id: 66, name: "Grilled Chicken Salad", prices: [{ size: "", price: 10.99 }], category: "Salad", imageUrl: "/images/pictures/66.jpg" },
    ],
  },
  {
    name: "Create Your Own Fish & Chicken Combo",
    subtitle: "Pick 2 Different Items - Served with Fries and Can Soda. $15.99",
    items: [
      {
        id: 68,
        name: "Create Your Combo",
        prices: [
          { size: "Combo", price: 15.99 }
        ],
        category: "Create Your Own Fish & Chicken Combo",
        description: undefined,
      }
    ],
  },
  {
    name: "Soft Drinks (12 oz Cans)",
    subtitle: "Day’s Gourmet Sodas, Pepsi Products, and Bottled Water",
    items: [
      {
        id: 69,
        name: "Soft Drinks",
        prices: [],
        category: "Drinks",
        imageUrl: "/images/pictures/drinks.jpg",
        options: [
          "Lemon Lime",
          "Root Beer",
          "Blue Pop",
          "Watermelon",
          "Orange",
          "Cola",
          "Grape",
          "Fruit Punch",
          "Cream Soda",
          "Strawberry",
          "Pineapple",
          "Black Cherry",
          "Peach",
          "Pepsi",
          "Diet Pepsi",
          "Purified Water"
        ],
        description: "Lemon Lime, Root Beer, Blue Pop, Watermelon, Orange, Cola, Grape, Fruit Punch, Cream Soda, Strawberry, Pineapple, Black Cherry, Peach, Pepsi, Diet Pepsi, Purified Water",
      }
    ]
  }
];

export const restaurantInfo = {
  name: "Louisiana Fish, Chicken, Shrimp & Grill",
  tagline: "Since 2008 • Original Recipe",
  address: "3354 S. Jefferson Ave",
  city: "St. Louis, MO 63118",
  phone: "314-680-0000",
  hours: "7 Days a Week | 11am - 10pm",
  deliveryApps: ["GrubHub", "Postmates", "DoorDash"],
};
