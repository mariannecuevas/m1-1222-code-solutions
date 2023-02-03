console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'player 1',
    hand: []
  },
  {
    name: 'player 2',
    hand: []
  },
  {
    name: 'player 3',
    hand: []
  },
  {
    name: 'player 4',
    hand: []
  }
];

var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
var cards = [];

for (var i = 0; i < rank.length; i++) {
  var currentRank = rank[i];
  for (var j = 0; j < suit.length; j++) {
    var currentSuit = suit[j];
    cards.push({ rank: currentRank, suit: currentSuit });
  }
}

var shuffled = _.shuffle(cards);
var scores = [];
console.log('The list of scores are: ', scores);

for (var p = 0; p < players.length; p++) {
  var playerHand = players[p].hand;
  playerHand.push(shuffled.pop(), shuffled.pop());
  var sum = 0;
  for (var h = 0; h < playerHand.length; h++) {
    sum += cardValue(playerHand[h]);
  }
  scores.push({ name: players[p].name, score: sum });
}

function cardValue(card) {
  if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
    return 10;
  } else if (card.rank === 'Ace') {
    return 11;
  } else {
    return card.rank;
  }
}

function getHighestScore(limitScore) {
  var highestScore = 0;
  var winner = {};
  for (var s = 0; s < scores.length; s++) {
    if (scores[s].score > highestScore && scores[s].score <= limitScore) {
      highestScore = scores[s].score;
      winner = Object.assign({}, scores[s]);
    }
  }
  return winner;
}

var winnerPlayer = getHighestScore(21);
console.log('The Winner is: ', winnerPlayer);
