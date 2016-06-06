app.controller("homeController", homeController)

homeController.$inject = ["TodoService"]

function homeController(TodoService) {
  const vm = this;
  TodoService.getTodos().then(function(todos) {
    vm.todos = todos.data.todos;
  });
}