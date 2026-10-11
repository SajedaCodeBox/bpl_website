import  { use, useState } from 'react';
import AvailablePlayers from '../homepage/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise, coin, setCoin}) => {
    const players = use (playerPromise);
    console.log (players);
    // button toggleing ar jonno
    const [selectedType, setSelectedType] = useState ("available");
    const [selectedPlayers, setSelectedPlayers] = useState ([]);
    
    return (
        <div className='container mx-auto my-[60px]'>
           <div className='flex items-center justify-between gap-4 mb-[20px]'>
         {selectedType === "available" ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Player ({selectedPlayers.length}/{players.length})</h2>}
            <div>
          <button onClick={() => setSelectedType ("available")} className={`btn ${selectedType === "available"? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl`}>Available</button>

        <button onClick={() => setSelectedType ("selected")} 
        className={`btn ${selectedType === "selected"? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
            </div>
           </div>
{/* Available player part */}
            {selectedType === "available" ? (<AvailablePlayers players = {players} coin = {coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}></AvailablePlayers>) : (<SelectedPlayers selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coin = {coin} setCoin = {setCoin}></SelectedPlayers>) }
        </div>
    );
};

export default Players;