import React, { FC, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Slider,
  styled,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  SliderBlock: {
    padding: "10px",
  },
});

const RedSlider = styled(Slider)({
  color: "#FF0000",
});

const GreenSlider = styled(Slider)({
  color: "#00FF00",
});

const BlueSlider = styled(Slider)({
  color: "#0000FF",
});

export const Main: FC = () => {
  const classes = useStyles();
  const [red, setRed] = useState<number | Array<number>>(0);
  const [green, setGreen] = useState<number | Array<number>>(0);
  const [blue, setBlue] = useState<number | Array<number>>(0);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item alignSelf="center">
        <Typography variant="h3">Arduino RGB Controller</Typography>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                R: {red}
              </Grid>
              <Grid item xs={4}>
                G: {green}
              </Grid>
              <Grid item xs={4}>
                B: {blue}
              </Grid>
            </Grid>
            <div className={classes.SliderBlock}>
              <RedSlider
                aria-label="Red"
                value={red}
                max={255}
                onChange={(e, val) => setRed(val)}
              />
            </div>
            <div className={classes.SliderBlock}>
              <GreenSlider
                aria-label="Green"
                value={green}
                max={255}
                onChange={(e, val) => setGreen(val)}
              />
            </div>
            <div className={classes.SliderBlock}>
              <BlueSlider
                aria-label="Blue"
                value={blue}
                max={255}
                onChange={(e, val) => setBlue(val)}
              />
            </div>
            <div>
              <Box
                sx={{
                  width: "auto",
                  height: 50,
                  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
