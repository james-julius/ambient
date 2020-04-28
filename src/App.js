import React, { useState,} from 'react';
// import logo from './logo.svg';
import VibeSelector from './Components/VibeSelector';
import DarkModeSwitch from './Components/DarkModeSwitch';
import './Resources/stylesheet.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkModeClasses, setDarkModeClasses] = useState('day App Glide');

  function triggerDarkMode() {
    setDarkMode(!darkMode);
    darkMode ? setDarkModeClasses('night App glide') : setDarkModeClasses('day App glideTwo');
  }

  return (
    <div className={darkModeClasses}>
        <h1>Ambia</h1>
        <DarkModeSwitch triggerDarkMode={triggerDarkMode} />
        <VibeSelector nightMode={darkMode} />
    </div>
  );
}

export default App;
