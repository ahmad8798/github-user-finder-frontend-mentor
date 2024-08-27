import { useTheme, useMediaQuery } from "@mui/material";
import { Typography } from "@mui/material";

const ProfileStats = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Define responsive styles
  const containerStyle = {
    display: "flex",
    width: isSmallScreen ? "100%" : isMediumScreen ? "70%" : "70%",
    marginLeft: "auto",
    marginBottom: "15px",
    padding: "20px",
    borderRadius: "15px",
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
  };

  return (
    <div style={containerStyle}>
      <div>
        <Typography variant="body1">Repos</Typography>
        <Typography variant="h6">8</Typography>
      </div>
      <div>
        <Typography variant="body1">Followers</Typography>
        <Typography variant="h6">3938</Typography>
      </div>
      <div>
        <Typography variant="body1">Following</Typography>
        <Typography variant="h6">9</Typography>
      </div>
    </div>
  );
};

export default ProfileStats;
