import React, { FC } from "react";
import "@components/App/App.sass";
import { Container, Fab, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import CoffeeSelectionStepper from "@components/Coffee/CoffeeSelectionStepper";

const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <h1 className="title">Good Morning!</h1>
      <CoffeeSelectionStepper />
    </Container>
  );
};

export default App;
