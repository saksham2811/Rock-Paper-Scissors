const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const text_result = document.getElementById("text-result");
const user_score = document.getElementById("user-score");
const computer_score = document.getElementById("computer-score");

let user = 0;
let computer = 0;

function getWord(choice){
    switch (choice) {
        case "r": return "Rock";
        case "p": return "Paper";
        case "s": return "Scissors";
    }
}

function getComputerChoice() {
    choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function userWon(user_choice, computer_choice){
    user++;
    user_score.innerHTML = user;
    computer_score.innerHTML = computer;
    result = `${getWord(user_choice)} beats ${getWord(computer_choice)} You Won`;
    text_result.innerHTML = result;
    const img_choice = document.getElementById(getWord(user_choice).toLowerCase());
    img_choice.classList.add("user-won");
    setTimeout(() => {
        img_choice.classList.remove("user-won");
    }, 300);
}

function computerWon(user_choice, computer_choice){
    computer++;
    user_score.innerHTML = user;
    computer_score.innerHTML = computer;
    result = `${getWord(user_choice)} loses to ${getWord(computer_choice)} You Lose`;
    text_result.innerHTML = result;
    const img_choice = document.getElementById(getWord(user_choice).toLowerCase());
    img_choice.classList.add("user-lose");
    setTimeout(() => {
        img_choice.classList.remove("user-lose");
    }, 300);
}

function draw(user_choice, computer_choice){
    user_score.innerHTML = user;
    computer_score.innerHTML = computer;
    result = `${getWord(user_choice)} draws ${getWord(computer_choice)} `;
    text_result.innerHTML = result;
    const img_choice = document.getElementById(getWord(user_choice).toLowerCase());
    img_choice.classList.add("draw");
    setTimeout(() => {
        img_choice.classList.remove("draw");
    }, 300);
}

function game(user_choice) {
    computer_choice = getComputerChoice();
    switch (user_choice + computer_choice)
    {
        case "rs":
        case "sp":
        case "pr":
            userWon(user_choice, computer_choice);
            break;
        case "sr":
        case "ps":
        case "rp":
            computerWon(user_choice, computer_choice);
            break;
        default:
            draw(user_choice, computer_choice);
    }
}

function main() {
	rock.addEventListener("click", () => game('r'));
	paper.addEventListener("click", () => game('p'));
	scissors.addEventListener("click", () => game('s'));
}

main();