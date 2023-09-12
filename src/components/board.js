import React from 'react'
import Profiles from './profiles';
import { Leaderboard } from './database';
import LinkOfL from './button';

export default function Board() {



  return (
    <div className='board'>
        <h1 className='leaderboard'>Battle Of KeyBoard Final Rank List</h1>


        <Profiles Leaderboard={Leaderboard}></Profiles>

        <LinkOfL></LinkOfL>
    </div>
  )
}
