import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';
const SelectedCard = ({player, handleDeleteSelectedPlayer}) => {
    return (
        
            <div className='flex items-center gap-6 justify-between rounded-2xl p-10  border '>
                    <div className='flex items-center gap-6'>
                    <img src={player.playerImage} alt="" className='h-[75px] w-auto rounded-md' />
                    <div>
                        <h2 className='flex items-center gap-2 font-semibold text-xl'><FaUser />{player.playerName}</h2>
                        <p>{player.playerType}</p>
                    </div>
                    </div>
                    <button onClick={() => handleDeleteSelectedPlayer(player)} className='btn text-red-500'><IoMdTrash /></button>
                </div>
        
    );
};

export default SelectedCard;
