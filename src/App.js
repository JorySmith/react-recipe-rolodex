import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages and components
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'
import { useTheme } from './hooks/useTheme'

// Styles
import './App.css'



function App() {
  // Import dynamic mode from custom hook useTheme()
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/recipes/:id'>
              <Recipe />
            </Route>          
          </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App
