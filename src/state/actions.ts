import { CoffeeType, MilkType } from "@utils/types";
import {
  GO_TO_FIRST_STEP,
  GO_TO_NEXT_STEP,
  GO_TO_PREVIOUS_STEP,
  SELECT_COFFEE_OPTION,
  SELECT_COFFEE_TYPE,
  SELECT_MILK_TYPE,
} from "./constants";

type SelectCoffeeOption = (payload: string) => {
  type: typeof SELECT_COFFEE_OPTION;
  payload: string;
};
type SelectCoffeeType = (payload: CoffeeType) => {
  type: typeof SELECT_COFFEE_TYPE;
  payload: CoffeeType;
};
type SelectMilkType = (payload: MilkType) => {
  type: typeof SELECT_MILK_TYPE;
  payload: MilkType;
};
type GoToPreviousStep = () => {
  type: typeof GO_TO_PREVIOUS_STEP;
  payload: null;
};
type GoToNextStep = () => {
  type: typeof GO_TO_NEXT_STEP;
  payload: null;
};
type GoToFirstStep = () => {
  type: typeof GO_TO_FIRST_STEP;
  payload: null;
};

export const selectCoffeeOption: SelectCoffeeOption = (payload: string) => ({
  type: SELECT_COFFEE_OPTION,
  payload,
});
export const selectCoffeeType: SelectCoffeeType = (payload: CoffeeType) => ({
  type: SELECT_COFFEE_TYPE,
  payload,
});
export const selectMilkType: SelectMilkType = (payload: MilkType) => ({
  type: SELECT_MILK_TYPE,
  payload,
});
export const goToPreviousStep: GoToPreviousStep = () => ({
  type: GO_TO_PREVIOUS_STEP,
  payload: null,
});
export const goToNextStep: GoToNextStep = () => ({
  type: GO_TO_NEXT_STEP,
  payload: null,
});
export const goFirstStep: GoToFirstStep = () => ({
  type: GO_TO_FIRST_STEP,
  payload: null,
});
