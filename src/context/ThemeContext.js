"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark" ? "dark" : "light";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        if (theme !== "dark") {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
