import React from 'react';
import './App.css';
import useSound from 'use-sound';

function App() {
  //If key pressed, play the audio, render the instrument text to the screen
  //and depress the button
  function handlePadClick(e){
    console.log(e.target.getElementsByClassName("clip")[0]);
    e.target.getElementsByClassName("clip")[0].src;
  }

  function handleKeyPress(e){
    return 0;
  }
  
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="header">
          <p>Spicy Drums</p>
        </div>
        <div id="content">
          <div id="pads">
            <div className="drum-pad" id="heater-1" onClick={e=>handlePadClick(e)} onKeyDown={handleKeyPress}>
              <p>Q</p>
              <audio className="clip" id="Q" src='./audio/Heater-1.mp3'/>
            </div>
            <div className="drum-pad" id="heater-2">
              <p>W</p>
              <audio className="clip" id="W" src='./audio/Heater-2.mp3'/>
            </div>
            <div className="drum-pad" id="heater-3">
              <p>E</p>
              <audio className="clip" id="E" src='./audio/Heater-3.mp3'/>
            </div>
            <div className="drum-pad" id="heater-4">
              <p>A</p>
              <audio className="clip" id="A" src='./audio/Heater-4_1.mp3'/>
            </div>
            <div className="drum-pad" id="heater-5">
              <p>S</p>
              <audio className="clip" id="S" src='./audio/Heater-6.mp3'/>
            </div>
            <div className="drum-pad" id="open-hat">
              <p>D</p>
              <audio className="clip" id="D" src='./audio/Dsc_Oh.mp3'/>
            </div>
            <div className="drum-pad" id="kick">
              <p>Z</p>
              <audio className="clip" id="Z" src='./audio/RP4_KICK_1.mp3'/>
            </div>
            <div className="drum-pad" id="kick-hat">
              <p>X</p>
              <audio className="clip" id="X" src='./audio/Kick_n_Hat.mp3'/>
            </div>
            <div className="drum-pad" id="kick-hat">
              <p>C</p>
              <audio className="clip" id="C" src='./audio/Cev_H2.mp3'/>
            </div>
          </div>
          
          <div id="display">
            <div id="power">
              <p>Power</p>
              <div id="power-switch">
                <div id="power-button">

                </div>
              </div>
            </div>
            <div id="screen">
              <p>Audio Label</p>
            </div>
            <div id="volume">
              <div id="volume-bar">
                <div id="volume-slider">

                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>  
    </div>
  );
}

export default App;
