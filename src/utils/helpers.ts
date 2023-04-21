import {
  basePriceTable,
  chocolatePriceTable,
  coffeePriceTable,
  compositions,
  milkPriceTable,
} from "./constants";
import {
  AvailableCoffeeOptionName,
  CoffeeComposition,
  CoffeeType,
  MilkType,
} from "./types";

export const formatPriceValue = (value: number) =>
  value.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const getBasePrice = (coffeeOption: AvailableCoffeeOptionName) =>
  basePriceTable[coffeeOption];
export const getDefaultComposition = (
  coffeeOption: AvailableCoffeeOptionName
) => compositions[coffeeOption];

export const getCoffeePrice = (type: CoffeeType = "Filter") =>
  coffeePriceTable[type];
export const getMilkPrice = (type: MilkType = "Whole") => milkPriceTable[type];
export const getChocolatePrice = () => chocolatePriceTable.Standard;

export const getCoffeeOptionDefaultIngredientsCost = ({
  shotsOfCoffee = 0,
  shotsOfMilk = 0,
  shotsOfChocolate = 0,
}: CoffeeComposition) =>
  shotsOfCoffee * getCoffeePrice() +
  shotsOfMilk * getMilkPrice() +
  shotsOfChocolate * getChocolatePrice();

export const getIngredientsPrice = ({
  composition: { shotsOfCoffee = 0, shotsOfMilk = 0, shotsOfChocolate = 0 },
  selectedCoffeeType = "Filter",
  selectedMilkType = "Whole",
}: {
  composition: CoffeeComposition;
  selectedCoffeeType?: CoffeeType;
  selectedMilkType?: MilkType;
}) =>
  shotsOfCoffee * getCoffeePrice(selectedCoffeeType) +
  shotsOfMilk * getMilkPrice(selectedMilkType) +
  shotsOfChocolate * getChocolatePrice();

export const getCoffeeSummaryText = ({
  composition,
  selectedCoffeeType,
  selectedMilkType,
}: {
  composition: CoffeeComposition;
  selectedCoffeeType: CoffeeType;
  selectedMilkType: MilkType;
}) => {
  const { shotsOfCoffee, shotsOfMilk, shotsOfChocolate } = composition;
  const shotsOfCoffeeText = `${shotsOfCoffee} shot(s) of ${selectedCoffeeType} Coffee`;
  const shotsOfMilkText = `; ${shotsOfMilk} shot(s) of ${selectedMilkType} Milk`;
  const shotsOfChocolateText = `; ${shotsOfChocolate} shot(s) of Chocolate`;
  return `${shotsOfCoffeeText}${shotsOfMilk ? shotsOfMilkText : ""}${
    shotsOfChocolate ? shotsOfChocolateText : ""
  }`;
};
