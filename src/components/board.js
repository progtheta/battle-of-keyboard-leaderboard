import React from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import LinkOfL from './button';

export default function Board() {

    const handleClick = (e) =>{
        console.log(e.target);
    }


  return (
    <div className='board'>
        <h1 className='leaderboard'>Battle Of KeyBoard Final Rank List</h1>

        {/* <div className='duration'>
            <button onClick={handleClick} data-id='r1'>Round 1 Rank List</button>
            <button onClick={handleClick} data-id='r2'>Round 2 Rank List</button>
            <button onClick={handleClick} data-id='r2'>Round 3 Rank List</button>
            <button onClick={handleClick} data-id='final'>Final Rank List</button>
        </div> */}
        <Profiles Leaderboard={Leaderboard}></Profiles>

        <LinkOfL></LinkOfL>
    </div>
  )
}
