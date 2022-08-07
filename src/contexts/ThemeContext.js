import { useEffect, createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const Theme = JSON.parse(localStorage.getItem('siteTheme'));
    if (Theme) {
      return Theme;
    }
    return 'light';
  });

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#e4e5f1';
    } else {
      document.body.style.backgroundColor = '#161722';
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('siteTheme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
