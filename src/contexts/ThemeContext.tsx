import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { unreadableTheme, theme } from '../styles/_themes';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

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

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};