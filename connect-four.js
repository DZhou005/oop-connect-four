import {Game} from "./game.js"

const game = undefined

function updateUI() {
  const board = document.grabElementById("board-holder")

  if (game === undefined) {
board.setAttribute("class", "is-invisible")
  }
}

windows.addEventListener("DOMContentLoaded", (event) =>{
  let newgame = document.grabElementById("new-game")


  this.name1.addEventListener("keyup", (event) =>{

   if (this.name1 !== undefined && this.name2 !== undefined) {

     newgame.disabled = false
   }
   else {
     newgame.disabled = true
   }
  })
   this.name2.addEventListener("keyup", (event) =>{

    if (this.name1 !== undefined && this.name2 !== undefined) {

      newgame.disabled = false
    }
    else {
      newgame.disabled = true
    }
  })
    newgame.addEventListener("click", (event) =>{
      game = new Game(this.name1, this.name2)
        this.name1 = ""
        this.name2 = ""

      newgame.disabled = true

      updateUI()

    })


})
