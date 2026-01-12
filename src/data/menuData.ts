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
      { id: 4, name: "Party Wings", prices: [{ size: "", price: 14.99 }], category: "Chicken Dinner" },
      { id: 5, name: "15 Party Wings", prices: [{ size: "", price: 15.99 }], category: "Chicken Dinner" },
      { id: 6, name: "Chicken Tenders", prices: [{ size: "3pc", price: 8.99 }, { size: "5pc", price: 10.99 }, { size: "7pc", price: 11.99 }], category: "Chicken Dinner" },
      { id: 7, name: "Doritos Nachos", prices: [{ size: "", price: 9.99 }], category: "Chicken Dinner" },
      { id: 8, name: "Chicken Nuggets", prices: [{ size: "8pc", price: 9.99 }, { size: "12pc", price: 12.99 }, { size: "20pc", price: 11.99 }], category: "Chicken Dinner" },
    ],
  },
  {
    name: "Fish Dinner",
    subtitle: "All Dinners Served with Fries & Can Soda",
    items: [
      { id: 9, name: "Catfish Nuggets", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 11.99 }], category: "Fish Dinner" },
      { id: 10, name: "Catfish Fillet", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 11.99 }, { size: "XL", price: 13.99 }], category: "Fish Dinner" },
      { id: 11, name: "Tilapia", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 11.99 }, { size: "XL", price: 13.99 }], category: "Fish Dinner" },
      { id: 12, name: "Ocean Perch", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 11.99 }, { size: "XL", price: 13.99 }], category: "Fish Dinner" },
      { id: 13, name: "Jack Fillet", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 11.99 }, { size: "XL", price: 13.99 }], category: "Fish Dinner" },
      { id: 14, name: "Whole Jack", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 11.99 }, { size: "XL", price: 13.99 }], category: "Fish Dinner" },
      { id: 15, name: "Jumbo Shrimp", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 12.99 }, { size: "XL", price: 19.99 }], category: "Fish Dinner" },
      { id: 16, name: "Regular Shrimp", prices: [{ size: "", price: 9.99 }, { size: "Lg", price: 12.99 }, { size: "XL", price: 19.99 }], category: "Fish Dinner" },
    ],
  },
  {
    name: "Sandwiches",
    subtitle: "Served with Fries & Can Soda",
    items: [
      { id: 17, name: "Chicken Philly", prices: [{ size: "Small (6in)", price: 9.99 }, { size: "Large (12in)", price: 12.99 }], category: "Sandwiches", ingredients: ["Onion", "Green Pepper", "Mayo", "Cheese"] },
      { id: 18, name: "Philly Steak", prices: [{ size: "Small (6in)", price: 10.99 }, { size: "Large (12in)", price: 13.99 }], category: "Sandwiches", ingredients: ["Onion", "Green Pepper", "Mayo", "Cheese"] },
      { id: 19, name: "Buffalo Chicken Philly", prices: [{ size: "Small (6in)", price: 9.99 }, { size: "Large (12in)", price: 12.99 }], category: "Sandwiches" },
      { id: 20, name: "Teriyaki Chicken Philly", prices: [{ size: "Small (6in)", price: 9.99 }, { size: "Large (12in)", price: 12.99 }], category: "Sandwiches" },
      { id: 21, name: "Grilled Chicken Sandwich", prices: [{ size: "", price: 9.99 }], category: "Sandwiches" },
      { id: 22, name: "Cheese Burger", prices: [{ size: "Single", price: 7.99 }, { size: "Double", price: 9.99 }], category: "Sandwiches", ingredients: ["Mayo", "Ketchup", "Onion", "Lettuce", "Tomato", "Pickles"] },
      { id: 23, name: "Fish Sandwich", prices: [{ size: "", price: 9.99 }], category: "Sandwiches" },
      { id: 24, name: "Gyro Sandwich", prices: [{ size: "", price: 9.99 }], description: "+ Pita Bread $9.99", category: "Sandwiches" },
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
    subtitle: "w/Fries & Soda",
    items: [
      { id: 33, name: "Wings", prices: [
        { size: "25 Wings", price: 31.99 },
        { size: "30 Wings", price: 37.99 },
        { size: "35 Wings", price: 43.99 },
        { size: "40 Wings", price: 51.99 },
        { size: "50 Wings", price: 56.99 },
        { size: "75 Wings", price: 85.99 },
        { size: "100 Wings", price: 129.99 }
      ], category: "Whole Wings" },
    ],
  },
  {
    name: "Party Wings",
    subtitle: "w/Fries & Soda",
    items: [
      { id: 34, name: "Party Wings", prices: [
        { size: "20 Pcs", price: 19.99 },
        { size: "30 Pcs", price: 26.99 },
        { size: "50 Pcs", price: 45.99 },
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
      { id: 40, name: "4pc Mozzarella Sticks", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
      { id: 41, name: "2pc Chicken Tenders", prices: [{ size: "", price: 6.99 }], category: "Kids Meal" },
    ],
  },
  {
    name: "Desserts",
    subtitle: "Selections may vary",
    items: [
      { id: 42, name: "Cheesecake", prices: [{ size: "", price: 3.99 }], category: "Desserts" },
      { id: 43, name: "Chocolate Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts" },
      { id: 44, name: "Strawberry Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts" },
      { id: 45, name: "German Chocolate Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts" },
      { id: 46, name: "Oreo Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts" },
      { id: 47, name: "Caramel Cake", prices: [{ size: "", price: 3.99 }], category: "Desserts" },
    ],
  },
  {
    name: "Side Orders",
    items: [
      { id: 48, name: "Fries", prices: [{ size: "Small", price: 3.99 }, { size: "Large", price: 4.99 }], category: "Side Orders" },
      { id: 49, name: "Cheese Fries", prices: [{ size: "Small", price: 4.99 }, { size: "Large", price: 6.99 }], category: "Side Orders" },
      { id: 50, name: "Onion Rings", prices: [{ size: "(8)", price: 3.99 }, { size: "(15)", price: 5.99 }], category: "Side Orders" },
      { id: 51, name: "Zucchini Sticks", prices: [{ size: "(8)", price: 3.99 }, { size: "(14)", price: 5.99 }], category: "Side Orders" },
      { id: 52, name: "Mushrooms", prices: [{ size: "(8)", price: 3.99 }, { size: "(14)", price: 5.99 }], category: "Side Orders" },
      { id: 53, name: "Jalapeño Poppers", prices: [{ size: "(4)", price: 4.99 }, { size: "(8)", price: 6.99 }], category: "Side Orders" },
      { id: 54, name: "Pizza Pie", prices: [{ size: "(1)", price: 3.99 }, { size: "(2)", price: 5.99 }], category: "Side Orders" },
      { id: 55, name: "Fried Cauliflower", prices: [{ size: "Small", price: 3.99 }, { size: "Large", price: 5.99 }], category: "Side Orders" },
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
      { id: 61, name: "Jack Fillet", prices: [{ size: "12 Pcs", price: 29.99 }, { size: "20 Pcs", price: 47.99 }], category: "Family Size Fish" },
      { id: 62, name: "Catfish Fillet", prices: [{ size: "12 Pcs", price: 32.99 }, { size: "20 Pcs", price: 47.99 }], category: "Family Size Fish" },
      { id: 63, name: "Catfish Nuggets", prices: [{ size: "15 Pcs", price: 32.99 }, { size: "20 Pcs", price: 47.99 }], category: "Family Size Fish" },
    ],
  },
  {
    name: "Salad",
    subtitle: "Served with Ranch or Italian Dressing. Comes with Lettuce, Onions, Tomatoes, Cheese and Banana Peppers",
    items: [
      { id: 64, name: "Greek Salad", prices: [{ size: "", price: 6.99 }], category: "Salad", ingredients: ["Lettuce", "Red Onion", "Olive", "Cheese", "Banana Pepper", "Tomato"] },
      { id: 65, name: "Grilled Shrimp", prices: [{ size: "", price: 10.99 }], category: "Salad", ingredients: ["Lettuce", "Red Onion", "Olive", "Cheese", "Banana Pepper", "Tomato"] },
      { id: 66, name: "Gyro Salad", prices: [{ size: "", price: 10.99 }], category: "Salad", ingredients: ["Lettuce", "Red Onion", "Olive", "Cheese", "Banana Pepper", "Tomato"] },
      { id: 67, name: "Grilled Chicken", prices: [{ size: "", price: 10.99 }], category: "Salad", ingredients: ["Lettuce", "Red Onion", "Olive", "Cheese", "Banana Pepper", "Tomato"] },
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
        description: "Choose any 2 different items: 2 Catfish Fillet, 2 Tilapia, 2 Ocean Perch, 2 Whole Jack, 2 Jack Fillet, 2 Chicken Tenders, 4 Whole Wings, 4 Jumbo Shrimp, 8 Regular Shrimp, Catfish Nuggets, 8 Chicken Nuggets. Includes fries and can soda."
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
