import  { useState, useEffect } from 'react';
import { Button, ThemeProvider, Typography, CssBaseline, Paper } from '@mui/material';
import { lightTheme } from './themes/lightTheme';
import { darkTheme } from './themes/darkTheme';
import SearchBar from './components/searchBar/SearchBar';
import ProfileHeader from './components/profileHeader/ProfileHeader';
import ProfileBio from './components/profileBio/ProfileBio';
import ProfileStats from './components/profileStats/ProfileStats';
import MainProfileCard from './components/mainProfileCard/MainProfileCard';


const App = () => {
// State to manage theme
  const [isDarkMode, setIsDarkMode] = useState(false);

// Effect to persist theme choice
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);



  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Normalize CSS */}
          <MainProfileCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </ThemeProvider>
  );
};

export default App;
