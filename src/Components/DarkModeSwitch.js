import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { sun } from 'react-icons-kit/iconic/sun';
import { moon } from 'react-icons-kit/iconic/moon';
import '../Resources/stylesheet.scss';

function DarkModeSwitch({ triggerDarkMode }) {
    const [sunClasses, setSunClasses] = useState('sun');
    const [moonClasses, setMoonClasses] = useState('moon');
    const [switchClasses, setSwitchClasses] = useState('nightLight');
    const [containerClasses, setContainerClasses] = useState('nightLightContainer day');
    const [timer, setTimer] = useState(null);
    const [nightMode, setNightMode] = useState(false);
    function clearTimeout() {
        setTimer(null);
    }
    
    function handleDarkMode() {
        if (timer === null) {
        console.log('timer is null')
        setTimer(setTimeout(() => {clearTimeout()}, 4000));
        setNightMode(!nightMode);
        if (nightMode) { 
            triggerDarkMode();
            setSunClasses('sun fade-out ');
            setMoonClasses('moon fade-in');
            setSwitchClasses('nightLight rotate-up');
            setContainerClasses('nightLightContainer night');
        } else {
            triggerDarkMode();
            setSunClasses('sun fade-in');
            setMoonClasses('moon fade-out');
            setSwitchClasses('nightLight rotate-down');
            setContainerClasses('nightLightContainer dayContainer');
        }
        }
    }

    return (
            <div className={containerClasses}>
              <div className={switchClasses} onClick={handleDarkMode}>
                <Icon icon={sun} className={sunClasses} size={30}/>
                <Icon icon={moon} className={moonClasses} size={30}/>
              </div>
            </div>)
}

export default React.memo(DarkModeSwitch);