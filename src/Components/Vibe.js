import React, { useState } from 'react';
import '../Resources/stylesheet.css';

const Vibe = (props) => {
    // const playTrack = url => {
    //     const [audio] = useState(new Audio(url));
    //     const [playing, setPlaying] = useState(false);
    // }

    function handleClick(event) {

    }

    return (
        <div class='vibe' onClick={handleClick}>
            <h4>{props.name}</h4>
        </div>
    )
}

export default Vibe;