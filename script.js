/*
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}

function computerChoice(){
    getRandomInt(1,3);
    let num = getRandomInt(1,3);
    if (num === 1){
        return "rock";
    }
    else if (num === 2) {
        return "paper";
    }
    else{
        return "scissor";
    }
}

function userChoice(){
    let userInput = prompt("Enter rock, paper or scissor");
    return userInput;
}

function playRound(userSelection, computerSelection){
    if (userSelection === computerSelection){
        return console.log("It's a tie!");
    }
    else if ((userSelection === "rock" && computerSelection === "scissor") || 
        (userSelection === "paper" && computerSelection === "rock") || 
        (userSelection === "scissor" && computerSelection === "paper")){
       
                return console.log("you won!");
}
else{
    return console.log("computer wins!");
    }
}


let user = userChoice();
let computer = computerChoice();
console.log("User choice:", user);
console.log("Computer choice: " ,computer);
playRound(user, computer);  
*/



const buttons = document.querySelectorAll('button');
buttons.forEach(buttons => buttons.addEventListener('click', () => {
    const userSelection = buttons.id;
    const computerSelection = computerChoice();
    playRound(userSelection, computerSelection);
    displayResult(`You chose ${userSelection}, Computer chose ${computerSelection}, ${playRound(userSelection, computerSelection)}`);
}));

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        return resultDiv.textContent = "It's a tie!";
    }
    else if ((userSelection === "rock" && computerSelection === "scissor") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissor" && computerSelection === "paper")) {

        return resultDiv.textContent = "You won!";

    }
    else {
        return resultDiv.textContent = "Computer wins!";
    }

}

function computerChoice() {
    getRandomInt(1, 4);
    let num = getRandomInt(1, 4);
    if (num === 1) {
        return "rock";
    }
    else if (num === 2) {
        return "paper";
    }
    else if (num === 3) {
        return "scissor";
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const resultDiv = document.getElementById('result');
function displayResult(message) {
    resultDiv.textContent = message;
}
displayResult("Make your choice to start the game!");
resultDiv.style.fontSize = "20px";
resultDiv.style.fontWeight = "bold";
resultDiv.style.marginTop = "20px";
resultDiv.style.color = "blue";
resultDiv.style.textAlign = "center";
resultDiv.style.fontFamily = "Arial, sans-serif";
resultDiv.style.minHeight = "50px";
resultDiv.style.border = "2px solid black";
resultDiv.style.padding = "10px";
resultDiv.style.borderRadius = "10px";
resultDiv.style.backgroundColor = "#f0f0f0";
resultDiv.style.width = "60%";
resultDiv.style.margin = "20px auto";
resultDiv.style.boxShadow = "2px 2px 12px rgba(0, 0, 0, 0.1)";
