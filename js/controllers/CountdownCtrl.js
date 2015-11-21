angular.module("elHacko").controller("CountdownCtrl", function($scope, $window, $location, $timeout, CONFIG, $wamp){

	var uuid = $location.search().uuid;

	$scope.loading = false;

	$scope.countingDown = true;

	function countdown(count) {
		if (count === 0) {
			countdownComplete();
			return;
		} else {
			$scope.count = count;
			$timeout(function() {
				countdown(count - 1);
			}, 1000);
		}
	}

	function onScanWsCallback(event) {
		var message = JSON.parse(event[0]);
		if (message.status === "have_image") {
			$scope.imageUrl = message.image;
			$scope.loading = false;
			$scope.$apply();
		}
	}

	function countdownComplete() {
		$scope.countingDown = false;
		$scope.loading = true;
	}

	$wamp.subscribe(uuid, onScanWsCallback);

	countdown(CONFIG["countdown"]);

});
