import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/sun-mode-icon.svg'
// Styles
import './ThemeSelector.css'

// Colors array
const themeColors = ['#45858C', '#A0D9D9', '#D9C589', '#BF9765']


export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    // Toggle mode
    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
    }
    console.log(mode)


    return (
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img 
                    onClick={toggleMode}
                    src={modeIcon}
                    alt="Toggle light and dark mode"
                    style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)"}} />
            </div>
            <div className="theme-buttons">
                {themeColors.map((color) => (
                    <div 
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}} 
                    />
                ))}
            </div>
        </div>
    )
}
