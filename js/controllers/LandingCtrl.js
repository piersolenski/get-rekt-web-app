angular.module("elHacko").controller("LandingCtrl", function($scope, CONFIG, $window, $location, $wamp, GetUuid){

	function onScanWsCallback(event) {
		console.log(event);
		var message = JSON.parse(event[0]);
		if (message.status === "countdown_started") {
			$location.path("countdown");
			$scope.$apply();
		}
	}

	GetUuid.get().then(function(res) {
		console.log(res);
		$location.search("uuid", res);
		$scope.qrCode = res;
		$wamp.subscribe(res, onScanWsCallback);
	});

});
