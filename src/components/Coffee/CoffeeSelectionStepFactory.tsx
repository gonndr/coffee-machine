import React from "react";
import { RootState } from "@state/reducer";
import { useSelector } from "react-redux";
import CoffeeCustomisationStepContent from "./CoffeeCustomisationStepContent";
import CoffeeSelectionStepContent from "./CoffeeSelectionStepContent";
import ReviewAndPayStepContent from "./ReviewAndPayStepContent";

const CoffeeSelectionStepFactory = ({
  type,
}: {
  type: string;
}): JSX.Element => {
  const activeStep = useSelector(({ activeStep }: RootState) => activeStep);
  switch (type) {
    case "selection":
    default:
      return <CoffeeSelectionStepContent />;
    case "customisation":
      return <CoffeeCustomisationStepContent />;
    case "payment":
      return <ReviewAndPayStepContent />;
  }
};

export default CoffeeSelectionStepFactory;
