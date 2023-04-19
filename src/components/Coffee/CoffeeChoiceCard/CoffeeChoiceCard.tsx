import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import latte from "@assets/coffee-latte.png";

const CoffeeCardChoice: FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="latte" height="140" image={latte} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Latte
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeeCardChoice;
