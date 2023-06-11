import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    let localTheme=localStorage.getItem("theme")||false
    const [theme, settheme] = useState(localTheme);
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <>
      <ThemeContext.Provider value={{ theme, settheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export const LocalNote=()=>{

}