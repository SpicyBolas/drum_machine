import React, {useEffect} from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {
  padPress, 
  powerToggle, 
  resetDisplay, 
  changeVol
} from './features/display/displaySlice';

function App() {
  //variables and state
  const dispatch = useDispatch();
  const text = useSelector((state) => (state.display.text));
  const powerStatus = useSelector((state) => state.display.power);
  const volume = useSelector((state) => state.display.volume);
  
  //Set the initial position of the slider
  //document.getElementById('volume-slider').style.left = '0%';
  
  

  useEffect(() =>{
    document.getElementById('power-switch').style.justifyContent = powerStatus ? 'flex-end' : 'flex-start';
  });

 
  function handleOnChange(e) {
    if(powerStatus){
      dispatch(padPress('Volume: ' + e.target.value.toString()))
    }
    dispatch(changeVol(e.target.value/100))
  }

  function handleMouseUp(){
    dispatch(resetDisplay());
  }
    


  function handlePowerToggle() {
    
    dispatch(powerToggle())

    dispatch(padPress(powerStatus ? 'Power Off': 'Power On'))

    setTimeout(()=>{
      dispatch(resetDisplay());  
    },500);
  }
  
  //If key pressed, play the audio, render the instrument text to the screen
  //and depress the button
  function handlePadClick(e){
    let src = e.currentTarget.getElementsByClassName("clip")[0].src;
    
    //Get the pad id
    let id = [...e.currentTarget.id].join('');
    
    if(powerStatus){
      let audio = new Audio(src);
      audio.volume = volume;
      audio.play();
      dispatch(padPress(id));
    } 
      e.currentTarget.style.boxShadow = '-3px -2px 2px black';

      setTimeout(()=>{
        document.getElementById(id).style.boxShadow = '5px 5px 5px black';
        dispatch(resetDisplay());  
      },300);
    

  }

  function handleKeyPress(e){
    let id = '';
    switch(e.key){
      case 'q':
        id = 'heater-1';
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

    

    let src = document.getElementById(id).getElementsByClassName("clip")[0].src;
    if(powerStatus){
      let audio = new Audio(src);
      audio.volume = volume;
      audio.play();
      dispatch(padPress(id));
    }
     
    document.getElementById(id).style.boxShadow = '-3px -2px 2px black';

    setTimeout(()=>{
      document.getElementById(id).style.boxShadow = '5px 5px 5px black';
      dispatch(resetDisplay());   
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
                <div id="power-button" onClick={handlePowerToggle}>

                </div>
              </div>
            </div>
            <div id="screen">
              <p>{text}</p>
            </div>
            <input id="slider" type="range" value={volume*100} onChange={handleOnChange} onMouseUp={handleMouseUp}/>
          </div>  
        </div>
      </div>  
    </div>
  );
}

export default App;
