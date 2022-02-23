import { useState, useRef } from "react"

// Styles
import "./Create.css"

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  // Track user submitted ingredients, each which will be added to another 
  // state that collects all ingredients in a single array
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  // Store ingredient input field ref via input ref attribute and hook useRef()
  const ingredientInput = useRef(null)

  const handleSubmit = (e) => {
    // When form is submitted, cancel page reload 
    e.preventDefault()
    console.log(title, method, cookingTime, ingredients)
  }

  const handleAdd = (e) => {
    // When form button Add is clicked, cancel page reload 
    e.preventDefault()
    // Store new ingredient minus extra spaces
    const ing = newIngredient.trim()

    // Don't store duplicate ingredients, check against ingredients 
    // via array.includes(ing)
    if (ing && !ingredients.includes(ing)) {
      // If ingredient not in array, add it with arrow function 
      setIngredients(prevIngredient => [...prevIngredient, ing])      
    }
    setNewIngredient('')
    // Keep user's cursor in the ingredient input field via hook useRef()
    ingredientInput.current.focus()
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      {/* Use a form to post data but use 'onSubmit' to call a custom
      function, do not use attribute 'action=POST'
      No need for htmlFor if label wraps input, only if label 
      is a self-closing tag */}
      <form onSubmit={handleSubmit}>
        <label>
          {/* Recipe title */}
          {/* Can use a span tag for the label */}
          <span>Recipe Title:</span>
          
          {/* Update state after input onChange, use event object target.value */}
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required />
        </label>

        {/* Ingredients  */}
        <label>
          <span>Ingredients</span>
          <div className="ingredients">
            <input 
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput} />
            <button 
              className="btn"
              onClick={handleAdd}>Add</button>
          </div>
        </label>

        {/* List user submitted ingredients */}
        <p>Current ingredients: {ingredients.map(item => (
          <em key={item}>{item}, </em>
        ))}
        </p>

        {/* Recipe method */}
        <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required />
        </label>

        {/* Cooking time */}
        <label>
          <span>Cooking Time (minutes):</span>
          <input 
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime} />
        </label>

        {/* Submit button */}
        <button className="btn">Submit</button>

      </form>
    </div>
  )
}
