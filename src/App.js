import React,{useState, useEffect} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './Home';

function App() {
  const [botsArray, setBotsArray] = useState([])
  const [favouriteBots, setFavouriteBots] = useState([])

  useEffect(() => {
    const url="http://localhost:4000/bots";    
     fetch(url)
      .then(res=>res.json())
      .then(data=>setBotsArray(data))
  },[] )


 return(
  <Routes>
    <Route exact path='/' 
    element={<Home 
    botsArray={botsArray} 
    setBotsArray={setBotsArray} 
    favouriteBots={favouriteBots}
    setFavouriteBots={setFavouriteBots}/>
    }/>
    <Route path='/details' 
    element={<Details 
    botsArray={botsArray} 
    setBotsArray={setBotsArray} 
    favouriteBots={favouriteBots}
    setFavouriteBots={setFavouriteBots}
      />}
      />
    <Route path="/details/:id" 
    element={<Details
    botsArray={botsArray} 
    setBotsArray={setBotsArray} 
    favouriteBots={favouriteBots}
    setFavouriteBots={setFavouriteBots}
    />}/>
  </Routes>
 )
}

export default App;
