import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import "@components/App/App.sass";

import twitterIcon from "@assets/twitter.svg";
import Page1 from "@components/routes/Page1";
import Page2 from "@components/routes/Page1";
import { Container, Fab, Grid } from "@mui/material";
import CoffeeCardChoice from "@components/Coffee/CoffeeChoiceCard/CoffeeChoiceCard";

const App: FC = () => {
  return (
    <Container maxWidth="lg">
      <h1 className="title">Good Morning!</h1>
      <Fab variant="extended">Get my coffee!</Fab>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <CoffeeCardChoice />
        </Grid>
        <Grid item xs={2}>
          <CoffeeCardChoice />
        </Grid>
        <Grid item xs={2}>
          <CoffeeCardChoice />
        </Grid>
      </Grid>

      {/* <Router>
        <nav>
          <ul>
            <li>
              <Link to="/Page1">Page1 - Env</Link>
            </li>
            <li>
              <Link to="/Page2">Page2 - Counter</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
        </Routes>
      </Router> */}
    </Container>
  );
};

export default App;
