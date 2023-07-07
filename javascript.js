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

function getComputerChoice() {
    if(random < 33){console.log("Rock")}
        else {if(random > 66) {console.log("Paper")}
            else {console.log("Scissors")}
            }
}

getComputerChoice();