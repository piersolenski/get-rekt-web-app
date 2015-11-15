angular.module("elHacko").directive("beep", function($timeout) {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {

			var ctx = new AudioContext();

			var osc = null;

			function oscState(bool) {
			    if (bool === undefined) bool = true;

			    if (bool === true) {
					osc = ctx.createOscillator();
			        osc.frequency.value = 880;
			        osc.start(ctx.currentTime);
			        osc.connect(ctx.destination);
			    } else {
					osc.stop(ctx.currentTime);
			        osc.disconnect(ctx.destination);
			        osc = null;
			    }
			}

			function beep() {
				oscState();
				$timeout(function () {
					oscState(false);
				}, 300);
			}

            scope.$watch(attrs.count, function(data){
                beep();
            });

        }
    };
});
