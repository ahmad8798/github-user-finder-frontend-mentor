import { Button, Paper, TextField, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";

const SearchBar = () => {
  const theme = useTheme();

  // Responsive breakpoints
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.only("lg"));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.only("xl"));

  // Determine the width based on the screen size
  const getWidth = () => {
    if (isExtraSmallScreen) return "90%";
    if (isSmallScreen) return "90%";
    if (isMediumScreen) return "50%";
    if (isLargeScreen) return "50%";
    if (isExtraLargeScreen) return "50%";
    return "50%"; // Fallback for any other sizes
  };

  return (
    <Paper
      elevation={5}
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center", // Vertically centers the content
        justifyContent: "space-between",
        borderRadius: "15px",
        width: getWidth(), // Adjust width based on screen size
        marginInline: "auto",
        marginBottom: "15px",
      }}
    >
      <SearchIcon
        sx={{ marginRight: 1, color: "primary.main", fontSize: "30px" }}
      />
      <TextField
        variant="outlined"
        placeholder="Search The Github Username..." // Use placeholder instead of label
        fullWidth={true}
        sx={{
          width: "90%", // Occupies 90% of the Paper's width
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Removes the border
            },
            "&:hover fieldset": {
              border: "none", // Ensures no border on hover
            },
            "&.Mui-focused fieldset": {
              border: "none", // Ensures no border when focused
            },
          },
          "& .MuiInputBase-input": {
            padding: "10px", // Optional: Adjust padding to your preference
            "&::placeholder": {
              fontSize: "15px", // Custom font size for placeholder
              color: "primary", // Custom color for placeholder
            },
          },
        }}
      />
      <Button variant="contained" sx={{ marginLeft: 2, borderRadius: "12px" }}>
        Search
      </Button>
    </Paper>
  );
};

export default SearchBar;
