import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { selectCoffeeType, selectMilkType } from "@state/actions";
import { RootState } from "@state/reducer";
import { availableCoffeeTypes, availableMilkTypes } from "@utils/constants";
import { formatPriceValue, getCoffeePrice, getMilkPrice } from "@utils/helpers";
import { CoffeeType, MilkType } from "@utils/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const IngredientSelectForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedCoffeeOptionName, selectedCoffeeType, selectedMilkType } =
    useSelector((state: RootState) => state);
  const hasMilk = selectedCoffeeOptionName !== "Espresso";

  const onCoffeeTypeSelectionChange = (event: SelectChangeEvent) => {
    dispatch(selectCoffeeType(event.target.value as CoffeeType));
  };
  const onMilkTypeSelectionChange = (event: SelectChangeEvent) => {
    dispatch(selectMilkType(event.target.value as MilkType));
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Coffee Type</InputLabel>
        <Select
          value={selectedCoffeeType}
          label="Coffee Type"
          onChange={onCoffeeTypeSelectionChange}
          autoWidth
        >
          {availableCoffeeTypes.map((option) => {
            const shotPrice = getCoffeePrice(option);
            const addedCost =
              shotPrice > 0 ? ` +£${formatPriceValue(shotPrice)}/shot` : "";
            return (
              <MenuItem key={option} value={option}>
                {`${option}${addedCost}`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {hasMilk && (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Milk Type</InputLabel>
          <Select
            value={selectedMilkType}
            label="Milk Type"
            onChange={onMilkTypeSelectionChange}
            autoWidth
          >
            {availableMilkTypes.map((option) => {
              const shotPrice = getMilkPrice(option);
              const addedCost =
                shotPrice > 0 ? ` +£${formatPriceValue(shotPrice)}/shot` : "";
              return (
                <MenuItem key={option} value={option}>
                  {`${option}${addedCost}`}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default IngredientSelectForm;
