import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
    // Store and use context from ThemeContext value object
    const context = useContext(ThemeContext)

    // Context.Provider determines scope of context, if context is undefined, it's outside its scope, if so, throw new instance of Error class
    if (context === undefined) {
        throw new Error("useTheme() must be used inside a ThemeProvider component")
    }

    return context
}