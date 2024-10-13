getComputerChoice = function() {
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

getHumanChoice = function () {
    let choice = prompt("Rock, paper or scissors?");
    return(choice);
}

}