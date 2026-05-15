let choices = document.querySelectorAll(".choice");

let userScore = 0;
let computerScore = 0;

let you = document.getElementById("you");
let comp = document.getElementById("computer");
let msg = document.getElementById("msg");

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
};

function playgame(userChoice) {
    let computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        msg.innerText = "It's a tie!";
        msg.style.backgroundColor = "gray";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        you.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } 
    else {
        computerScore++;
        comp.innerText = computerScore;
        msg.innerText = "Computer wins!";
        msg.style.backgroundColor = "red";
    }
}