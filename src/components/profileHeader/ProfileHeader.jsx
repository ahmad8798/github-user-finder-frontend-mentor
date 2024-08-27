import { Grid,Typography } from "@mui/material";
import octacat from "../../assets/octocat.png";

const ProfileHeader = () => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: "15px" }}>
      <Grid
        item
        lg={4}
        md={4}
        xs={4}
        display="flex"
        alignItems="center"
        justifyContent="start"
      >
        <img
          style={{ borderRadius: "50%" }}
          width={"120px"}
          height={"120px"}
          src={octacat}
          alt="Profile"
        />
      </Grid>
      <Grid item lg={8} md={8} sm={8} xs={8}>
        <Typography variant="h5">The Octocat</Typography>
        <Typography variant="body1" color="text.secondary">
          @Octocat
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Joined 25 Jan 2011
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
