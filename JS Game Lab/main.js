let doYouWantToPlay = confirm(`Would you like to play a game?`);

let userName = prompt(`What would you like me to call you?`);
  console.log(`Let's get started ${userName}, you will be competing against Grant`);

let playerHealthPoints = 40;
let grantHealthPoints = 10;
let playWins = 0;

while (playerHealthPoints >= 1 && playWins < 3) {
  playerHealthPoints -=(Math.floor(Math.random() * 2) +1);
  grantHealthPoints -=(Math.floor(Math.random() * 2) +1);
    console.log(`${userName} has ${playerHealthPoints} health points left.`);
    console.log(`Grant has ${grantHealthPoints} health points left.`);

  if (grantHealthPoints<=0) {
    grantHealthPoints=10;
    playWins+=1;
    console.log(`${userName} you've won!`);
}

  if (playWins===3) {
    console.log(`Great job, you've won the whole thing!`);
  }
}
