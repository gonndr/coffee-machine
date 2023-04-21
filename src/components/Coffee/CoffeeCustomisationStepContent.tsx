import { Box, Typography } from "@mui/material";
import { RootState } from "@state/reducer";
import {
  formatPriceValue,
  getCoffeeSummaryText,
  getIngredientsPrice,
} from "@utils/helpers";
import React from "react";
import { useSelector } from "react-redux";
import IngredientSelectForm from "./IngredientSelectForm/IngredientSelectForm";
const CoffeeCustomisationStepContent = (): JSX.Element => {
  const {
    selectedCoffeeOptionName,
    composition,
    selectedCoffeeType,
    selectedMilkType,
    selectedOptionBasePrice,
  } = useSelector((state: RootState) => state);
  const ingridentsSummaryText = getCoffeeSummaryText({
    composition,
    selectedCoffeeType,
    selectedMilkType,
  });
  const ingridentsPrice = getIngredientsPrice({
    composition,
    selectedCoffeeType,
    selectedMilkType,
  });
  return (
    <>
      <IngredientSelectForm />
      <Typography
        sx={{ paddingLeft: 1 }}
        gutterBottom
        variant="h6"
        component="div"
      >
        Base cost for{" "}
        {`${selectedCoffeeOptionName} : £${formatPriceValue(
          selectedOptionBasePrice
        )}`}
      </Typography>
      <Typography
        sx={{ paddingLeft: 1 }}
        gutterBottom
        variant="h6"
        component="div"
      >
        {`Cost of Ingredients (${ingridentsSummaryText}) : £${formatPriceValue(
          ingridentsPrice
        )}`}
      </Typography>
    </>
  );
};

export default CoffeeCustomisationStepContent;
