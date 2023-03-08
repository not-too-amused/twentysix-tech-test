import React from "react";
import { Grid } from "theme-ui";
import { Logo } from "../atoms/Logo";

export const HomeLink = () => (
  <Grid
    sx={{
      placeItems: "center",
      gap: "1px",
      span: {
        variant: "text.heading",
        fontSize: "sm",
        fontWeight: "bold",
      },
    }}
  >
    <Logo />
    <span>Learning Lab</span>
  </Grid>
);
