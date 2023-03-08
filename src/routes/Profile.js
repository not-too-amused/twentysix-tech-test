import React, { useEffect, useState } from "react";
import { Box, Divider, Heading, IconButton, Paragraph } from "theme-ui";
import { useParams } from "react-router-dom";

import { ContainerWithRule } from "../components/atoms";

import { profiles } from "../content/profiles";
import { slugify } from "../utils";

export const Profile = () => {
  const params = useParams();
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const currentProfile = profiles.find(
      (_profile) => slugify(_profile.name) === params.id
    );

    setProfileData(currentProfile);
  }, []);

  if (!profileData.content) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        scrollBehavior: "smooth",
        overflow: "auto",
        scrollSnapType: "y mandatory",
        bg: "blue",
        zIndex: -10,
        overflowX: "hidden",
      }}
    >
      {profileData?.content?.map((_content) => (
        <ContainerWithRule backgroundImage={_content.img}>
          <Heading>{_content?.heading || profileData?.name}</Heading>
          <Divider />
          {<Paragraph>{_content.copy}</Paragraph>}
          <IconButton />
        </ContainerWithRule>
      ))}
    </Box>
  );
};
