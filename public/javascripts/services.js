app.service("TodoService", function($http) {
  return {
    getTodos: function() {
      return $http.get('http://localhost:3000/todos')
    },
    createTodo: function(TodoContent) {
      var req = {
        method: 'POST',
        url: '/todos',
        // The knex query is expecting an object attached 
        // to req.body called 'todo' 
          // 'content' is the column title in DB
          // 'TodoContent' is the data going into that column in DB
        data: { todo: {content: TodoContent}}
      }
      return $http(req)
    },
    updateTodo: function(todo) {
      var req = {
        method: 'PUT',
        url: '/todos/'+todo.id,
        data: {}
      }
      if (todo.editTodoText) {
        req.data.todo = {content: todo.editTodoText, completed: todo.completed} 
      } else {
        req.data.todo = {content: todo.content, completed: todo.completed}
      }
      return $http(req)
    },
    deleteTodo: function(TodoId) {
      var req = {
        method: 'DELETE',
        url: '/todos/'+TodoId
      }
      return $http(req)
    }
  }
})