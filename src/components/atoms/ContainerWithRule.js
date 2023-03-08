import React from "react";
import { Grid } from "theme-ui";

//* assets
import RuleLines from "../../assets/rule-lines.svg";

export const ContainerWithRule = ({
  backgroundImage,
  children,
  sx,
  ...rest
}) => (
  <Grid
    sx={{
      position: "relative",
      placeItems: "center",
      height: "100%",
      color: "white",
      zIndex: 1,
      px: "xl",
      textAlign: "center",
      ...sx,
      "::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
        background: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
      "::after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        height: "800%",
        width: "100%",
        background: `url(${RuleLines}) 0 0 repeat`,
        transform: "rotate(-90deg)",
      },
    }}
    {...rest}
  >
    {children}
  </Grid>
);
