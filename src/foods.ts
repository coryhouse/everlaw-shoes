export type Food = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  tags: Array<FoodTag>;
};

export const foodTags = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Appetizer",
  "Spicy",
  "Vegetarian",
  "Alcoholic",
] as const;

export type FoodTag = typeof foodTags[number];
