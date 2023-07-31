import React from 'react'
import {NavLink, useParams } from 'react-router-dom'

function Details({botsArray, setBotsArray,favouriteBots,setFavouriteBots}) {
  const { id } = useParams();
  const bot = botsArray.find((bot) => bot.id === parseInt(id));
  function addToFavourites(event){
    const botId = parseInt(event.target.id);
    const draftedBot=botsArray.find((bot) =>  bot.id===botId)
    const isBotAlreadyAdded = favouriteBots.some((bot) => bot.id === botId);
    !isBotAlreadyAdded?
    setFavouriteBots([...favouriteBots, draftedBot]):console.log('Already in favourites');
  }
  
  return (
    <div>
      <h1>DETAILS</h1>
      <nav id="sidebar">
      <NavLink exact to='../'>Home</NavLink>
      </nav>
      <div className='card col-2 bg-secondary' key={bot.id}>
      <img src={bot.avatar_url} className="card-img-top" alt="Loading..."/>
        <div className="card-body" >
            <h3 className="card-title">{bot.name}</h3>
            <p className="card-text">{bot.catchphrase}</p>
            <h4>&#128147;{bot.health} &#128737;{bot.armor} &#9889;{bot.damage}</h4>
            <button 
            onClick={addToFavourites}
            className="btn btn-info"
            id={bot.id}
            >Favourites
            </button>
        </div>
    </div>


     
    </div>
  )
}

export default Details