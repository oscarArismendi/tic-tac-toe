import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      // We look every combo possible to see if X or O have win
      const [a,b,c] = combo;
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    //if there is no winner
    return null
  };

export   const checkEndGame = (newBoard) =>{
    // if there is not empty spaces the game has end
    return newBoard.every((square) => square !== null);
  }