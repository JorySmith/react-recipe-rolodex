import { Link } from 'react-router-dom'

// Components
import Searchbar from './Searchbar'

// Styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
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
