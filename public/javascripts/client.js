angular.module('euchreApp',['ngPlayingCards'])
	.controller('MainCtrl', function($scope){
		$scope.players = [
			{name: "Jeff", hand: []},
			{name: "Oddur", hand: []},
			{name: "Gabe", hand: []},
			{name: "David", hand: []}
		]
		// $scope.deal = function() {
		// 	var cards = new Cards();
		// 	cards.shuffle();
		// 	for (var i = 0; i <= 1; i++) {
		// 		for (var j = 0; i < $scope.players.length; i++) {
		// 			if((i + j) % 2) {
		// 				$scope.players[j].hand.push(cards.draw());
		// 				$scope.players[j].hand.push(cards.draw());
		// 			} else {
		// 				$scope.players[j].hand.push(cards.draw());
		// 				$scope.players[j].hand.push(cards.draw());
		// 				$scope.players[j].hand.push(cards.draw());
		// 			}
		// 		};
		// 	};
		// }
		var turnNum = 0;
		var cards = new Cards();
		cards.shuffle();

		$scope.deal = function(func){
			var turnNum = 0;
			var cards = new Cards();
			cards.shuffle();
			var distibute = function() {
			    for (var player in $scope.players) {
			        if (((+turnNum) + (+player)) % 2) {
			            $scope.players[player].hand.push(cards.draw());
			            $scope.players[player].hand.push(cards.draw());
			        }
			        else {
			            $scope.players[player].hand.push(cards.draw());
			            $scope.players[player].hand.push(cards.draw());
			            $scope.players[player].hand.push(cards.draw());
			        }
			    }
			    turnNum++;
			    return func;
			};
			distibute(distibute());
		}
	})