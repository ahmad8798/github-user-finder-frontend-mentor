import { Box, Button, Paper, Typography } from "@mui/material"
import ProfileHeader from "../profileHeader/ProfileHeader"
import ProfileBio from "../profileBio/ProfileBio"
import ProfileStats from "../profileStats/ProfileStats"
import ProfileLinks from "../profileLinks/ProfileLinks"
import SearchBar from "../searchBar/SearchBar"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const MainProfileCard = ({setIsDarkMode,isDarkMode}) => {
  return (
    <>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:'50%',marginInline:"auto",marginBottom:'20px'}}>
            <div>
            <Typography variant="h4">Devfinder</Typography>
            </div>
            <div>
            <Button onClick={()=>setIsDarkMode((prev)=>!prev)} endIcon={isDarkMode?<DarkModeIcon/>:<WbSunnyIcon/>}>{isDarkMode?"light mode":"dark mode"}</Button>
            </div>
        </div>
      <SearchBar/>
         <Box
      sx={{
          // Full viewport height to center vertically
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
       // Optional: background color for the page
      }}
      
    >

      <Paper 
        elevation={3}
        sx={{
          width: {
            xs: '90%',  // 90% width on extra-small screens
            sm: '90%',  // 80% width on small screens
            md: '50%',  // 70% width on medium screens
            lg: '50%',  // 60% width on large screens
            xl: '50%',  // 50% width on extra-large screens

          },  // 60% of the screen width
          padding: 4,  // Padding inside the Paper component
          borderRadius: 2,  // Rounded corners
         // Paper background color
        }}
      >
        <ProfileHeader />
        <ProfileBio />
        <ProfileStats />
        <ProfileLinks/>
      </Paper>
    </Box>
    </>   
  )
}

export default MainProfileCard
