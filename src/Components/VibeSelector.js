import React from 'react';
import Vibe from './Vibe';
import '../Resources/stylesheet.scss';
import AmbiaOcean from '../Resources/AmbiaOcean.mp3';
import AmbiaRain from '../Resources/AmbiaRain.mp3';
import AmbiaStorm from '../Resources/AmbiaStorm.mp3';
import AmbiaForest from '../Resources/AmbiaForest.mp3';
import AmbiaWind from '../Resources/AmbiaWind.mp3';
import DayForest from '../Resources/DayForest.svg';
import DayRain from '../Resources/DayRain.svg';
import DayStorm from '../Resources/DayStorm.svg';
import DayWaves from '../Resources/DayWaves.svg';
import DayWind from '../Resources/DayWind.svg';
import NightForest from '../Resources/NightForest.svg';
import NightRain from '../Resources/NightRain.svg';
import NightStorm from '../Resources/DayStorm.svg';
import NightWaves from '../Resources/NightWaves.svg';
import NightWind from '../Resources/NightWind.svg';

const VibeSelector = (props) => {
    let index = 0;
    const vibes= [{
            playerId: 'oceanPlayer',
            src: AmbiaOcean,
            name: 'Ocean Waves',
            dayIcon: DayWaves,
            nightIcon: NightWaves,
            nightMode: props.nightMode
        },{
            playerId: 'forestPlayer',
            src: AmbiaForest,
            name: 'Rich Forest',
            dayIcon: DayForest,
            nightIcon: NightForest,
            nightMode: props.nightMode
        },{
            playerId: 'rainPlayer',
            src: AmbiaRain,
            name: 'Rain',
            dayIcon: DayRain,
            nightIcon: NightRain,
            nightMode: props.nightMode
        },{
            playerId: 'stormPlayer',
            src: AmbiaStorm,
            name: 'Stormy',
            dayIcon: DayStorm,
            nightIcon: NightStorm,
            nightMode: props.nightMode
        },{
            playerId: 'windPlayer',
            src: AmbiaWind,
            name: 'Breeze',
            dayIcon: DayWind,
            nightIcon: NightWind,
            nightMode: props.nightMode
        }
        ];

        // 'Ocean Depths', 'Summer Fields', 'Rainforest', 'Birds Chirping', 'Storm']
    return(
        <div id="vibe-selector">
            {vibes.map(vibe => { 
                let key = index;
                index += 1;
            return (<Vibe 
                key={key}
                playerId={vibe.playerId}
                src={vibe.src}
                icon={!props.nightMode ? vibe.nightIcon : vibe.dayIcon}
                name={vibe.name}/>
            )})}
        </div>
    )

}

export default VibeSelector;