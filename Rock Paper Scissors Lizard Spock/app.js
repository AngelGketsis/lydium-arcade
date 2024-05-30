let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("v");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'v'];
    const rand = Math.floor(Math.random() * 5);

    return choices[rand];
}

function convertWord(letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    if (letter === "s") return "Scissors"
    if (letter === "l") return "Lizard"
    return "Spock"
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
        case "sp":
        case "sl":
        case "pr":
        case "pv":
        case "rl":
        case "rs":
        case "lp":
        case "lv":
        case "vr":
        case "vs":
            win(userChoice, compChoice);
            console.log("User Wins");
            break;
        case "ps":
        case "ls":
        case "rp":
        case "vp":
        case "lr":
        case "sr":
        case "pl":
        case "vl":
        case "rv":
        case "sv":
            lose(userChoice, compChoice);
            console.log("Comp Wins");
            break;
        case "pp":
        case "ss":
        case "rr":
        case "ll":
        case "vv":
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

    lizard_div.addEventListener('click', function () {
        game("l");
    })

    spock_div.addEventListener('click', function () {
        game("v");
    })

}


main();