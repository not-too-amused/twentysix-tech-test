import React from "react";
import { Grid } from "theme-ui";
import { HomeLink } from "../molecules";

export const Navbar = () => (
  <Grid
    sx={{
      height: "80px",
      placeItems: "center",
      borderBottom: (t) => `1px solid ${t.colors.subtle}`,
    }}
  >
    <HomeLink />
  </Grid>
);
