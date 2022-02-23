import { useHistory, useParams } from "react-router-dom"
import { useEffect } from "react"

// Styles
import useFetch from "../../hooks/useFetch"
import "./Recipe.css"

export default function Recipe() {
  // To get recipe, extract recipe id from URL using RR hook useParams
  // Find recipe data using custom hook useFetch
  // If error loading data, redirect user to home with RR hook useHistory.push
  // To display error right away, call useEffect
  // Don't redirect right away, use setTimeout() so user can read error first
  const { id } = useParams()
  const url = "http://localhost:3000/recipes/" + id
  const { data: recipe, isPending, error } = useFetch(url)
  const history = useHistory()

  // Fire a function on page load or when a dependency changes: useEffect()
  useEffect(() => {
    if (error) {
          // Redirect user with RR hook useHistory().push('route') after 
          // a setTimeout to allow user to read error first
          setTimeout(() => {
              history.push('/')
          }, 2000)
          
    }    
  }, [error, history])
    
  return (
    <div>
      {isPending && <div></div>}
      {error && <div></div>}
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>{recipe.method}</p>
          <p>Cooking time: {recipe.cookingTime}</p>
        </div>)}
    </div>
  )
}
