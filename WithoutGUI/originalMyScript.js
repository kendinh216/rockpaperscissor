function computerPlay(){
    var min = 0;
    var max = 3;
    var random = 
    Math.floor(Math.random() * (+max - +min)) + +min;
    if (random == 0){
        return 'Rock';
    }
    else if (random == 1){
        return 'Paper';
    }
    else
        return 'Scissor';
}

function playRound(playerSelection, computerSelection){
    var playerSelect = playerSelection.toUpperCase();
    var computerSelect = computerSelection.toUpperCase();
    if(playerSelect == computerSelect)
        return 'The computer played: ' + computerSelect+ '. A DRAW !'
    else if (playerSelect == 'ROCK' && computerSelect == 'PAPER')
        return 'The computer played: ' + computerSelect + '. Sorry you lose! Paper beats Rock'
    else if (playerSelect == 'ROCK' && computerSelect == 'SCISSOR')
        return 'The computer played: ' + computerSelect + '. You Win! Rock beats Scissor'
    else if (playerSelect == 'PAPER' && computerSelect == 'SCISSOR')
        return 'The computer played: ' + computerSelect + '. Sorry you lose! Scissor beats Paper'
    else if (playerSelect == 'PAPER' && computerSelect == 'ROCK')
        return 'The computer played: ' + computerSelect + '. You Win! Paper beats rock'
    else if (playerSelect == 'SCISSOR' && computerSelect == 'ROCK')
        return 'The computer played: ' + computerSelect + '. Sorry you lose! Rock beats Scissor'
    else if (playerSelect == 'SCISSOR' && computerSelect == 'PAPER')
        return 'The computer played: ' + computerSelect + '. You Win! Scissor beats Paper'
}

function game(){
    let userScore = 0;
    let compScore = 0;

    for(var i = 0; i < 5; i++){
        let playerSelect = prompt('What is your choice? (type Rock, Paper, or Scissor - case-free)');
        let compSelect = computerPlay();
        console.log(playRound(playerSelect, compSelect));
        // Keeping Score
        playerSelect = playerSelect.toUpperCase();
        var computerSelect = compSelect.toUpperCase();                 
    if (playerSelect == 'ROCK' && computerSelect == 'PAPER')
        compScore++;
    else if (playerSelect == 'ROCK' && computerSelect == 'SCISSOR')
        userScore++;
    else if (playerSelect == 'PAPER' && computerSelect == 'SCISSOR')
        compScore++;
    else if (playerSelect == 'PAPER' && computerSelect == 'ROCK')
        userScore++;
    else if (playerSelect == 'SCISSOR' && computerSelect == 'ROCK')
        compScore++;
    else if (playerSelect == 'SCISSOR' && computerSelect == 'PAPER')
        userScore++;
    }
    if(userScore > compScore)
        return 'Game is over. Your score is ' + userScore + '. You Win. CONGRATULAION!';
    else if (compScore > userScore)
        return 'Game is over. Your score is ' + userScore + '. You lose. Better luck next time :(';
    else
        return 'Game is over. Your score is ' + userScore + '. It is a draw!';
}