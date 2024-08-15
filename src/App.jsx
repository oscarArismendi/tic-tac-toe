import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./componets/Square";
import { TURNS } from "./constants";
import { Board } from "./componets/Board";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import { WinnerModal } from "./componets/WinnerModal";
function App() {
  const [board,setBoard] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState(TURNS.X);
  const [winner,setWinner] = useState(null);



  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }




  return (
  <main className="board">
    <h1>Tic Tac Toe</h1>
    <button onClick={resetGame}>Reset game</button>
    <section className="game">
      <Board board={board}></Board>

    </section>
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
        </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
        </Square>
    </section>
    
    <section>
      <WinnerModal resetGame={resetGame} winner={winner} ></WinnerModal>
    </section>
  </main>
  )
}

export default App
