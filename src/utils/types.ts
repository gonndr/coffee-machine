export type CoffeeType = "Filter" | "Standard" | "Premium";
export type MilkType = "Whole" | "Skimmed" | "Oat";
export type ChocolateTypte = "Standard";
export type AvailableCoffeeOptionName = "Espresso" | "Flat White" | "Mocha";

export type CoffeeComposition = {
  shotsOfCoffee?: number;
  shotsOfMilk?: number;
  shotsOfChocolate?: number;
};

export type AvailableCoffeeOption = {
  name: AvailableCoffeeOptionName;
  description: string;
  image: any;
};
