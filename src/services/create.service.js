angular.module('bradmax.player.ag.player-create-service', [])
	.factory('BradmaxPlayerCreateService', ['BradmaxFactory', function ($bradmax) {
		return function (element, config, name) {
			var player = null;
			var api = null;
			if (element == null)
				throw Error('BradmaxPlayerCreateService: element == null');
			if (config == null)
				throw Error('BradmaxPlayerCreateService: config == null');
			// player
			element.text('');
			try {
				var playerId = name + '_' + $bradmax.player.version.BRADMAX_PLAYER_VERSION;
				player = $bradmax.player.create(element[0], config, playerId);
			} catch (e) {
				throw Error('BradmaxPlayerCreateService: create' + e);
			}
			if (player == null)
				throw Error('BradmaxPlayerCreateService: $scope.player == null');
			// api
			api = player.modules.JavascriptApi;
			if (api == null)
				throw Error('BradmaxPlayerCreateService: $scope.api == null');
		}
	}]);
