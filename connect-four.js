import {Game} from "./game.js"

let game = undefined
let playerOne= document.getElementById('player-1-name');
let playerTwo= document.getElementById('player-2-name');
let newgame = document.getElementById("new-game");
let click = document.getElementById("click-targets")

function updateUI() {
  let board = document.getElementById("board-holder");
  if (game === undefined) {
      board.setAttribute("class", "is-invisible")
  }else {
      board.setAttribute('class', '');
      let gameName=document.getElementById('game-name');
      gameName.innerHTML= game.getName();
      if (game.currentPlayer === 1) {
        click.classList.add("black")
        click.classList.remove("red")
    } else {
        click.classList.add("red")
        click.classList.remove("black")
    }
  }
  for (let columnIndex=0; columnIndex<=6; columnIndex++) {
        const isColumnFull= game.isColumnFull(columnIndex);
        const columnID= `column-${columnIndex}`;
        const column=document.getElementById(columnID);
        if (isColumnFull) {
              column.classList.add('full');
        }else{
              column.classList.remove('full');
        }
  }

  for ( let rowIndex = 0; rowIndex <= 5; rowIndex++) {
    for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
      let square = document.querySelector(`#square-${rowIndex}-${columnIndex}`)
      square.innerHTML = ""
      const playerNumber = game.getTokenAt(rowIndex,columnIndex)
      if(playerNumber === 1) {
        const token = document.createElement("div");
        token.classList.add("token")
        token.classList.add("black")
        square.appendChild(token)
      }
      if (playerNumber === 2) {
        const token = document.createElement("div");

        token.classList.add("token")
        token.classList.add("red")
        square.appendChild(token)
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", (event) =>{

  click.addEventListener("click", event => {
    let targetId = event.target.id

    if(!targetId.startsWith("column-")) {
     return
   }

   let columnPos = Number.parseInt(targetId[targetId.length - 1])

   game.playInColumn(columnPos)

  updateUI()
  })

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
