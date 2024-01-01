import { useState } from "react";
import Log from "./components/Log";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";
const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActivePlayer(gameTurns){
  let curPlayer = 'X';
      if(gameTurns.length > 0 && gameTurns[0].player ==='X'){
        curPlayer = 'O';
      }
      return curPlayer;
}
function App() {
 const[players,setPlayers] = useState({'X':'Player 1','O':'Player 2'});
  const[gameTurns,setGameTurns] = useState([]);
  
  //const [activePlayer,setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array => [...array])];
    for(const turn of gameTurns){
        const{square,player} = turn;
        const {row,col} = square;
        gameBoard[row][col]=player;
    }

  let winner;

  for(const combination of WINNING_COMBINATIONS){

    const first=gameBoard[combination[0].row][combination[0].column]; 
    const second=gameBoard[combination[1].row][combination[1].column];
    const third=gameBoard[combination[2].row][combination[2].column];

      if(first && first === second && first === third){
        winner=players[first];
      }

  }

  const hasDraw = gameTurns.length===9 && !winner;
  function handleSelect(rowIndex,colIndex){
    //setActivePlayer((curActivPlayer)=> curActivPlayer==='X'?'O':'X');
    setGameTurns(prevTurns => {
      const curPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square:{row:rowIndex,col:colIndex},player:curPlayer}, ...prevTurns];
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handleName(symbol,newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]:newName
      };
    });
     
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          
          <Player initialName="Player-1" symbol="X" isActive={activePlayer==='X'} onChangeName={handleName}/>
          <Player initialName="Player-2" symbol="O" isActive={activePlayer==='O'} onChangeName={handleName}/>

        </ol>
        {(winner || hasDraw)&& <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelect} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
