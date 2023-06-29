
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import Datasongs from './Data/songs.json'
import Player from './components/Player';
import { useState } from 'react';



function App() {
  const [song, setSong ] = useState(Datasongs[0])
  const handleSetSong = (idsong) => {
   const song = Datasongs.find(song => song.id === idsong)
   if(!song){
    setSong(Datasongs[0])
   }
   else{
    setSong(song)
   }
   

  }
  return (
    <div className="App  ">
    <Songs.Provider value={{Datasongs,song,handleSetSong}} >
    <Navbar/>
     <div className='grid grid-cols-3 bg-slate-700 h-35 overflow-hidden' >
      {/* span 1 */}
      <DetailSong/>
      {/* span 2 */}
      <ListSongs/>
     </div>
     <Player/>
    </Songs.Provider>
     

  
    </div>
  );
}

export default App;
