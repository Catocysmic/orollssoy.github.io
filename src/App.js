import './App.css';

function App() {
  return (
    <div className="App">
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
          <img src="pictures/olof1.png" alt="Girl in a jacket" class="kewlImage"/>
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
