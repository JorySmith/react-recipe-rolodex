// rfc or rafce snippets
import { Link } from 'react-router-dom'

// Styles 
import './RecipeList.css'

export default function RecipeList({ recipes }) {      

  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className="card">
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                {/* Only return first 100 chars of recipe using substring() */}
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Recipe</Link>
            </div>
        ))}
        
    </div>
  )
}
