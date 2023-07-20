
const rock = document.querySelector("#rockSelect");
const paper = document.querySelector("#paperSelect");
const scissors = document.querySelector("#scissorsSelect");
const announce = document.querySelector('#announcement')
let player;

//Player selection UI
rock.addEventListener('click', () => {
    player = "rock";
    announce.textContent = (game());
  });

paper.addEventListener('click', () => {
    player ="paper";
    announce.textContent = (game());
  });

scissors.addEventListener('click', () => {
    player = "scissors";
    announce.textContent = (game());
  });


//Game logic
function game() {
    function playRound(playerSelection, computerSelection) {

//Computer Selection
    let randomCC = Math.random().toFixed(1)*10;
    let choiceComp;
        if(randomCC < 3){choiceComp = "rock"}
            else {if(randomCC > 6) {choiceComp = "paper"}
            else {choiceComp = "scissors"}}; 

    playerSelection = player;
    computerSelection = choiceComp;

    console.log("Player => " + playerSelection);
    console.log("Computer => " + choiceComp);
    
//Game Rules
    if(playerSelection === computerSelection) {return ("It's a tie! Try again")}
        else {if(playerSelection ==="rock" && computerSelection === "scissors") {return ("You win! Rock beats Scissors")}
        else {if(playerSelection ==="scissors" && computerSelection === "paper") {return ("You win! Scissors beats Paper")}
        else {if(playerSelection ==="paper" && computerSelection === "rock") {return ("You win! Paper beats Rock")}
        else {if(computerSelection === "rock") {return ("You lose! Rock beats Scissors")}
        else {if(computerSelection === "scissors") {return ("You lose! Scissors beats paper")}
        else {return ("You lose! Paper beats Rock")
    }}}}}}
    }
return playRound()
}

let gameWin = 0;
let gameLose = 0;
let gameTie = 0;
let roundB = 0;
let result;

const round = document.querySelector('.roundBoard');
round.textContent = roundB;

const won = document.querySelector('.wonBoard');
won.textContent = gameWin;

const lose = document.querySelector('.loseBoard');
lose.textContent = gameLose;

// // Round counting
// for(i = 1; i < 6; i++) {
//     console.log("Round " + i);
//     result = game()
//     console.log(result)
//     if(result == undefined){ i = 10}
//     else {if(result == "You win! Rock beats Scissors" || result == "You win! Scissors beats Paper" || result == "You win! Paper beats Rock") {++gameWin}
//     else {if(result == "You lose! Paper beats Rock" || result == "You lose! Scissors beats paper" || result == "You lose! Rock beats Scissors") {++gameLose}
//     else {++gameTie}}};
//     if(i < 6) {console.log("You won " + gameWin + " and lost " + gameLose + " with " + gameTie + " ties!")};
// }