import { Typography } from "@mui/material";
import { RootState } from "@state/reducer";
import {
  formatPriceValue,
  getCoffeeSummaryText,
  getIngredientsPrice,
} from "@utils/helpers";
import React from "react";
import { useSelector } from "react-redux";
const ReviewAndPayStepContent = (): JSX.Element => {
  const {
    composition,
    selectedCoffeeType,
    selectedMilkType,
    selectedOptionBasePrice,
  } = useSelector((state: RootState) => state);
  const ingridentsPrice = getIngredientsPrice({
    composition,
    selectedCoffeeType,
    selectedMilkType,
  });
  return (
    <Typography
      sx={{ paddingLeft: 1 }}
      gutterBottom
      variant="h6"
      component="div"
    >
      {`Total Price : £${formatPriceValue(
        selectedOptionBasePrice + ingridentsPrice
      )}`}
    </Typography>
  );
};

export default ReviewAndPayStepContent;
