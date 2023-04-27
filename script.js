let choice = [
    'Rock',
    'Paper',
    'Scissors'
];

function getComputerChoice(){
return choice[Math.floor(Math.random()*choice.length)];
}

function playRound (computerChoice, playerChoice){
    if (computerChoice == "Rock" && playerChoice == "Scissors"){
        return "You Lose! Rock beats scissors!";
    }
    else if(computerChoice == "Scissors" && playerChoice == "Rock"){
        return "You win!!! Rock beats scissors!";
    }
    else if (computerChoice == "Scissors" && playerChoice == "Paper"){
        return "You Lose! Scissors beats Paper!";
    }
    else if (computerChoice == "Paper" && playerChoice == "Scissors"){
        return "You win!!!  Scissors beats Paper!";
    }
    else if (computerChoice == "Paper" && playerChoice == "Rock"){
        return "You Lose! Paper beats rock!";
    }
    else if (computerChoice == "Rock" && playerChoice == "Paper"){
        return "You win!!! Paper beats rock!";
    }
    else {
        return "Something went wrong";
    }
}
