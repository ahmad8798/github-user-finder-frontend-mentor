import { useTheme, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";

const ProfileBio = () => {
  const theme = useTheme();

  // Define custom media queries for breakpoints
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  // Define responsive styles
  const containerStyle = {
    marginBottom: "15px",
    width: "100%",
    marginLeft: isSmallScreen
      ? ""
      : isMediumScreen
      ? "30%"
      : isLargeScreen
      ? "30%"
      : isExtraLargeScreen
      ? "30%"
      : "",
  };

  return (
    <div style={containerStyle}>
      <Typography variant="body1">This Profile has no bio</Typography>
    </div>
  );
};

export default ProfileBio;
