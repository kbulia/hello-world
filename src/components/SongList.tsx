import Song from './Song';
import { useState } from 'react';

const SongList = () : JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibility = () : void => {
        setVisible(!visible);
    }

    const initialSongList: SongType[] = [
        {title : 'Last thing on my mind', artist: 'steps', votes : 0},
        {title : 'If you\'re over me', artist: 'Years and years', votes : 0},
        {title : '9 to 5', artist: 'Dolly Parton', votes: 0},
        {title : 'Funky Monks', artist: 'Red Hot Chilli Peppers', votes: 0},
        {title : '9 to 5', artist: 'Paramore', votes : 0}
    ];

    const [songs, setSongs] = useState<SongType[]>(initialSongList);

    const votingFunction = (index : number) => {
        const updatedSongs = songs
            .map( (song, i) => i === index ? {...song, votes : song.votes + 1} : song);
        setSongs(updatedSongs);
    }

    //create an array <Song />
    const displaySongs : JSX.Element[] = 
    songs.map ( (s, idx) => <Song key={idx} song={s} recordVote={() => votingFunction(idx)} /> ) 

    return (
        <div>
            <h2>Your favourite songs are:</h2>
            <button onClick={toggleVisibility}> {visible ? 'hide' : 'show'} songs</button>
            <ul style= {{display : visible ? 'block' : 'none'}}>
                {displaySongs}
            </ul>
            
        </div>);
}

export default SongList;

export type SongType = {title: string, artist: string, votes: number};    

