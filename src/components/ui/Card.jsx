import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Card = ({player, coin, setCoin, setSelectedPlayers, selectedPlayers}) => {
  const [isSelected, setIsSelected] = useState (false);


  const handleChoosePlayer = () => {
    let newCoins = coin-Number(player.price);
    if (newCoins >= 0){
      setCoin(coin-player.price)}
    else {
      toast.error("Not enough coins to purchese this player");
      return;}
    toast.success(`${player.playerName} is Selected`)
    setIsSelected(true);  
    setSelectedPlayers([...selectedPlayers, player])  
  }

    return (
       <div className="card bg-base-100  shadow-sm">
  <figure>
    <img src= {player.playerImage} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser /> {player.playerName}</h2>
{/* flag part */}
    <div className='flex justify-between gap-2 items-center'>
        <div className='flex gap-2 items-center'>
            <FaFlag />
            <p>{player.playerCountry}</p>
        </div>
        <button className='btn '>{player.playerType}</button>
    </div>
{/* divider from daisy ui */}
      <div className="divider"></div>

      <h2 className='font-bold'>Rating ({player.rating})</h2>
 <div className='flex justify-between gap-4 font-bold'>
        <p>{player.battingStyle}</p>
        <p className='text-right'>{player.bowlingStyle}</p>
      </div >
    <div className="card-actions justify-between items-center">
        <p className='font-semibold'>Price: ${player.price}</p>
      <button onClick={handleChoosePlayer} disabled = {isSelected ? true : false} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
    </div>
  </div>
            </div>
    );
};

export default Card;