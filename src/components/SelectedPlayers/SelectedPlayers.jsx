import React from 'react';
import SelectedCard from '../ui/SelectedCard';


const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin,}) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        console.log (selectedPlayers)
    const filteredPlayers = selectedPlayers.filter (selectedplayer => selectedplayer.playerName !== player.playerName);
    console.log (filteredPlayers);
    setSelectedPlayers (filteredPlayers);
    console.log( player.price)
      setCoin(coin + Number(player.price))
    };
    return (
        <div>
        <div className='space-y-5'>
            {selectedPlayers.length === 0 ? (
            <div className='h-[440px] flex items-center justify-center flex-col gap-4'> 
                <h2 className='font-semibold text-xl'>No players selected yet</h2>
                <p>Go to Available to selected player</p>
            </div> ) :
            ( selectedPlayers.map((player, ind) => {
                return (
                <SelectedCard key={ind} player={player} handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SelectedCard>
             );
            })
            )}
        </div>
        </div>
    );
};

export default SelectedPlayers;