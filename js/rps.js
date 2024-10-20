// Choice buttons 
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.setAttribute("id", "btnRock");
btnPaper.setAttribute("id", "btnPaper");
btnScissors.setAttribute("id", "btnScissors");

// Label buttons and add event listeners
const btns = [btnRock, btnPaper, btnScissors];
btns.forEach(function(btn) {
    const selection = btn.id.slice(3);

    btn.textContent = selection;
    btn.setAttribute("style", "margin-bottom: 16px");
    btn.addEventListener("click", function() {
        playRound(selection, getComputerChoice());
    }
);

    document.body.appendChild(btn);
})

// Keep the score
let humanScore = 0, computerScore = 0;
const divScore = document.createElement("div");
divScore.setAttribute("id", "divScore");
divScore.setAttribute("style", "margin-bottom: 16px;");
divScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
document.body.appendChild(divScore);

// Announcements
const divAnnounce = document.createElement("div");
divAnnounce.setAttribute("id", "divAnnounce");
divAnnounce.textContent = "Rock, paper or scissors? Click a button to play." +
" First to five points wins!"
document.body.appendChild(divAnnounce);


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
            updateAnnounce(message)
            humanScore++;
            updateScore();
            break;

        case "Lose":
            message = `You lose! Your choice (${humanChoice}) is beaten by the computer's choice (${computerChoice})`;
            updateAnnounce(message)
            computerScore++;
            updateScore();
            break;

    }

    checkForWinner();
    
}

function updateScore() {
    divScore.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function updateAnnounce(message) {
    divAnnounce.textContent = message;
};

function checkForWinner() {
    if (computerScore == 5 || humanScore == 5) {
        if (computerScore == 5) {
            announceWinner("computer");
        } else {
            announceWinner("human");
        }
        stopGame();
    }
}



function announceWinner(winner) {
    let winnerMessage;
    if (winner == "computer") {
        winnerMessage = "The computer wins the game! Refresh the page to start a new game."
    } else {
        winnerMessage = "You win the game! Refresh the page to start a new game."
    }
    updateAnnounce(winnerMessage);
};

function stopGame() {
    btns.forEach(function(btn) {
        btn.remove();
    })
};


