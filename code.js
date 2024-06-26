let winCount = 0;
let lossCount = 0;
let tieCount = 0;
playGame();

function computerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {return "ROCK";}
    if (rand == 1) {return "PAPER";}
    if (rand == 2) {return "SCISSORS";}
}

function humanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors");
    choice = choice.toUpperCase();
    return choice;
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
    console.log(`The Computer chose ${computerChoice}.`);
    console.log(`${outcome}!`)    
    return outcome;
}

function playGame() {
    let roundOutcome = playRound(humanChoice(), computerChoice());
    if (roundOutcome == "YOU WIN") {winCount++;}
    if (roundOutcome == "YOU LOSE") {lossCount++;}
    if (roundOutcome == "IT'S A TIE") {tieCount++;}
    console.log(`Wins: ${winCount}, Losses: ${lossCount}, Ties: ${tieCount}`);
    if (winCount + lossCount + tieCount == 5) {
        if (winCount > lossCount) {console.log("Game Over! You Win!");}
        if (winCount < lossCount) {console.log("Game Over! You Lost!");}
        if (winCount == lossCount) {console.log("Game Over! It's a Tie!");}
    } else {playGame();}
}