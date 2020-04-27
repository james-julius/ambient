import React from 'react';
import Vibe from './Vibe';
import '../Resources/stylesheet.scss';

const VibeSelector = () => {
    const names = ['Ocean Waves', 'Ocean Depths', 'Summer Fields', 'Rainforest', 'Birds Chirping', 'Storm']
    return(
        <div id="vibe-selector">
            {names.map(vibeName => <Vibe name={vibeName}/>)}
        </div>
    )
}

export default VibeSelector;