// Write the logic to get the computer choice
// ¬ Use a random number generator
// ¬ assign "Rock" "Paper" or "Scissors" to randomly generated number
// ¬ return result to the log
// ¬ *test before progressing*
// Write the logic for the human choice
// ¬ use a prompt
// ¬ *test return in console*


let result;

function getHumanChoice(humanChoice) {
    return humanChoice
}

let humanChoice = prompt("Rock, paper, or scissors?")

console.log(humanChoice)

function getComputerChoice(result) {
return result
}

Math.random()
if (Math.random() > 0.3 && Math.random() <= 0.6) {
result = "Rock"
} else if (Math.random() < 0.3) {
result = "Paper"
} else result = "Scissors"

console.log(result)


