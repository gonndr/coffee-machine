import React from "react";

import { availableCoffeeOptions } from "@utils/constants";
import CoffeeOptionCard from "./CoffeeOptionCard/CoffeeOptionCard";
import { Grid } from "@mui/material";
const CoffeeSelectionStepContent = (): JSX.Element => {
  return (
    <Grid container spacing={2} justifyContent="space-between">
      {availableCoffeeOptions.map(({ name, description, image }, index) => (
        <Grid item key={index}>
          <CoffeeOptionCard name={name} image={image}>
            {description}
          </CoffeeOptionCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default CoffeeSelectionStepContent;
