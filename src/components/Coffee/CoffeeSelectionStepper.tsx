import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { RootState } from "@state/reducer";
import { useDispatch, useSelector } from "react-redux";
import { goFirstStep, goToNextStep, goToPreviousStep } from "@state/actions";
import CoffeeSelectionStepFactory from "./CoffeeSelectionStepFactory";

const steps = [
  {
    label: "Select Your Coffee",
    type: "selection",
  },
  {
    label: "Customise Your Selection",
    type: "customisation",
  },
  {
    label: "Review And Pay",
    type: "payment",
  },
];

const CoffeeSelectionStepper = (): JSX.Element => {
  const dispatch = useDispatch();
  const { activeStep, selectedCoffeeOptionName } = useSelector(
    (state: RootState) => state
  );

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, type }, index) => (
          <Step key={label}>
            <StepLabel>
              <h1>
                {!!selectedCoffeeOptionName && index === 0
                  ? `Selected: ${selectedCoffeeOptionName}`
                  : label}
              </h1>
            </StepLabel>
            <StepContent>
              <CoffeeSelectionStepFactory type={type} />

              {index !== 0 && (
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => dispatch(goToNextStep())}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Pay" : "Continue"}
                    </Button>

                    <Button
                      onClick={() => dispatch(goToPreviousStep())}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            Payment successful! Enjoy your {selectedCoffeeOptionName}
          </Typography>
          <Button onClick={() => dispatch(goFirstStep())} sx={{ mt: 1, mr: 1 }}>
            Reorder
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default CoffeeSelectionStepper;
