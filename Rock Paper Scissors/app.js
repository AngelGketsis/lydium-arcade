let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const rand = Math.floor(Math.random() * 3);

    return choices[rand];
}

function convertWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertWord(userChoice) + " beats " + convertWord(compChoice) + ". You win!"
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convertWord(userChoice) + " does not beat " + convertWord(compChoice) + ". You loose"
}

function draw() {
    result_p.innerHTML = "It's a draw!"
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, compChoice);
            console.log("User Wins");
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compChoice);
            console.log("Comp Wins");
            break;
        case "pp":
        case "ss":
        case "rr":
            draw();
            console.log("Draw");
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

}


main();