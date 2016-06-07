app.controller("homeController", homeController)

homeController.$inject = ["TodoService"]

function homeController(TodoService) {
  const vm = this;
  TodoService.getTodos().then(function(todos) {
    vm.todos = todos.data.todos;
  });

  vm.submitTodo = function() {
    TodoService.createTodo(vm.newTodoText).then(function(todos) {
      // Reset the todos list
      vm.todos = todos.data.todos;
      // Clear the new Todo form
      vm.newTodoText = "";
    })
  }
  vm.removeTodo = function(id) {
    TodoService.deleteTodo(id).then(function(todos) {
      // Reset the todos list
      vm.todos = todos.data.todos;
    })
  }
}