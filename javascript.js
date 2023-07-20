
const rock = document.querySelector("#rockSelect");
const paper = document.querySelector("#paperSelect");
const scissors = document.querySelector("#scissorsSelect");
const announce = document.querySelector('#announcement');
const computerShow = document.querySelector('#computerChoice');
let player;

  //Rounds
let gameWin = 0;
let gameLose = 0;
let gameTie = 0;
let roundB = 1;
let result;

const round = document.querySelector('.roundBoard');
round.textContent = roundB;

const won = document.querySelector('.wonBoard');
won.textContent = gameWin;

const lose = document.querySelector('.loseBoard');
lose.textContent = gameLose;

function roundsCount() {
        if(gameWin > 4) {alert("You WON against the Computer!"); location.reload()};
        if(gameLose > 4) {alert("You LOST against the Computer!"); location.reload()};
    }

//Player selection UI
rock.addEventListener('click', () => {
    player = "rock";
    announce.textContent = (game());
    roundsCount()
  });

paper.addEventListener('click', () => {
    player ="paper";
    announce.textContent = (game());
    roundsCount()
  });

scissors.addEventListener('click', () => {
    player = "scissors";
    announce.textContent = (game());
    roundsCount()
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
    computerShow.textContent = choiceComp;
    
//Game Rules
    if(playerSelection === computerSelection) {round.textContent = roundB++; return ("It's a tie! Try again")}
        else {if(playerSelection ==="rock" && computerSelection === "scissors") {round.textContent = roundB++; won.textContent = ++gameWin; return ("You win! Rock beats Scissors")}
        else {if(playerSelection ==="scissors" && computerSelection === "paper") {round.textContent = roundB++; won.textContent = ++gameWin; return ("You win! Scissors beats Paper")}
        else {if(playerSelection ==="paper" && computerSelection === "rock") {round.textContent = roundB++; won.textContent = ++gameWin; return ("You win! Paper beats Rock")}
        else {if(computerSelection === "rock") {round.textContent = roundB++; lose.textContent = ++gameLose; return ("You lose! Rock beats Scissors")}
        else {if(computerSelection === "scissors") {round.textContent = roundB++; lose.textContent = ++gameLose; return ("You lose! Scissors beats paper")}
        else {round.textContent = roundB++; lose.textContent = ++gameLose; return ("You lose! Paper beats Rock")
    }}}}}}
    }
return playRound()
}