import "./Square.css";
import hoverEffect from "../assets/Sound/click-21156.mp3";
import diamondIcon from "../assets/diamond.png";
import bombIcon from "../assets/bomb.png";
import { useEffect, useState } from "react";

function Square({
  mines,
  gameOver,
  setGameOver,
  setScore,
  isFirstUpdate,
  setIsFirstUpdate,
  resetAll
}) {
  let [image, setImage] = useState(null);

  useEffect(() => {
    if (gameOver) {
      if (mines) {
        setImage(bombIcon);
      } else {
        setImage(diamondIcon);
      }
    }else{
        if(resetAll){
            setImage(null)
        }
    }
  }, [gameOver, mines]);

  function clickHandler() {
    if (!mines) {
      setScore((prevValue) => {
        if (isFirstUpdate) {
          setIsFirstUpdate(false);
          return 200;
        }
        return prevValue * 2;
      });
      setImage(diamondIcon);
      const sound = new Audio(hoverEffect);
      sound.play();
    } else {
      alert("You Loss, Your Game Over");
      setImage(bombIcon);
      setGameOver(true);
    }
  }
  return (
    <>
      <div className="square-item" onClick={clickHandler}>
        {image && <img src={image} alt="Square item" />}
      </div>
    </>
  );
}

export default Square;
