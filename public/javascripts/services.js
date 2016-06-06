app.service("TodoService", function($http) {
  return {
    getTodos: function() {
      return $http.get('http://localhost:3000/todos')
    }
  }
})