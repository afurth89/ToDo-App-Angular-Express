var app = angular.module("angularExpressApp", ["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "../templates/home.html",
            controller: "homeController"
        });
});