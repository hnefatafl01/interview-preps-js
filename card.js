function Deck() {
  this.cards = [];
}

function Card(suit, name) {
  this.suit = suit;
  this.name = name;
}

Deck.prototype.createDeck = function () {
  var count = 0;
  var suit = ["Clubs","Diamonds","Hearts","Spades"];
  var rank = ["Two", "Three", "Four", "Five", "Six","Seven","Eight","Nine","Ten","Jack","Queen","King","Ace"];
  for (var j = 0; j < suit.length; j++) {
    for (var i = 0; i < rank.length; i++) {
      console.log(rank[i] + " of " + suit[j])
      // Deck.cards.push(suit[j] + " of " + rank[i]);
      count++;
    }
  }
  console.log(count);
}

var deckOne = new Deck();
deckOne.createDeck()
// console.log(deckOne);
