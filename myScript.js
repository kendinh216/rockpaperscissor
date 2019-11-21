let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const reset_div = document.getElementById("reset-box");

function main(){
    rock_div.addEventListener('click', function(){
        playRound("rock", computerPlay());
    })
    paper_div.addEventListener('click', function(){
        playRound("paper", computerPlay());
    })
    scissor_div.addEventListener('click', function(){
        playRound("scissor", computerPlay());
    })
    reset_div.addEventListener('click', function(){reset()})
}


main();


function playRound(playerSelection, computerSelection){
    switch(playerSelection + computerSelection){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(playerSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(playerSelection, computerSelection);
            break;
        case "rockrock":
        case "scissorscissor":
        case "paperpaper":
        draw(playerSelection, computerSelection);
        break;
    }
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(user) + smallUserWord + " beats " + convert(comp) + smallCompWord + " .You win!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow')}, 300);
}

function lose(user, comp){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = convert(comp) + smallCompWord + " beats " + convert(user) + smallUserWord + " .You lose!";
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')}, 300);
}

function draw(user,comp){
    result_p.innerHTML = "It's a Draw."
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('grey-glow')}, 300);
}

function convert(lower){
    if (lower ==='rock') return "Rock";
    if (lower ==='paper') return "Paper";
    if (lower ==='scissor') return "Scissor";

}

function computerPlay(){
    const choices =['rock', 'paper', 'scissor'];
    var random = Math.floor(Math.random() * 3);
    return choices[random];
}

function reset(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "The Game is Reset."
}