angular.module('euchreApp',['ngPlayingCards'])
	.controller('MainCtrl', function($scope,$http){
		$scope.deal = function() {
			$http.get('/deal').success(function(stuff){
				console.log(stuff);
			})
		}
	})