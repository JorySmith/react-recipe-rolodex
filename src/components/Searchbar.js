import { useState } from "react"
import { useHistory } from "react-router-dom"

// Styles
import "./Searchbar.css"

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        // Redirect/push user to search page with 
        // query term: ?q=searchterm
        history.push(`/search?q=${term}`)
    }

  return (
    <div className="searchbar">
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input 
                type="text" 
                id="search"
                onChange={(e) => setTerm(e.target.value)}
                required />
            
        </form>
    </div>
  )
}
