import React from "react";
import { Link } from "theme-ui";
import { slugify } from "../../utils";

export const ProfilePreview = ({
  profile: {
    name,
    contrastText,
    featuredImage: { preview: previewImage, alt },
  },
}) => {
  return (
    <Link
      href={`/${slugify(name)}`}
      sx={{
        position: "relative",
        aspectRatio: "1.044 / 1",
        width: "100%",
        minWidth: ["100%", "375px"],
        outline: "solid 1px",
        outlineColor: "white",
        outlineOffset: "-10px",
        overflow: "hidden",
        bg: "transparent",
        cursor: "pointer",
        ":focus": {
          outline: "solid 3px",
        },
        ":hover": {
          ">img": {
            transform: "scale(1.05)",
            transition: "transform 275ms ease-out",
          },
        },
        ">*": {
          position: "absolute",
          left: 0,
          width: "100%",
          transition: "transform 150ms ease-in",
        },
        ">img": {
          top: 0,
          height: "100%",
          zIndex: -1,
        },
        ">span": {
          variant: "text.spacedHeading",
          position: "absolute",
          bottom: "xl",
          color: contrastText ? "white" : "text",
        },
      }}
    >
      <img src={previewImage} alt={alt} />
      <span>{name}</span>
    </Link>
  );
};
