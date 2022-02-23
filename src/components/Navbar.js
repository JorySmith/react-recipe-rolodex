import { Link } from 'react-router-dom'

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
            <Link to='/create'>
                Create Recipe
            </Link>
        </nav>
    </div>
  )
}
