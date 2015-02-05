angular.module('euchreApp',['ngPlayingCards'])
	.controller('MainCtrl', function($scope){
		$scope.players = [
			{name: "Jeff", hand: []},
			{name: "Oddur", hand: []},
			{name: "Gabe", hand: []},
			{name: "David", hand: []}
		]

		$scope.deal = function(func){
			$scope.players = $scope.players.map(function(player){
				player.hand = [];
				return player;
			})
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
			distibute(distibute(console.log(cards)));
		}
	})