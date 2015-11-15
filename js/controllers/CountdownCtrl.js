angular.module("elHacko").controller("CountdownCtrl", function($scope, $window, $location, $timeout, CONFIG){

	function callback() {
		$location.path("result");
	}

	function countdown(count) {
		if (count === 0) {
			callback();
			return;
		} else {
			$scope.count = count;
			$timeout(function() {
				countdown(count - 1);
			}, 1000);
		}
	}

	countdown(CONFIG["countdown"]);

});
