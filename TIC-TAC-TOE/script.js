let boxes = document.querySelectorAll(".box");
let turn = true;   
let count = 0;
let isWinner = false;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;

    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }

    count++;
    checkWinner();

    // draw condition
    if (count === 9 && !isWinner) {
      let msg = document.querySelector("#msg");
      msg.innerText = "It's a draw!";
      document.querySelector(".winner-msg").classList.remove("hide");
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let a = boxes[pattern[0]].innerText;
    let b = boxes[pattern[1]].innerText;
    let c = boxes[pattern[2]].innerText;

    if (a === b && b === c && a !== "") {
      isWinner = true;
      showWinner(a);
    }
  }
};

const showWinner = (winner) => {
  let msg = document.querySelector("#msg");
  msg.innerText = `Player ${winner} wins!`;
  document.querySelector(".winner-msg").classList.remove("hide");
  disableBtn();
};

const disableBtn = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBtn = () => {
  boxes.forEach((box) => {
    box.disabled = false;
  });
};

const newGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });

  turn = true;
  count = 0;
  isWinner = false;

  enableBtn();
  document.querySelector(".winner-msg").classList.add("hide");
};

document.querySelector(".reset-btn").addEventListener("click", newGame);
document.querySelector(".play-again").addEventListener("click", newGame);