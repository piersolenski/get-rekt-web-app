angular.module("elHacko").config(function($routeProvider, $provide) {

    // configure our routes
    $routeProvider
    .when("/", {
        templateUrl : "views/landing.html",
        controller  : "LandingCtrl",
        reloadOnSearch: false
    })
    .when("/countdown", {
        templateUrl : "views/countdown.html",
        controller  : "CountdownCtrl"
    })
    .otherwise({
        redirectTo  : "/"
    });

});
