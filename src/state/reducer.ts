import { basePriceTable } from "./../utils/constants";
import { availableCoffeeOptions } from "@utils/constants";
import { CoffeeComposition, CoffeeType, MilkType } from "./../utils/types";
import { AnyAction } from "@reduxjs/toolkit";
import { AvailableCoffeeOptionName } from "@utils/types";
import {
  GO_TO_FIRST_STEP,
  GO_TO_NEXT_STEP,
  GO_TO_PREVIOUS_STEP,
  SELECT_COFFEE_OPTION,
  SELECT_COFFEE_TYPE,
  SELECT_MILK_TYPE,
} from "./constants";
import {
  getBasePrice,
  getChocolatePrice,
  getCoffeeOptionDefaultIngredientsCost,
  getCoffeePrice,
  getDefaultComposition,
  getMilkPrice,
} from "@utils/helpers";

export type RootState = {
  activeStep: number;
  selectedCoffeeOptionName: AvailableCoffeeOptionName | null;
  selectedCoffeeType: CoffeeType;
  selectedMilkType: MilkType;
  composition: CoffeeComposition;
  selectedOptionBasePrice: number;
};

const initialState: RootState = {
  activeStep: 0,
  selectedCoffeeOptionName: null,
  selectedCoffeeType: "Filter",
  selectedMilkType: "Whole",
  composition: {},
  selectedOptionBasePrice: 0,
};

export default (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SELECT_COFFEE_OPTION:
      const composition = getDefaultComposition(payload);
      const selectedOptionBasePrice = getBasePrice(payload);

      return {
        ...initialState,
        activeStep: 1,
        selectedCoffeeOptionName: payload,
        composition,
        selectedOptionBasePrice,
      };
    case SELECT_COFFEE_TYPE:
      return {
        ...state,
        selectedCoffeeType: payload,
      };
    case SELECT_MILK_TYPE:
      return {
        ...state,
        selectedMilkType: payload,
      };
    case GO_TO_PREVIOUS_STEP:
      return state.activeStep === 1
        ? initialState
        : {
            ...state,
            activeStep: state.activeStep - 1,
            selectedCoffeeOptionName: state.selectedCoffeeOptionName,
          };
    case GO_TO_NEXT_STEP:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case GO_TO_FIRST_STEP:
      return initialState;
    default:
      return state;
  }
};
