// Choice buttons 
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.setAttribute("id", "btnRock");
btnPaper.setAttribute("id", "btnPaper");
btnScissors.setAttribute("id", "btnScissors");

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    let choice;

    if (choiceInt == 0) {
        choice = "rock";
    } else if (choiceInt == 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return(choice);
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return(choice);
}


function playGame() {

    let humanScore = 0, computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let outcome;
        
        if (humanChoice == computerChoice) {
            outcome = "Draw";
        } else if (humanChoice == "rock") {
            switch (computerChoice) {
                case "paper":
                    outcome = "Lose";
                    break;
                case "scissors":
                    outcome = "Win";
                    break;
            }
        } else if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    outcome = "Win";
                    break;
                case "scissors":
                    outcome = "Lose";
                    break;
            }
        } else if (humanChoice == "scissors") {
            switch (computerChoice) {
                case "rock":
                    outcome = "Lose";
                    break;
                case "paper":
                    outcome = "Win";
                    break;
            }
        }
    
        let message;
        switch (outcome) {
            case "Draw":
                message = `It's a draw! You and the computer both chose ${humanChoice}`;
                break;
        
            case "Win":
                message = `You win! Your choice (${humanChoice}) beats the computer's choice (${computerChoice})`;
                humanScore++;
                break;
    
            case "Lose":
                message = `You lose! Your choice (${humanChoice}) is beaten by the computer's choice (${computerChoice})`;
                computerScore++;
                break;
    
        }
        
        console.log(message);
    }

    

}

playGame();

