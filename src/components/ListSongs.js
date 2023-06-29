import React, { useState } from 'react';
import { useContext } from 'react';
import { Songs } from '../Context';
import { useEffect } from 'react';

export default function ListSongs() {
    const {Datasongs,handleSetSong,song} = useContext(Songs)
    const [idsong,setidSong] = useState(0)
    const handlePlaySong = (idsong)=>{
        setidSong(idsong)
        handleSetSong(idsong)
    }
    useEffect(() => {
        setidSong(song.id)
    },[song])
    return (
        <div className='col-span-2 overflow-y-scroll' >
            
            <table className='w-full' >
                <thead className='text-white h-12 ' >
                    <tr>
                        <th className='w-[10%]' >#</th>
                        <th className='text-left' >Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'> <i class="fa fa-download" aria-hidden="true"></i></th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        Datasongs.map((song, index) => 
                        <tr key={index} className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 cursor-pointer ${idsong === song.id && 'text-teal-400 bg-slate-600'} ' `} 
                         onClick={() => handlePlaySong(song.id)} >
                        <td className='text-center' >{index + 1}</td>
                        <td>{song.name}</td>
                        <td className='text-center' >{song.author}</td>
                        <td className='text-center' > <a href={song.url} ><i class="fa fa-download" ></i></a>  </td>
                    </tr> )
                    }
               
                </tbody>
            </table>
        </div>
        
    );
}

