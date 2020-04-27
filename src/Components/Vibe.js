import React, { useState, useEffect, useLayoutEffect } from 'react';
import '../Resources/stylesheet.scss';
import { Icon } from 'react-icons-kit';
import { play, pause } from 'react-icons-kit/fa';

const Vibe = ({playerId, name, src, icon, nightMode}) => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(100);
    let player;

    const initPlayer = () => {
        player = document.getElementById(playerId)
    }

    const handlePlayPause = () => {
        console.log(player);
        console.log(player.volume);
        if (player.paused || player.ended) {
            console.log('going to play');
            player.play()
            setPlaying(true);
        }
        else {
            console.log('going to pause')
            console.log(player)
            player.pause();
            setPlaying(false);
        }
    } 
    const handleVolumeChange = (volume) => {
        player.volume = volume/100;
        setVolume(volume);
    } 

    useLayoutEffect(() => {
        initPlayer()
    })
    
    useEffect(() => {
        console.log(playing)
    }, [playing])

    return (<>
        <audio id={playerId}>
            <source src={src}/>
        </audio>
        <div className="vibe">
            <div className="iconContainer">
                <img src={icon} className='soundIcon' alt="icon"/>
            </div>
            <div className="titleContainer">
            </div>
            <div className='playPauseContainer'>
                {playing ? <Icon icon={pause} size={'30%'} className='playPause' onClick={handlePlayPause}/> : <Icon icon={play} size={'30%'} className='playPause' onClick={handlePlayPause}/>}
            </div>
            <div className='volumeContainer'>
                <input type="range" value={volume} style={{opacity: .5 + volume / 200 }} onChange={event => handleVolumeChange(event.target.value)}/>
            </div>
            
        </div>
        </>
    )
}

export default React.memo(Vibe);