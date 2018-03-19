'use strict';

angular.module('bradmax.player.ag.snake-directive', [])
	.directive('bradmaxPlayerSnake', function () {
		return {
			restrict: 'AEC',
			scope: true,
			bindToController: {
				configUrl: '@'
			},
			replace: true,
			controller: ['$http', '$scope', '$element', 'BradmaxPlayerConfigParserService', 'BradmaxPlayerCreateService', 'BRADMAX_PLAYER_CONFIGURATION',
				function ($http, $scope, $element, parser, create, config) {
					$scope.name = 'snake';
					if ($scope.configUrl != null) {
						$http.get($scope.configUrl).then(function (response) {
							create($element, response.data, $scope.name);
						});
					} else {
						var html = $element.html();
						if (html != null && html != '')
							create($element, parser(html), $scope.name);
						else if (config != null)
							create($element, config, $scope.name);
					}
				}
			]
		};
	});
