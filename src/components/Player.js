import React, { useContext } from 'react';
import  AudioPlayer  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';


export default function Player() {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () =>{
        handleSetSong(song.id + 1)
    }
    const handleClickPre = () =>{
        handleSetSong(song.id - 1)
    }

    return (
        <div  >
        <AudioPlayer className='player' 
         src={song.url}
         showSkipControls={true} 
         showJumpControls={false} 
         layout="stacked-reverse  " 
         onClickNext={handleClickNext}
         onClickPrevious={handleClickPre}

         />
           
        </div>
        
    );
}

