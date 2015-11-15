angular.module("elHacko").config(function($routeProvider, $provide) {

    // configure our routes
    $routeProvider
    .when("/", {
        templateUrl : "views/landing.html",
        controller  : "LandingCtrl"
    })
    .when("/countdown", {
        templateUrl : "views/countdown.html",
        controller  : "CountdownCtrl"
    })
    .when("/result", {
        templateUrl : "views/result.html",
        controller  : "ResultCtrl"
    })
    .otherwise({
        redirectTo  : "/"
    });

});
