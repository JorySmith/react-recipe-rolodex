import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

//Components
import RecipeList from "../../components/RecipeList"

// Styles
import "./Search.css"

export default function Search() {
  // Store query string via useLocation().search hook and a new instance of URLSearchParams() class (a web API)
  // Use get method to get searchterm value for 'q' key: ?q=searchterm
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  // Get recipes that include search term via useFetch
  // First store URL string with query added to the end
  const url = 'http://localhost:3000/recipes?q=' + query
  const { error, isPending, data } = useFetch(url)


  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading results...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
