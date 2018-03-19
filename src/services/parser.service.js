angular.module('bradmax.player.ag.player-config-parser-service', [])
.factory('BradmaxPlayerConfigParserService', [function() {
	return function(config) {
		try {
			config = JSON.parse(config);
		} catch (e) {
			throw Error('Provided via inner html bradmax player configuration is corrupt or invalid json object!');
		}
		return config;
	}
 }]);
