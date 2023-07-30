import React,{useState, useEffect} from 'react'
import './App.css';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
function App() {
  const [botsArray, setBotsArray] = useState([])
  const [favouriteBots, setFavouriteBots] = useState([])

  useEffect(() => {
    const url="http://localhost:4000/bots";    
     fetch(url)
      .then(res=>res.json())
      .then(data=>setBotsArray(data))
  },[] )

  return (
    <div className="container">
       <YourBotArmy 
       favouriteBots={favouriteBots}
       setFavouriteBots={setFavouriteBots}/>
       <BotCollection 
       botsArray={botsArray} 
       setBotsArray={setBotsArray} 
       favouriteBots={favouriteBots} 
       setFavouriteBots={setFavouriteBots}/>
    </div>
  );
}

export default App;
