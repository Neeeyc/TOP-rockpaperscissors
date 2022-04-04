//Create a function that generates a random computer choice
//Create a function to check for a winner/loser/tie

let array = ["rock", "paper", "scissors"];

function computerPlay(){
    let random = Math.floor(Math.random()*array.length);
    return array[random];
}

function playRound(playerSelection, computerSelection){  
    console.log("Player: " + playerSelection, "Computer: " + computerSelection);
    
    if(computerSelection=="rock" && playerSelection=="scissors" || 
        computerSelection=="scissors" && playerSelection=="paper" ||
        computerSelection=="paper" && playerSelection=="rock"){
        // console.log("Computer wins");
        return "Computer wins!";
    }
    else if(playerSelection=="rock" && computerSelection=="scissors" ||
            playerSelection=="scissors" && computerSelection=="paper" ||
            playerSelection=="paper" && computerSelection=="rock"){
        // console.log("Player wins");
        return "Player wins!";
    }
    else if(playerSelection=="rock" && computerSelection=="rock" ||
            playerSelection=="scissors" && computerSelection=="scissors" ||
            playerSelection=="paper" && computerSelection=="paper"){
        // console.log("It's a tie");
        return "Its a tie";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(prompt("Rock, paper or scissors: ").toLowerCase(), computerPlay()));
    }
}

game();

