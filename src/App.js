import './App.css';
import React, { useState } from 'react';

const nonCursed = 'pictures/olof1.png'
const cursed = 'pictures/olofcursed.jpg'
const images = { nonCursed, cursed }
const funnyVine = new Audio("https://cdn.discordapp.com/attachments/960962795447386112/1030514988399480933/vine-boom.mp3")
var imgState = new Number()
function App() {
  function teeHeHe(){
     const newAudio = funnyVine.cloneNode();
     newAudio.play();
     switch (imgState){
      default:
        setSelected(images.cursed);
        imgState = 1;
        break;
      case 0:
        setSelected(images.cursed);
        imgState = 1;
        break;
      case 1:
        setSelected(images.nonCursed);
        imgState = 0;
         }
        }  
  

  const [selected, setSelected] = useState(images.nonCursed)

  return (
    <div className="App">
      <div class="grid-container">
        <div class="main">
          <img src={selected} alt="Girl in a jacket" class="kewlImage" onClick={() => teeHeHe()} />
          <img src="pictures/olofsoy.jpg" alt="Girl in a jacket soy" class="kewlImage"/>
        </div>
        <div class="flop-left">
          <img src="pictures/floppa.gif" alt="floppa" class="kewlImage"/>
        </div>
        <div class="flop-right">
          <img src="pictures/floppa.gif" alt="floppa" class="kewlImage"/>
        </div>
      </div>
    </div>
  );
}
export default App;
