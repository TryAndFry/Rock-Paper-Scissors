const difficultyButtons=document.documentElement.querySelectorAll('.difficulty-setting');
const gameButtons=document.documentElement.querySelectorAll('.game-button');
const gameRecord=document.documentElement.querySelector('.game-record');
const gameResult=document.documentElement.querySelector('.result')
let difficulty=1;
let wins=0;
let losses=0;
let playerSelection='';
let computerSelection=''

function setDifficulty(){
    difficultyButtons.forEach(button =>{
        button.classList.remove('selected')
    })
    this.classList.add('selected')
    difficulty=parseInt(this.value);
}


function playGame(){
    gameButtons.forEach(button =>{
        button.classList.remove('computer-selection')
    })
    playerSelection=this.id;
    switch (difficulty){ // easy mode, player always wins
            case 1:
                {switch (playerSelection){
                    case 'rock': 
                        computerSelection='scissors';
                        break;
                    case 'paper': 
                        computerSelection='rock';
                        break;
                    case 'scissors': 
                        computerSelection='paper';
                        break;
            }}
                break;
            case 2: //randomized
                computerSelection=computerPlay();
                break;
            case 3: // hard mode, player always loses
                {switch (playerSelection){
                    case 'rock': 
                        computerSelection='paper';
                        break;
                    case 'paper': 
                        computerSelection='scissors';
                        break;
                    case 'scissors':
                        computerSelection='rock';
                        break;
            }}
                break;
    }
    document.documentElement.querySelector(`#${computerSelection}`).classList.add('computer-selection')
    let [text, result] = (playRound(computerSelection,playerSelection));
    result === 1 ? wins++ : '';
    result === -1 ? losses++ : '';
    gameRecord.innerText=`Wins: ${wins} Losses: ${losses}`;
    gameResult.innerText=`${text}`
}


difficultyButtons.forEach(button =>{
    button.addEventListener('click',setDifficulty)
})

gameButtons.forEach(button =>{
    button.addEventListener('click',playGame)
})

function computerPlay(){
    let selection=Math.floor(Math.random()*3);
    if(selection==0) return "rock";
    if(selection==1) return "paper";
    if(selection==2) return "scissors";
}

function playRound(computerPlay,playerSelection){
    if(computerPlay==playerSelection){
        return ["Draw! You both chose " + playerSelection +"!",0]
    }
    if (computerPlay=='rock'){
        if(playerSelection=='paper'){
            return ["You Won! Paper beats Rock",1]
        }
        if(playerSelection=='scissors'){
            return ["You Lose! Rock beats Scissors",-1]
        }
    }
    if (computerPlay=='paper'){
        if(playerSelection=='scissors'){
            return ["You Won! Scissors beats Paper",1]
        }
        if(playerSelection=='rock'){
            return ["You Lose! Paper beats Rock",-1]
        }
    }
    if (computerPlay=='scissors'){
        if(playerSelection=='rock'){
            return ["You Won! Rock beats Scissors",1]
        }
        if(playerSelection=='paper'){
            return ["You Lose! Scissors beats Paper",-1]
        }
    }
}

document.body.addEventListener('mousemove',() =>{
    gameButtons.forEach(button =>{
        button.classList.remove('computer-selection')
    })
})