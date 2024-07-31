import { useState } from "react";
import "./App.css";
import Square from "./Square/Square";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumbers = [];
while(randomNumbers.length < 3){
  let randomNum = getRandomNumber(1,25)
  if(!randomNumbers.includes(randomNum)){
    randomNumbers.push(randomNum);
  }
}


function App() {

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isFirstUpdate, setIsFirstUpdate] = useState(true);
  const [resetAll, setResetAll] = useState(null);
  
  const items = [];
  for(let i=1; i<=25; i++){
    if(randomNumbers.includes(i)){
      items.push(<Square resetAll={resetAll} isFirstUpdate={isFirstUpdate} setIsFirstUpdate={setIsFirstUpdate} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} mines={true} key={i}/>);
    }else{
      items.push(<Square resetAll={resetAll} isFirstUpdate={isFirstUpdate} setIsFirstUpdate={setIsFirstUpdate} setScore={setScore} gameOver={gameOver} setGameOver={setGameOver} key={i}/>);
    }
  }

  function resetGame(){
    setGameOver(false);
    setScore(0);
    setIsFirstUpdate(true);
    setResetAll(true);
  }

  return (
    <>
    <div className="outerBox">
      {gameOver && <div className="reset" onClick={resetGame}>Reset</div>}
      <div className="d-flex gap-10">
        <div className="totalScore">
          <p>Game Score</p>
          <p>PTS = {score}</p>
        </div>
        <div className="d-grid">
          {items}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
