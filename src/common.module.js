(function (angular) {
	// Config
	angular.module('bradmax.player.ag.configuration', []).constant('BRADMAX_PLAYER_CONFIGURATION', null);
	// Modules
	angular.module('bradmax.player.ag.common.services', ['bradmax.player.ag.player-config-parser-service', 'bradmax.player.ag.player-create-service', 'bradmax.player.ag.bradmax-service']);
	angular.module('bradmax.player.ag.common', ['bradmax.player.ag.configuration', 'bradmax.player.ag.common.services']);
})(angular);
