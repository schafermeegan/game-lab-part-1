//I'm not sure what to do to get the cancel button on the prompt to stop the prompt of what is your name
let doYouWantToPlay = confirm(`Would you like to play a game?`);
//not sure how to get the cancel to cancel the next prompt
let userName = prompt(`What would you like me to call you?`);
  console.log(`Let's get started ${userName}, you will be competing against Grant`);

let playerHealthPoints = 40;
let grantHealthPoints = 10;
let playWins = 0;
//I think this is oversimplified, and missing a few things.
while (playerHealthPoints >= 1 && playWins < 3) {
  playerHealthPoints -=(Math.floor(Math.random() * 2) +1);
  grantHealthPoints -=(Math.floor(Math.random() * 2) +1);
    console.log(`${userName} has ${playerHealthPoints} health points left.`);
    console.log(`Grant has ${grantHealthPoints} health points left.`);

  if (grantHealthPoints<=0) {
    grantHealthPoints=10;
    playWins+=1;
    console.log(`${userName} you've won this round!`);
}

if (playerHealthPoints<=0) {
    playWins+=1;
    console.log(`${userName} you just got beat by a computer!`);
}

  if (playWins===3) {
    console.log(`Great job, you've won the whole thing!`);
  }
}













/*

let doYouWantToPlay = confirm(`Would you like to play a game?`);

let userName = prompt(`What would you like me to call you?`);
  console.log(`Let's get started`, userName , `you will be competing against Grant`);

let playerHealthPoints = 40;
let grantHealthPoints = 10;
let playWins = 0;

while (playerHealthPoints >= 1 && playWins < 3) {
  playerHealthPoints -=(Math.floor(Math.random() * 2) +1);
  grantHealthPoints -=(Math.floor(Math.random() * 2) +1);
    console.log(`${userName} has ${playerHealthPoints} health points left.`);
    console.log(`Grant has ${grantHealthPoints} health points left.`);
} if (grantHealthPoints<=0) {
    console.log(`Congratulations ${userName} you have defeated Grant!`);
} else if (playerHealthPoints<=0) {
    console.log(`Congratulations Grant, you have defeated ${userName}`);
}

let userName = prompt(`What would you like me to call you?`);
  console.log(`Let's get started`, userName , `you will be competing against Grant`);

let playerHealthPoints = 40;
let grantHealthPoints = 10;
let playWins = 0;

while (playerHealthPoints >= 1 && grantHealth>=1) {
  playerHealthPoints -=(Math.floor(Math.random()*2)+1);
  grantHealthPoints -=(Math.floor(Math.random()*2)+1);
    console.log(`${userName} has ${playerHealthPoints} health points left.`);
    console.log(`Grant has ${grantHealthPoints} health points left.`);
}


//

while (playerHealthPoints >= 1 && grantHealthPoints >= 1) {
  playerHealthPoints -=(Math.floor(Math.random() * 2) +1);
  grantHealthPoints -=(Math.floor(Math.random() * 2) +1);
    console.log(`${userName} has ${playerHealthPoints} health points left.`);
    console.log(`Grant has ${grantHealthPoints} health points left.`);
}


/*












let userScore = 40;
    while(userScore > 0) {
        console.log(userScore);
        userScore--;
    }
        console.log(+ userName + ` has` + userScore + ` health left.`);
   










//Part 2 - 

function gameStart() {

}
function fight() {
  damage();
}
function damage() {

}
  
  
*/