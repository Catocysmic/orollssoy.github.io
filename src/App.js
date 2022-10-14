import './App.css';

const funnyVine = new Audio("https://cdn.discordapp.com/attachments/960962795447386112/1030514988399480933/vine-boom.mp3")

function App() {
  function teeHeHe(){
     funnyVine.play();
  }

  return (
    <div className="App" >
      <p class="head">Olof.Rollsby.Soy!</p>
      <div class="fan-message">
        <p>Olof Rollsby number one supper fan site!!!</p>
        <p>H8rs gunna H8</p>
      </div>
      <p>
        <audio controls autoplay="autoplay">
        <source src="audio/Mr Beast Outro Sound Effect.mp3" type="audio/mpeg"/>
        </audio>
      </p>
      <div class="grid-container">
        <div class="main">
          <img src="pictures/olof1.png" alt="Girl in a jacket" class="kewlImage" onClick={() => teeHeHe()} />
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
