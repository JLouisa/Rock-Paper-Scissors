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
let random = Math.random().toFixed(2)*100;
let choice

function getComputerChoice() {
        
    if(random < 33){choice = "Rock";}
        else {if(random > 66) {choice = "Paper"}
            else {choice = "Scissors"}
            }
    console.log(choice);
}

getComputerChoice();

/* 
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

*/ 
//Create function to compete against the computer
function calcCompete(playerSelection,computerSelection){

    console.log(playerSelection);
    //console.log(computerSelection);

   // if(playerSelection === "Scissors"){console.log("Win")}
    //    else {console.log("Lose")};

   //if(computerSelection === "Rock"){console.log("Win")}
   // else {console.log("Lose")};
   
    if(playerSelection === computerSelection){console.log("It's a tie!")}
        else {console.log("Lose")};
}

calcCompete("Scissors",choice);