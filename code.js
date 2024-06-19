let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function computerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {return "ROCK";}
    if (rand == 1) {return "PAPER";}
    if (rand == 2) {return "SCISSORS";}
}
