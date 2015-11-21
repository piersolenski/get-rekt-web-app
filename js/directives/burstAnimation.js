angular.module("elHacko").directive("burstAnimation", function($timeout) {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {

            function forceReflow(elt){
                return elt.offsetHeight;
            }

            function triggerAnimation() {
                elem.removeClass("countdown-animation");
                // forceReflow(elem[0]);
                elem.addClass("countdown-animation");
            }

            scope.$watch(attrs.count, triggerAnimation);

        }
    };
});
