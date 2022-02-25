import { projectFirestore } from "../../firebase/config"
import { useEffect, useState } from "react"
import { useTheme } from "../../hooks/useTheme"

// Styles
import "./Home.css"

// Components
import RecipeList from '../../components/RecipeList'


export default function Home() {
  // Track state for data, isPending, and error
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const { mode } = useTheme()

  // Get data from firestore
  useEffect(() => {
    // Pending data pull from db
    setIsPending(true)

    // Set onSnapshot listener on firestore collection data
    // Store in const unsub for cleanup function when component unmounts
    const unsubscribe = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      // Update setError if snapshot.empty
      if (snapshot.empty) {
        setError("No recipes found")
        // Loading finished, update setIsPending
        setIsPending(false)
      } else {
        // Loop through snapshot.docs, extract data objects, push to new array
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
        })
        // Update setData with results, loading finished so update setIsPending 
        setData(results)
        setIsPending(false)      
      } 
    }, (err) => {
      // Capture error.message if present, update setError with it
      // Loading done, update setIsPending
      setError(err.message)
      setIsPending(false)
    })
    // Cleanup function to close/unsub onSnapshot listener on unmount
    return () => unsubscribe()
  }, [])

    
  return (
    <div className='home'>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
