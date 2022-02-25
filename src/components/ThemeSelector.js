import { useTheme } from '../hooks/useTheme'

// Styles
import './ThemeSelector.css'

// Colors array
const themeColors = ['#45858C', '#A0D9D9', '#D9C589', '#BF9765']


export default function ThemeSelector() {
    const { changeColor } = useTheme()


    return (
        <div className='theme-selector'>
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
