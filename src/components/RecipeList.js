import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import trashCan from '../assets/trash-delete.svg'
import { projectFirestore } from '../firebase/config'

// Styles 
import './RecipeList.css'

export default function RecipeList({ recipes }) {   
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes found.</div>
  }

  // Delete recipe, pass its id
  const handleClick = (id) => {
    // Pass the firestore collection name and doc id, call delete method
    projectFirestore.collection('recipes').doc(id).delete()
  }
  

  return (

    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                {/* Only return first 100 chars of recipe using substring() */}
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Recipe</Link>
                <img 
                  src={trashCan}
                  className="delete"
                  onClick={() => handleClick(recipe.id)}
                  alt="Delete recipe" />
            </div>
        ))}
        
    </div>
  )
}
