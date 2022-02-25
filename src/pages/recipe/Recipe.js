import { useHistory, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useTheme } from "../../hooks/useTheme"
import { projectFirestore } from "../../firebase/config"

// Styles
import "./Recipe.css"


export default function Recipe() {
  // To get recipe, extract recipe id from URL using RR hook useParams
  // Find recipe data using custom hook useFetch, pass it endpoint plus recipe id
  // If error loading data, redirect user to home with RR hook useHistory.push
  // To display error right away, call useEffect
  // Don't redirect right away, use setTimeout() so user can read error first
  const { id } = useParams()  
  const history = useHistory()
  const { mode } = useTheme()
  // Track state for data, isPending, and error
  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  // Fire a function on page load or when a dependency changes: useEffect()
  useEffect(() => {
    // Loading starts, update setIsPending state
    setIsPending(true)

    // Get the specific document from firestore collection using id from useParams()
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError("Couldn't find that recipe")
      }
    })

    if (error) {
          // Redirect user with RR hook useHistory().push('route') after 
          // a setTimeout to allow user to read error first
          setTimeout(() => {
              history.push('/')
          }, 2000)
          
    }    
  }, [id, error, history])
    
  return (
    // Add classNames where applicable so you can style where needed
    // If not className for a div, just use empty fragment
    <div className={`recipe ${mode}`}>
      {isPending && <div className="loading">Loading recipe...</div>}
      {error && <div className="error">{error}</div>}      
      {recipe && (
        <>
          <h2 className={`page-title ${mode}`}>{recipe.title}</h2>
          <p>Cooking time: {recipe.cookingTime}</p>
          <p className="ingredients">Ingredients:</p>
          <ul>            
            {recipe.ingredients.map(item => <li key={item}>{item}</li> )}
          </ul>
          <p className="ingredients">Instructions:</p>      
          <p className="method">{recipe.method}</p>          
        </>)}
    </div>
  )
}
