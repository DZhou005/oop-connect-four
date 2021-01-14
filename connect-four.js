import {Game} from "./game.js"

let game = undefined
let playerOne= document.getElementById('player-1-name');
let playerTwo= document.getElementById('player-2-name');
let newgame = document.getElementById("new-game");

function updateUI() {
  let board = document.getElementById("board-holder");

  if (game === undefined) {
      board.setAttribute("class", "is-invisible")
  }else {
      board.setAttribute('class', '');
      let gameName=document.getElementById('game-name');
      gameName.innerHTML= game.getName();
  }
}

window.addEventListener("DOMContentLoaded", (event) =>{

      function enableButtonWhenNamesFilled() {
            let playerOneContent= playerOne.value;
            let playerTwoContent= playerTwo.value;
            newgame.disabled= (playerOneContent.length===0 ||
                  playerTwoContent.length===0);
      }

  playerOne.addEventListener("keyup", (event) =>{
      enableButtonWhenNamesFilled();
  })
   playerTwo.addEventListener("keyup", (event) =>{
      enableButtonWhenNamesFilled();
  })

    newgame.addEventListener("click", (event) =>{
      game = new Game(playerOne.value, playerTwo.value)
      playerOne.value = "";
      playerTwo.value = "";
      enableButtonWhenNamesFilled()

      updateUI()
    })


})
