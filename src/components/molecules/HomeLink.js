import React from "react";
import { Link } from "theme-ui";
import { Logo } from "../atoms/Logo";

export const HomeLink = () => (
  <Link
    href="/"
    sx={{
      display: "grid",
      placeItems: "center",
      gap: "1px",
      color: "inherit",
      textDecoration: "none",
      span: {
        variant: "text.heading",
        fontSize: "sm",
        fontWeight: "bold",
      },
    }}
  >
    <Logo />
    <span>Learning Lab</span>
  </Link>
);
