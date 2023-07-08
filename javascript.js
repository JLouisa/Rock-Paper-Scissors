/* 

I need to get 1 of 3 random choice from a computer

Create getComputerChoice function
use the random math function to get a number
multiple by 100 (because it come in decimals)
Remove any remaining decimals
if the number is below 0 and 33 log "Rock"
if the number is above 66 log "Scissors"
if the number is between 33 and 66 log "Paper"
print computer choice */


//use the random math function to get a number

/*
let random = Math.random().toFixed(2)*100;
let choice

function getComputerChoice() {
        
    if(random < 33){choice = "Rock";}
        else {if(random > 66) {choice = "Paper"}
            else {choice = "Scissors"}
            }
    console.log("Computer => " + choice);
}


Create function to compete against the computer

computerSelection is the choice that computer makes
computerSelection comes from the previous function
computerSelection equals getComputerChoice()
playerSelection is the choice that the player makes inside the function
playerSelection will be filled inside the compete function
add rules to win at Rock-Paper-Scissors
Rock wins over Scissors
Scissors wins over Paper
Paper wins over Rock
The same is a tie


//Create function to compete against the computer
function calcCompete(playerSelection,computerSelection){

   
    const plyerLowerCase = playerSelection.toLowerCase();
    const computerLowerCase = computerSelection.toLowerCase();
    //console.log(computerSelection);

   // if(playerSelection === "Scissors"){console.log("Win")}
    //    else {console.log("Lose")};

   //if(computerSelection === "Rock"){console.log("Win")}
   // else {console.log("Lose")};
   
   // if(playerSelection === computerSelection){console.log("It's a tie!")}
     //   else {console.log("Lose")};
    
     //console.log("Computer => " + choice)
     console.log("Player => " + playerSelection);
    
    if(plyerLowerCase == computerLowerCase) {console.log("It's a tie! Try again!")}
        else {if(plyerLowerCase == "rock" && computerLowerCase == "scissors"){console.log("Player Wins! Rock beats Scissors")}
            else {if(plyerLowerCase == "scissors" && computerLowerCase == "paper"){console.log("Player Wins! Scissors beats Paper")}
                 else {if(plyerLowerCase == "paper" && computerLowerCase == "rock"){console.log("Player Wins! Paper beats Rock")}
                   // else {computerSelection == "Rock" ? console.log("Computer Wins")};
                     else {computerLowerCase == "rock" && plyerLowerCase == "scissors" ? console.log("Computer Wins! Rock beats Scissors") :
                     computerLowerCase == "scissors" && plyerLowerCase == "paper" ? console.log("Computer Wins! Scissors beats Paper") : 
                     console.log("Computer Wins! Paper beats Rock");}
                     }
                 }
            }
    
}

getComputerChoice();

calcCompete("Rock",choice);



/*
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){console.log("It's a tie! Try again!")}
    else {if(playerSelection == "rock" && computerSelection == "scissors"){console.log("Player Wins! Rock beats Scissors")}
        else {if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){console.log("Player Wins! Scissors beats Paper")}
             else {if(playerSelection == "paper" && computerSelection == "rock"){console.log("Player Wins! Paper beats Rock")}
                 else {computerSelection == "rock" && playerSelection == "scissors" ? console.log("Computer Wins! Rock beats Scissors") :
                        computerSelection == "scissors" && playerSelection == "paper" ? console.log("Computer Wins! Scissors beats Paper") : 
                        console.log("Computer Wins! Paper beats Rock");}
  }}}}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  */

//-------------------------- Attempt #2 ---------------------------//
const randomCC = Math.random().toFixed(2)*100;

function getComputerChoice(choiceComp) {

    if(randomCC < 33){choiceComp = "rock"}
        else {if(randomCC > 66) {choiceComp = "paper"}
            else {choiceComp = "scissors"}
            };
    return choiceComp;
}


/* -- added exercise code --
//Create Player choice
//Create rule for the game
    //Rock beats Scissors
    //Scissors beats Paper
    //Paper beats Rock
//Compare Player choice with Computer Choice
//Choose the winner
//Print who wins in console

function roundOfRPS(playerSelection, computerSelection) {

playerSelection = player.toLowerCase();
computerSelection = computer.toLowerCase();

//Winning
if(playerSelection === computerSelection) {console.log("It's a tie! Try again")}
    else {if(playerSelection ==="rock" && computerSelection === "scissors") {console.log("You win! Rock beats Scissors")}
        else {if(playerSelection ==="scissors" && computerSelection === "paper") {console.log("You win! Scissors beats Paper")}
            else {if(playerSelection ==="paper" && computerSelection === "rock") {console.log("You win! Paper beats Rock")}
//Losing
            else {if(computerSelection === "rock") {console.log("You lose! Rock beats Scissors")}
            else {if(computerSelection === "scissors") {console.log("You lose! Scissors beats paper")}
            else {console.log("You lose! Paper beats Rock")
            return playerSelection, computerSelection;
}}}}}}
}

const player = "Paper"
const computer = getComputerChoice();

console.log("Player => " + player);
console.log("Computer => " + getComputerChoice());

roundOfRPS(player, getComputerChoice());

function playRound() {

if(playerSelection === computerSelection) {console.log("It's a tie! Try again")}
    else {if(playerSelection ==="rock" && computerSelection === "scissors") {console.log("You win! Rock beats Scissors")}
        else {if(playerSelection ==="scissors" && computerSelection === "paper") {console.log("You win! Scissors beats Paper")}
            else {if(playerSelection ==="paper" && computerSelection === "rock") {console.log("You win! Paper beats Rock")}
            else {if(computerSelection === "rock") {console.log("You lose! Rock beats Scissors")}
            else {if(computerSelection === "scissors") {console.log("You lose! Scissors beats paper")}
            else {console.log("You lose! Paper beats Rock")
}}}}}}
  }
   
  const playerSelection = "rock".toLowerCase();
  const computerSelection = getComputerChoice();
  console.log((playRound()));

*/

function playRound(computerSelection, playerSelection) {

if(playerSelection === computerSelection) {return ("It's a tie! Try again")}
    else {if(playerSelection ==="rock" && computerSelection === "scissors") {return ("You win! Rock beats Scissors")}
        else {if(playerSelection ==="scissors" && computerSelection === "paper") {return ("You win! Scissors beats Paper")}
            else {if(playerSelection ==="paper" && computerSelection === "rock") {return ("You win! Paper beats Rock")}
            else {if(computerSelection === "rock") {return ("You lose! Rock beats Scissors")}
            else {if(computerSelection === "scissors") {return ("You lose! Scissors beats paper")}
            else {return ("You lose! Paper beats Rock")
}}}}}}
}
   
  const playerSelection = "rock".toLowerCase();
  const computerSelection = getComputerChoice();

  console.log("Player => " + playerSelection)
  console.log("Computer => " + getComputerChoice());

  console.log((playRound(computerSelection, playerSelection)));
