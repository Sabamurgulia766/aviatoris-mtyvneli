import React, { useEffect, useState } from 'react';
import StarField from './components/starfield';
import Spaceship from './components/spaceship';
import './App.css';
import StarFieldWrapper from './components/starFieldWrapper';
// import StarFieldWrapper from './components/starFieldWrapper';

function App() {
  const [rotation, setRotation] = useState(0); // State to manage rotation
  useEffect(()=>{
    console.log("hiyo")
  })
  return (
    <>
      
      <StarFieldWrapper rotation={rotation}/>
      <Spaceship rotation={-rotation} />
      <div className='divider'>

      <input
        type="range"
        min="-1"
        max="1"
        step="0.01"
        value={rotation}
        onChange={(e) => setRotation(parseFloat(e.target.value))}
        className="slider"
        />
      </div>
    </>
  );
}

export default App;
