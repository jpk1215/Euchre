function Cards() {
	this.deck = [
		{suit: 'spade', value:'nine'},
		{suit: 'spade', value:'ten'},
		{suit: 'spade', value:'jack'},
		{suit: 'spade', value:'queen'},
		{suit: 'spade', value:'king'},
		{suit: 'spade', value:'ace'},
		{suit: 'heart', value:'nine'},
		{suit: 'heart', value:'ten'},
		{suit: 'heart', value:'jack'},
		{suit: 'heart', value:'queen'},
		{suit: 'heart', value:'king'},
		{suit: 'heart', value:'ace'},
		{suit: 'club', value:'nine'},
		{suit: 'club', value:'ten'},
		{suit: 'club', value:'jack'},
		{suit: 'club', value:'queen'},
		{suit: 'club', value:'king'},
		{suit: 'club', value:'ace'},
		{suit: 'diamond', value:'nine'},
		{suit: 'diamond', value:'ten'},
		{suit: 'diamond', value:'jack'},
		{suit: 'diamond', value:'queen'},
		{suit: 'diamond', value:'king'},
		{suit: 'diamond', value:'ace'},
	]
}


// Mike Bostock Fisher-Yates Shuffle (http://bost.ocks.org/mike/shuffle/)
Cards.prototype.shuffle = function() {
  var m = this.deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
}

Cards.prototype.draw = function() {
	return this.deck.shift();
}

















