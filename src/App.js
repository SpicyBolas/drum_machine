import React from 'react';
import './App.css';

function App() {
  
  //If key pressed, play the audio, render the instrument text to the screen
  //and depress the button
  function handlePadClick(e){
    let src = e.currentTarget.getElementsByClassName("clip")[0].src;
    
    //Get the pad id
    let id = [...e.currentTarget.id].join('');
    console.log(id)
    new Audio(src).play(); 
    console.log(e);
    e.currentTarget.style.boxShadow = '-3px -2px 2px black';
    
    setTimeout(()=>{
      document.getElementById(id).style.boxShadow = '5px 5px 5px black';  
    },300);
  }

  function handleKeyPress(e){
    let id = '';
    console.log('working');
    switch(e.key){
      case 'q':
        id = 'heater-1';
        console.log(id);
        break;
      case 'w':
        id = 'heater-2';
        break;
      case 'e':
        id = 'heater-3';
        break;
      case 'a':
        id = 'heater-4';
        break;
      case 's':
        id = 'heater-5';
        break;
      case 'd':
        id = 'open-hat';
        break;
      case 'z':
        id = 'kick';
        break;
      case 'x':
        id = 'kick-hat';
        break;
      case 'c':
        id = 'closed-hat';
        break;
      default:
        return 0;
    }

    console.log(id);

    let src = document.getElementById(id).getElementsByClassName("clip")[0].src;
    new Audio(src).play(); 
    document.getElementById(id).style.boxShadow = '-3px -2px 2px black';

    setTimeout(()=>{
      document.getElementById(id).style.boxShadow = '5px 5px 5px black';  
    },300);
  }
  
  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <div id="drum-machine">
        <div id="header">
          <p>Spicy Drums</p>
        </div>
        <div id="content">
          <div id="pads">
            <div className="drum-pad" id="heater-1" onClick={handlePadClick}>
              <p>Q</p>
              <audio className="clip" id="Q" src='./Heater-1.mp3'></audio>
            </div>
            <div className="drum-pad" id="heater-2" onClick={handlePadClick}>
              <p>W</p>
              <audio className="clip" id="W" src='./Heater-2.mp3'></audio>
            </div>
            <div className="drum-pad" id="heater-3" onClick={handlePadClick}>
              <p>E</p>
              <audio className="clip" id="E" src='./Heater-3.mp3'></audio>
            </div>
            <div className="drum-pad" id="heater-4" onClick={handlePadClick}>
              <p>A</p>
              <audio className="clip" id="A" src='./Heater-4_1.mp3'></audio>
            </div>
            <div className="drum-pad" id="heater-5" onClick={handlePadClick}>
              <p>S</p>
              <audio className="clip" id="S" src='./Heater-6.mp3'></audio>
            </div>
            <div className="drum-pad" id="open-hat" onClick={handlePadClick}>
              <p>D</p>
              <audio className="clip" id="D" src='./Dsc_Oh.mp3'></audio>
            </div>
            <div className="drum-pad" id="kick" onClick={handlePadClick}>
              <p>Z</p>
              <audio className="clip" id="Z" src='./RP4_KICK_1.mp3'/>
            </div>
            <div className="drum-pad" id="kick-hat" onClick={handlePadClick}>
              <p>X</p>
              <audio className="clip" id="X" src='./Kick_n_Hat.mp3'></audio>
            </div>
            <div className="drum-pad" id="closed-hat" onClick={handlePadClick}>
              <p>C</p>
              <audio className="clip" id="C" src='./Cev_H2.mp3'></audio>
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
