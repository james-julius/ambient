import React from 'react';
import Vibe from './Vibe';
import '../Resources/stylesheet.scss';
import CrispOceanWaves from '../Resources/CrispOceanWaves.mp3';
import OceanDay from '../Resources/DayWaves.svg';

const VibeSelector = () => {
    const vibes= [{
        playerId: 'oceanPlayer',
        src: CrispOceanWaves,
        name: 'Ocean Waves',
        icon: OceanDay
        }]
        // 'Ocean Depths', 'Summer Fields', 'Rainforest', 'Birds Chirping', 'Storm']
    return(
        <div id="vibe-selector">
            {vibes.map(vibe => <Vibe 
            playerId={vibe.playerId}
            src={vibe.src}
            icon={vibe.icon}
            name={vibe.name}/>)}
        </div>
    )
}

export default VibeSelector;