// Write the logic to get the computer choice
// ¬ Use a random number generator
// ¬ assign "Rock" "Paper" or "Scissors" to randomly generated number
// ¬ return result to the log
// ¬ *test before progressing*

// Write the logic for the human choice
// ¬ use a prompt
// ¬ *test return in console*

// Declare players' score variables
// ¬ create variables for computer score and human score
// ¬ start both scores at 0

// Write the logic for 1 round
// ¬ use the logic for human and computer choice
// ¬ compare choices to choose a winner
// ¬ make human choice case-insensitive
// ¬ write the logic to declare a round-winner to the console (e.g. Computer wins: Paper beats Rock!)

let humanScore = 0
let computerScore = 0

function getHumanChoice(humanChoice) {
    return humanChoice
}

let humanChoice = prompt("Rock, paper, or scissors?")
console.log("Player: " + humanChoice.toUpperCase())

function getComputerChoice(computerChoice) {
return computerChoice
}
let computerChoice;

Math.random()
if (Math.random() > 0.3 && Math.random() <= 0.6) {
computerChoice = "Rock"
} else if (Math.random() < 0.3) {
computerChoice = "Paper"
} else computerChoice = "Scissors"
console.log("Computer: " + computerChoice.toUpperCase())

function playRound(humanChoice, computerChoice) {
   return humanChoice, computerChoice
   
   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
