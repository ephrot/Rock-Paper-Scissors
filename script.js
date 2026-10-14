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
// ¬ write the logic to declare a round-winner to the console (e.g. Computer wins!)

// Write the logic for a full 5-round game
// ¬ create a new function that calls the playRound function
// ¬ initialise scores at 0 in game function
// ¬ write the logic to call playRound 5 times

let humanScore = 0
let computerScore = 0

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?")
    return humanChoice.toUpperCase()
}


function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber < 1/3) {
        return "ROCK"
    } else if (randomNumber < 2/3) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

let gameCounter = 0
do{ 
    let roundNumber = gameCounter+1
    console.log("Round " + roundNumber)
    gameCounter++
    function playRound(humanChoice, computerChoice){
    if (computerChoice === humanChoice) {
        let draw = console.log("Draw.")
        return draw
    }
    if (computerChoice === "ROCK") {
        if (humanChoice === "PAPER") {
            humanScore++
            console.log("You win: " + humanChoice + " beats " + computerChoice)
        } else {
            computerScore++
            console.log("Computer wins: " + computerChoice + " beats " + humanChoice)
        }
    }   
    if (computerChoice === "PAPER") {
        if (humanChoice === "SCISSORS") {
            humanScore++
            console.log("You win: " + humanChoice + " beats " + computerChoice)
        } else {
            computerScore++
            console.log("Computer wins: " + computerChoice + " beats " + humanChoice)
        }
    }   
    if (computerChoice === "SCISSORS") {
        if (humanChoice === "ROCK") {
            humanScore++
            console.log("You win: " + humanChoice + " beats " + computerChoice)
        } else {
            computerScore++
            console.log("Computer wins: " + computerChoice + " beats " + humanChoice)
        }
    }   
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

console.log("Player score: " + humanScore + " Computer score: " + computerScore)
} while(gameCounter < 5)
    if(gameCounter === 5) {
    if(humanScore > computerScore) {
        console.log("Congratulations, you win this game!")
    } else if (humanScore === computerScore) {
        console.log("This game is a draw")
    } else {
        console.log("The computer wins this game")
    }
}
