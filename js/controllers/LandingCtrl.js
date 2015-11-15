angular.module("elHacko").controller("LandingCtrl", function($scope, WebSocket, CONFIG, $window, $location){

	$scope.qrCode = "0e49aecf-67c4-45f2-8d04-077840e8d60a";
	$location.search("id", "0e49aecf-67c4-45f2-8d04-077840e8d60a");

	function onScan() {
		$location.path("countdown");
		$scope.$apply();
	}

	// WebSocket.setCallback(function(evt) {
	// 	var data = JSON.parse(evt.data);
	// 	$scope.qrCode = data.id;
	// $location.search("id", data.id);
	// });

});
