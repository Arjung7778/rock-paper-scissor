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