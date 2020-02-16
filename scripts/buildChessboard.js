// make the chessboard
var board = document.getElementsByClassName("chessboard")[0],
  size = 10,
  countdown = 100,
  result = "",
  playerCount = 2,
  newSpace = 0;

let countUp = false;
for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2) {
      result += `<div class='white'>${countdown}<p class="question">?</p></div>`;
    } else {
      result += `<div class='black'>${countdown}</div>`;
    }
    countdown = (countUp == false) ? (countdown - 1) : (countdown + 1);
  }
  countdown = (countUp == true) ? countdown - 10 - 1 : countdown - 10 + 1;
  countUp = (countUp == true) ? false : true;
  result
    += "\n";
}

board.innerHTML += result;

board.children[1].removeChild(board.children[1].childNodes[1]);
board.children[90].removeChild(board.children[90].childNodes[1]);

// create pieces
board.children[90].appendChild(document.createElement("div"));
board.children[90].appendChild(document.createElement("div"));
board.children[90].appendChild(document.createElement("div"));
board.children[90].appendChild(document.createElement("div"));

board.children[90].children[0].classList.add("playerPiece", "player1");
board.children[90].children[1].classList.add("playerPiece", "player2");
board.children[90].children[2].classList.add("playerPiece", "player3", "hidden");
board.children[90].children[3].classList.add("playerPiece", "player4", "hidden");

// get the width of the squares and set the height to be equivalent
function squareHeight() {
  let square = document.getElementsByClassName("white")[0],
    whiteSquares = document.querySelectorAll(".white"),
    blackSquares = document.querySelectorAll(".black"),
    squareWidth,
    squareMinWidth,
    squareMaxWidth;
  squareWidth = getComputedStyle(square).width;
  squareMinWidth = getComputedStyle(square)[84];
  squareMaxWidth = getComputedStyle(square)[82];
  whiteSquares.forEach(white => {
    white.style.height = squareWidth;
    white.style.minHeight = squareMinWidth;
    white.style.maxHeight = squareMaxWidth;
  });
  blackSquares.forEach(black => {
    black.style.height = squareWidth;
    black.style.minHeight = squareMinWidth;
    black.style.maxHeight = squareMaxWidth;
  });
}

function win(player) {
  alert(`Player ${player} has won the game!`);
  $("#playGame").children("button").attr("onclick", `alert('Player ${player} has won the game!')`);
}