import React, { useEffect, useState } from "react";
import { Flex } from "theme-ui";
import { ProfilePreview } from "../components/organisms";
import { profiles } from "../content/profiles";

export const Home = () => {
  const [athleteProfiles, setAthleteProfiles] = useState([]);

  useEffect(() => {
    setAthleteProfiles(profiles);
  }, []);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        "@media (orientation: landscape) and (min-width: 768px )": {
          flexDirection: "row",
        },
      }}
    >
      {athleteProfiles.map((_profile) => (
        <ProfilePreview profile={_profile} />
      ))}
    </Flex>
  );
};
