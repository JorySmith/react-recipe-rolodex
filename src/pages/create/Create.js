import { useState } from "react"

// Styles
import "./Create.css"

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = (e) => {
    // When form is submitted, cancel page reload 
    e.preventDefault()
    console.log(title, method, cookingTime)
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
