import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ButtonBase, CardActionArea, Chip } from "@mui/material";
import { AvailableCoffeeOptionName, CoffeeComposition } from "@utils/types";
import {
  formatPriceValue,
  getBasePrice,
  getCoffeeOptionDefaultIngredientsCost,
  getDefaultComposition,
} from "@utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { selectCoffeeOption } from "@state/actions";
import { RootState } from "@state/reducer";

const CoffeeOptionCard = ({
  name,
  image,
  children,
}: {
  name: AvailableCoffeeOptionName;
  image: any;
  children: React.ReactNode;
}): JSX.Element => {
  const selectedCoffeeOptionName = useSelector(
    ({ selectedCoffeeOptionName }: RootState) => selectedCoffeeOptionName
  );
  const dispatch = useDispatch();
  const composition = getDefaultComposition(name);
  const basicCost =
    getBasePrice(name) + getCoffeeOptionDefaultIngredientsCost(composition);
  return (
    <ButtonBase
      focusRipple
      sx={{ textAlign: "left" }}
      onClick={() => dispatch(selectCoffeeOption(name))}
    >
      <Card sx={{ width: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height={"150"}
          image={image}
          sx={{ padding: "1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ minHeight: 100 }}
            variant="body2"
            color="text.secondary"
          >
            {children}
          </Typography>
        </CardContent>

        <CardContent sx={{ padding: "16px" }}>
          <Chip
            sx={{ padding: "4px" }}
            color="primary"
            label={`From £ ${formatPriceValue(basicCost)}`}
          />
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

export default CoffeeOptionCard;
