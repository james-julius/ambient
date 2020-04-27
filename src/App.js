import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
// import logo from './logo.svg';
import VibeSelector from './Components/VibeSelector';
import './Resources/stylesheet.scss';
import { Icon } from 'react-icons-kit';
import { sun } from 'react-icons-kit/iconic/sun';
import { moon } from 'react-icons-kit/iconic/moon';

function App() {
  const [nightMode, setNightMode] = useState(false);
  const [sunClasses, setSunClasses] = useState('sun');
  const [moonClasses, setMoonClasses] = useState('moon');
  const [darkModeClasses, setDarkModeClasses] = useState('day App Glide');
  const [switchClasses, setSwitchClasses] = useState('nightLight');
  const [containerClasses, setContainerClasses] = useState('nightLightContainer day');
  const [timer, setTimer] = useState(null);
  function clearTimeout() {
    setTimer(null);
  }
  const app = useRef();
  
  function handleDarkMode() {
    if (timer === null) {
      console.log('timer is null')
      setTimer(setTimeout(() => {clearTimeout()}, 4000));
      setNightMode(!nightMode);
      if (nightMode) { 
        setSunClasses('sun fade-out ');
        setMoonClasses('moon fade-in');
        setDarkModeClasses('night App glideTwo');
        setSwitchClasses('nightLight rotate-up');
        setContainerClasses('nightLightContainer night');
      } else {
        setSunClasses('sun fade-in');
        setMoonClasses('moon fade-out');
        setDarkModeClasses('day App glide');
        setSwitchClasses('nightLight rotate-down');
        setContainerClasses('nightLightContainer dayContainer');
      }
    }
  }

  useLayoutEffect(() => {handleDarkMode()}, [])

  return (
    <div id='App' className={darkModeClasses} ref={app}>
        <h1>Ambia</h1>
        <div className={containerClasses}>
          <div className={switchClasses} onClick={handleDarkMode}>
            <Icon icon={sun} className={sunClasses} size={30}/>
            <Icon icon={moon} className={moonClasses} size={30}/>
          </div>
        </div>
        <VibeSelector nightMode={nightMode} />
    </div>
  );
}

export default App;
