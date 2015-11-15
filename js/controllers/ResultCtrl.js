angular.module("elHacko").controller("ResultCtrl", function($scope, $location, WebSocket, $timeout){

	$scope.id = $location.search().id;

	$scope.imageReady = false;

	// WebSocket.setCallback(function(evt) {
	// 	var data = JSON.parse(evt.data);
	// 	$scope.imageReady = true;
	// 	$scope.imageUrl = data.url;
	// });

	// Simulate wait for image processing
	$timeout(function(){
		$scope.imageReady = true;
	}, 1750);


});
