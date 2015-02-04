var router = require('express').Router();
var cards = require('cards');

router.get('/', function(req,res) {
	res.sendFile('/Users/Jeff/Fullstack/Euchre/views/index.html');
});

router.get('/deal', function(req,res){
	var euchreDeck = new cards.EuchreDeck()
	euchreDeck.useArc4 = true;
	console.log('********* Before Shuffle ********',euchreDeck);
	euchreDeck.shuffleAll()
	console.log('********* After Shuffle ********',euchreDeck);
	var filteredDeck = euchreDeck.cards.map(function(card){
		delete card.deck;
		return card;
	})
	console.log('++++++++++ Filtered Deck ++++++++++',filteredDeck);
	res.sendStatus(200);
})

module.exports = router