angular.module('bradmax.player.ag.bradmax-service', [])
	.factory('BradmaxFactory', ['$window', function ($window) {
		if (!$window.bradmax)
			throw Error('BradmaxFactory: window.bradmax == null');
		return $window.bradmax;
	}]);
