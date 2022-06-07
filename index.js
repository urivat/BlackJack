let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

// Create a function, getRandomCard(), that always returns the number 5

function startGame() {
    isAlive = true;
    firstNumber= getRandomCard()
    secondNumber=getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber
  renderGame();
}
function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13 ) + 1
    if(randomNum === 1){
        return  11
    } else if(randomNum > 10){
        return 10
    }
    return randomNum
}

function renderGame() {
  cardsEl.textContent = "Cards: " ;
for (let i = 0 ; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
}
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}
function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
