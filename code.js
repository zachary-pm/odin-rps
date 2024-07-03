let winCount = 0;
let lossCount = 0;
let tieCount = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const player = document.querySelector("#player");
const cpu = document.querySelector("#cpu");
const result = document.querySelector("#result");
const playerScore = document.querySelector("#playerScore");
const cpuScore = document.querySelector("#cpuScore");
const ties = document.querySelector("#ties");
const gameOver = document.querySelector("#gameOver");
const body = document.querySelector("body");


rock.addEventListener("click", () =>{
    playRound("ROCK", computerChoice())
});

paper.addEventListener("click", () =>{
    playRound("PAPER", computerChoice())
});

scissors.addEventListener("click", () =>{
    playRound("SCISSORS", computerChoice())
});




function computerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {return "ROCK";}
    if (rand == 1) {return "PAPER";}
    if (rand == 2) {return "SCISSORS";}
}


function playRound (humanChoice, computerChoice) {
    let outcome;
    if (humanChoice == "ROCK") {
        if (computerChoice == "ROCK") {outcome = "IT'S A TIE";}
        if (computerChoice == "PAPER") {outcome = "YOU LOSE";}
        if (computerChoice == "SCISSORS") {outcome = "YOU WIN";}
    } else if (humanChoice == "PAPER") {
        if (computerChoice == "ROCK") {outcome = "YOU WIN";}
        if (computerChoice == "PAPER") {outcome = "IT'S A TIE";}
        if (computerChoice == "SCISSORS") {outcome = "YOU LOSE";}
    } else if (humanChoice == "SCISSORS") {
        if (computerChoice == "ROCK") {outcome = "YOU LOSE";}
        if (computerChoice == "PAPER") {outcome = "YOU WIN";}
        if (computerChoice == "SCISSORS") {outcome = "IT'S A TIE";}
    } else {
        return;
    }
    console.log(`You chose ${humanChoice}.`);
    player.textContent = `You Chose: ${humanChoice}`;
    console.log(`The Computer chose ${computerChoice}.`);
    cpu.textContent = `The Machine Chose: ${computerChoice}`;
    console.log(`${outcome}!`)
    result.textContent = `${outcome}!`    
    keepScore(outcome);
}

function keepScore(outcome) {
    if (outcome == "YOU WIN") {
        winCount++;
        playerScore.textContent = `Your Score: ${winCount}`;
    } else if (outcome == "YOU LOSE") {
        lossCount++;
        cpuScore.textContent = `The Machine's Score: ${lossCount}`;
    } else {
        tieCount++;
        ties.textContent = `Ties: ${tieCount}`;
    }
    if (lossCount == 5 || winCount == 5) {endGame();}
}

function endGame() {
    if (winCount == 5) {
        gameOver.textContent = "You Win!"
    } else {
        gameOver.textContent = "The Machine is Victorious!"
    }
    const playAgain = document.createElement("button");
    playAgain.setAttribute("class", "playAgain");
    playAgain.textContent = "Play Again";
    body.appendChild(playAgain);
    body.removeChild(rock);
    body.removeChild(paper);
    body.removeChild(scissors);

    

    playAgain.addEventListener("click", () => {
        winCount=0;
        lossCount=0;
        tieCount=0;
        playerScore.textContent = `Your Score: ${winCount}`;
        cpuScore.textContent = `The Machine's Score: ${lossCount}`;
        ties.textContent = `Ties: ${tieCount}`;
        player.textContent = `You Chose: `;
        cpu.textContent = `The Machine Chose: `;
        result.textContent = ``;    
        body.insertBefore(rock, player);
        body.insertBefore(paper, player);
        body.insertBefore(scissors, player);
        body.removeChild(playAgain);
        gameOver.textContent = "";
    })

}