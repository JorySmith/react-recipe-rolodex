import { createContext, useReducer } from "react";

// Context and Provider
// Context object, returns value from the provider
export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    // Return object with new desired state added/updated to current state
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload }
        default:
            return state
    } 
}

// Provider component, destructure future possible children this component may wrap
// Return ThemeContext.Provider component with default value prop
export function ThemeProvider({ children }) {
    // useReducer to update state
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#45858C'
    })

    // Change color using dispatch object
    // Dispatch then fires themeReducer function
    const changeColor = (color) => {
        dispatch({
            type: "CHANGE_COLOR",
            payload: color
        })
    }

    return (
        // Pass dynamic current state and changeColor function
        <ThemeContext.Provider value={{ ...state, changeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}