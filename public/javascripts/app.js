var app = angular.module("angularExpressApp", ["ngRoute"])

app.config(function($routeProvider){
    $routeProvider
      .when("/todos", {
        templateUrl: "../templates/home.html",
        controller: "homeController",
        controllerAs: "home"
        // resolve: {
        //   todos: function(TodoService){
        //     return TodoService.getTodos()
        //   }
        // }
      })

});