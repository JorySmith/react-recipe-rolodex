import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// Components
import Searchbar from './Searchbar'

// Styles
import './Navbar.css'


export default function Navbar() {
  // Store theme context value via custom hook useTheme
  const { color } = useTheme()

  return (
    <div className='navbar' style={{ background: color }}>
        <nav>
            {/* Links can have classes, they are anchor tags FYI: 'a' */}
            <Link to='/' className='brand'>
                <h1>React Recipe Rolodex</h1>
            </Link>
            <Searchbar />
            <Link to='/create'>
                Create Recipe
            </Link>
        </nav>
    </div>
  )
}
