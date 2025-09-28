import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { unreadableTheme, theme } from '../styles/_themes';
import { ThemeContextType, ThemeProviderProps } from '../Interfaces/Interfaces';


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);
  const chosenTheme = darkMode ? unreadableTheme : theme;

  const value: ThemeContextType = {
    darkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={chosenTheme}>
			<CssBaseline />
        <GlobalStyles
          styles={{
            img: {
              filter: darkMode ? 'blur(5px)' : 'none',
            },
          }}
        />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};