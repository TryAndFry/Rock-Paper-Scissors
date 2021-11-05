
/*
function FizzBuzz(number){
    if(number<=0) return -1;
    for(let i=1;i<=number;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
            continue;
        }
        if(i%3==0){
            console.log("Fizz");
            continue;
        }
        if(i%5==0){
            console.log("Buzz");
            continue;
        }
        console.log(i);
    }
}
let n=parseInt(prompt("Please enter a positive integer"))
FizzBuzz(n)

*/

function computerPlay(){
    let selection=Math.floor(Math.random()*3);
    if(selection==0) return "rock";
    if(selection==1) return "paper";
    if(selection==2) return "scissors";
}
function getPlayerSelection(){
    let playerSelection=prompt("Please select rock, paper, or scissors");
    playerSelection=playerSelection.trim().toLowerCase();
    if(!(playerSelection=='rock' || playerSelection=='paper' || playerSelection=='scissors')){
        return -1;
    }
    return playerSelection;
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

function game(){
    let i=0;
    let numWins=0;
    while(i<=4){
        let playerSelection=getPlayerSelection();
            if(playerSelection==-1){
                alert('Not a valid entry. Game is void')
                return;
            }
        let computerSelection=computerPlay();
        let result=playRound(computerSelection,playerSelection)
        numWins+=result[1];
        //console.log(result[0],numWins)
        i++;
    }
    if(numWins>0) console.log('You Win best of 5!')
    if(numWins==0) console.log('You Draw!')
    if(numWins<0) console.log('You Lose best of 5!')
}
game();