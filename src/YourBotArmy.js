import React from 'react'

function YourBotArmy({favouriteBots, setFavouriteBots}) {
  function dischargeBot(event){
    const botId=parseInt(event.target.id)
    const dischargeArray=favouriteBots.filter((fav)=>fav.id!==botId)
    setFavouriteBots(dischargeArray)
  }
  function deleteBot(botToDelete){
    const deleteArray=favouriteBots.filter((fav)=>botToDelete.id!==fav.id)
    console.log(botToDelete.id)
    deleteMethod(botToDelete)
    .then(() => {
      setFavouriteBots(deleteArray);
    })  }
  function deleteMethod(bot){
      const url=`http://localhost:4000/bots/${bot.id}`;
      const method={
        method: "DELETE"
      }
      return fetch(url, method)
      .then(data=>data)
    }

  const favouriteList=favouriteBots.map((fav) => 
  (
    <div className="card col-2" key={fav.id}   >
      <img src={fav.avatar_url} className="card-img-top" alt="Loading..."/>
      <div className="card-body" >
        <h3 className="card-title">{fav.name}</h3>
        <p className="card-text">{fav.catchphrase}</p>
        <h4>&#128147;{fav.health} &#128737;{fav.armor} &#9889;{fav.damage}</h4>
        <button 
        onClick={dischargeBot}
        className="btn btn-success"
        id={fav.id}
        >Remove from Favourites
        </button>
        <button 
        onClick={()=>deleteBot(fav)}
        className="btn btn-danger"
        > X 
        </button>
      </div>
  </div>
  )
  )
  return (
    <div className='col-12 border border-primary bg-warning'>
      <div className='row'>
        {favouriteList}
      </div>
    </div>
  )
}

export default YourBotArmy