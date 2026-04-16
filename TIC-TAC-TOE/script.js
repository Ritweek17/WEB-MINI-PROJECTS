let boxex = document.querySelectorAll(".box");
let turn = "True";
count = 0;
boxex.forEach((box) => {
    box.addEventListener("click", () => {
            count++;
            if (turn === "True") {
                box.innerText = "X";
                turn = "False";
            } else {
                box.innerText = "O";
                turn = "True";
            }
            Winner();
        })
});

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

const Winner = () => {
    for (pattern of winPatterns) {
        a = boxex[pattern[0]].innerText;
        b = boxex[pattern[1]].innerText;
        c = boxex[pattern[2]].innerText;
        if (a === b && b === c && a !== "") {
            showwinner(a);
        }
    }
};

const showwinner = (winner) => {
    let msg = document.querySelector("#msg");
    msg.innerText = `Player ${winner} wins!`;
    let winnerMsg = document.querySelector(".winner-msg");
    winnerMsg.classList.remove("hide");
        Disablebtn();
}

const Disablebtn = () => {
    boxex.forEach((box) => {
        box.disabled = true;
    }); 
}

const Enablebtn = () => {
    boxex.forEach((box) => {
        box.disabled = false;
    });
}

const newGame = () => {
    boxex.forEach((box) => {
        box.innerText = "";
        turn = "True";
        Enablebtn();
        let winnerMsg = document.querySelector(".winner-msg");
        winnerMsg.classList.add("hide");
    });
}

let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", newGame);

let newgameBtn = document.querySelector(".play-again");
newgameBtn.addEventListener("click", newGame);

if (count === 9 && !winner) {
    let msg = document.querySelector("#msg");
    msg.innerText = "It's a draw!";
}