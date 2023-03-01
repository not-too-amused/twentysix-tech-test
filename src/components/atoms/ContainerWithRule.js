import React from "react";
import { Box } from "theme-ui";

//* assets
import RuleLines from "../../assets/rule-lines.svg";

export const ContainerWithRule = ({ backgroundImage, children }) => (
  <Box
    sx={{
      position: "relative",
      "::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
        background: `url(${backgroundImage})`,
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
  >
    {children}
  </Box>
);
