app.controller("homeController", homeController)

homeController.$inject = ["TodoService"]

function homeController(TodoService) {
  const vm = this;
  TodoService.getTodos().then(function(todos) {
    vm.todos = todos.data.todos;
  });

  vm.submitTodo = function() {
    TodoService.createTodo(vm.newTodoText).then(function(todos) {
      // What do I do to rerender the list of todos after a new
      // one is submitted
      vm.todos = todos.data.todos;
      vm.newTodoText = "";
    })
  }
  // vm.deleteTodo = function(id) {
  //   TodoService.deleteTodo(id)
  // }
}