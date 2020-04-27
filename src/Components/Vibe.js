import React, { useState, useEffect } from 'react';
import '../Resources/stylesheet.scss';
import CrispOceanWaves from '../Resources/CrispOceanWaves.mp3';
import { Icon } from 'react-icons-kit';
import { play, pause } from 'react-icons-kit/fa';

const Vibe = (props) => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(100);
    let crispWavesPlayer;

    const initPlayer = () => {
        crispWavesPlayer = document.getElementById('crispWavesPlayer')
    }

    const handlePlayPause = () => {
        console.log(crispWavesPlayer);
        console.log(crispWavesPlayer.volume);
        if (crispWavesPlayer.paused || crispWavesPlayer.ended) {
            console.log('going to play');
            crispWavesPlayer.play()
            setPlaying(true);
        }
        else {
            console.log('going to pause')
            console.log(crispWavesPlayer)
            crispWavesPlayer.pause();
            setPlaying(false);
        }
    } 
    const handleVolumeChange = (volume) => {
        crispWavesPlayer.volume = volume/100;
        setVolume(volume);
    } 

    useEffect(() => {
        initPlayer()
    })

    useEffect(() => {
        console.log(playing)
    }, [playing])

    return (<>
        <audio id="crispWavesPlayer">
            <source src={CrispOceanWaves}/>
        </audio>
        <div class="vibe">
            <div className="iconTitleContainer">
                <img src={undefined} alt="icon"/>
                <h3>Crisp Ocean</h3>
            </div>
            <div className='playPauseContainer'>
                {playing ? <Icon icon={pause} size={'40%'} className='playPause' onClick={handlePlayPause}/> : <Icon icon={play} size={'40%'} className='playPause' onClick={handlePlayPause}/>}
            </div>
            <div className='volumeContainer'>
                <input type="range" value={volume} onChange={event => handleVolumeChange(event.target.value)}/>
            </div>
            
        </div>
        </>
    )
}

export default Vibe;