import { Square } from "./Square"

const updateBoard = (index) =>{
    if(board[index] || winner) return;//stop if there is something in the board at index position
    //update board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //looking for a winner
    const newWinner = checkWinnerFrom(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);// is async
    } else if(checkEndGame(newBoard)){
      setWinner(false);//draw
    }
}

export function Board({ board }) {

    board.map((_, index) => {
        return (
            <Square
                key={index}
                index={index}
                updateBoard={updateBoard(board)}>
                {board[index]}
            </Square>
        )
    })

}