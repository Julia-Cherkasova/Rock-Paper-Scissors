let choice = ["rock", "paper", "scissors"];
let playerSelection = document.querySelector(".player");
let computerCount = "";
let playerCount = "";
let out = document.querySelector(".out-1");

function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
    }

let computerChoice = getComputerChoice()

function playRound (){

    let playerChoiceValue = playerSelection.value;

    if (computerChoice == "rock" && playerChoiceValue.toLowerCase() == "scissors"){
        out.innerHTML = "You Lose! Rock beats scissors!";
    }
    else if(computerChoice == "scissors" && playerChoiceValue.toLowerCase() == "rock"){
        out.innerHTML = "You win!!! Rock beats scissors!";
    }
    else if (computerChoice == "scissors" && playerChoiceValue.toLowerCase() == "paper"){
        out.innerHTML = "You Lose! Scissors beats Paper!";
    }
    else if (computerChoice == "paper" && playerChoiceValue.toLowerCase() == "scissors"){
        out.innerHTML = "You win!!! Scissors beats Paper!";
    }
    else if (computerChoice == "paper" && playerChoiceValue.toLowerCase() == "rock"){
        out.innerHTML = "You Lose! Paper beats rock!";
    }
    else if (computerChoice == "rock" && playerChoiceValue.toLowerCase() == "paper"){
        out.innerHTML = "You win!!! Paper beats rock!";
    }
    else {
        out.innerHTML = "Something went wrong";
    }
}

document.querySelector(".b-1").onclick = playRound;

