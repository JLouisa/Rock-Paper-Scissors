/* 

I need to get 1 of 3 random choice from a computer

Create getComputerChoice function
use the random math function to get a number
multiple by 100 (because it come in decimals)
Remove any remaining decimals
if the number is below 0 and 33 log "Rock"
if the number is above 66 log "Scissors"
if the number is between 33 and 66 log "Paper"
print computer choice 


 -- added exercise code --
//Create Player choice
//Create rule for the game
    //Rock beats Scissors
    //Scissors beats Paper
    //Paper beats Rock
//Compare Player choice with Computer Choice
//Choose the winner
//Print who wins in console */

//Rock-Paper-Scissor Function


function game(){
    function playRound(playerSelection, computerSelection) {
 
       
    pSelection = prompt("Choose your Weapon!", "rock");
        if(pSelection == null || pSelection == undefined) {return alert("It's a shame you don't want to play :(")}

    let randomCC = Math.random().toFixed(1)*10;
    let choiceComp;
        if(randomCC < 3){choiceComp = "rock"}
            else {if(randomCC > 6) {choiceComp = "paper"}
                else {choiceComp = "scissors"}
                }; 
    playerSelection = pSelection.toLowerCase();
    computerSelection = choiceComp;
    console.log("Player => " + playerSelection);
    console.log("Computer => " + choiceComp);

    if(playerSelection === computerSelection) {return ("It's a tie! Try again")}
        else {if(playerSelection ==="rock" && computerSelection === "scissors") {return ("You win! Rock beats Scissors")}
        else {if(playerSelection ==="scissors" && computerSelection === "paper") {return ("You win! Scissors beats Paper")}
        else {if(playerSelection ==="paper" && computerSelection === "rock") {return ("You win! Paper beats Rock")}
        else {if(computerSelection === "rock") {return ("You lose! Rock beats Scissors")}
        else {if(computerSelection === "scissors") {return ("You lose! Scissors beats paper")}
        else {return ("You lose! Paper beats Rock")
    }}}}}}
    }
return playRound()}

let gameWin = 0;
let gameLose = 0;
let gameTie = 0;
let result;

//Round counting
for(i = 1; i < 6; i++){
    console.log("Round " + i);
    result = game()
    console.log(result)
    if(result == undefined){ i= 10}
    else {if(result == "You win! Rock beats Scissors" || result == "You win! Scissors beats Paper" || result == "You win! Paper beats Rock") {++gameWin}
    else {if(result == "You lose! Paper beats Rock" || result == "You lose! Scissors beats paper" || result == "You lose! Rock beats Scissors") {++gameLose}
    else {++gameTie}}};
    if(i < 6) {console.log("You won " + gameWin + " and lost " + gameLose + " with " + gameTie + " ties!")};
}