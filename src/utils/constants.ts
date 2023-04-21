import { espresso, flatWhite, mocha } from "@assets/assets";
import {
  AvailableCoffeeOption,
  AvailableCoffeeOptionName,
  CoffeeComposition,
  CoffeeType,
  MilkType,
} from "./types";

export const availableCoffeeTypes: CoffeeType[] = [
  "Filter",
  "Standard",
  "Premium",
];
export const availableMilkTypes: MilkType[] = ["Whole", "Skimmed", "Oat"];

export const basePriceTable = {
  Espresso: 1.5,
  "Flat White": 2.0,
  Mocha: 2.0,
};
export const coffeePriceTable = {
  Filter: 0,
  Standard: 0.3,
  Premium: 0.6,
};
export const milkPriceTable = {
  Whole: 0,
  Skimmed: 0,
  Oat: 0.2,
};
export const chocolatePriceTable = { Standard: 0.2 };

export const compositions: {
  [coffeeOption: string]: CoffeeComposition;
} = {
  Espresso: { shotsOfCoffee: 1 },
  "Flat White": { shotsOfCoffee: 2, shotsOfMilk: 4 },
  Mocha: {
    shotsOfCoffee: 2,
    shotsOfMilk: 2,
    shotsOfChocolate: 1,
  },
};

const espressoCoffeeOption: AvailableCoffeeOption = {
  name: "Espresso",
  description:
    "A concentrated and strong shot of coffee with a thick layer of crema on top. Perfect for a quick pick-me-up or as a base for other coffee drinks.",
  image: espresso,
};
const flatWhiteCoffeeOption: AvailableCoffeeOption = {
  name: "Flat White",
  description:
    "Smooth and velvety milk mixed with a double shot of espresso. The perfect balance of coffee and milk, with a creamy texture that's sure to satisfy.",
  image: flatWhite,
};
const mochaCoffeeOption: AvailableCoffeeOption = {
  name: "Mocha",
  description:
    "A delicious blend of espresso, chocolate, and steamed milk. The perfect indulgence for any chocolate lover, with just the right amount of coffee to keep you going.",
  image: mocha,
};

export const availableCoffeeOptions = [
  espressoCoffeeOption,
  flatWhiteCoffeeOption,
  mochaCoffeeOption,
];
