import { createContext, ReactNode, useState } from "react";

// Define the shape of the context
interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
// Create the context
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode((prev:any) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};


