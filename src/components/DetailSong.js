import React, { useContext } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3 ' >
            <h2 className='text-cyan-500 font-bold' > Now Playing </h2>
            <h2 className='text-neutral-500 text-2xl' >{song.name}</h2>
            <div className='w-[240px] m-auto mt-10 '  >
                <img className='w-full' src={song.links.images[0].url} alt='avatar'  ></img>
            </div>
            <div className='flex justify-evenly items-center mt-10 ' >
            <img className='rounded-full w-[70px] '  src={song.links.images[1].url} alt='avatar'  ></img>
            <span className='text-white text-xl ' >{song.author}</span>

            </div>
        </div>
        
    );
}

