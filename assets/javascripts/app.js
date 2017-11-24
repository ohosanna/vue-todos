new Vue({
    el: "#todos",
    data: function() {
        return {
            todos: [],
            newTodo: '',
            filter: 'all'
        }
    },
    computed: {
        filterTodos: function() {
            var todos = this.todos;
            if (this.filter == 'completed') {
                todos = this.todos.filter(function(item){
                    return item.isCompleted;
                })
            } else if (this.filter == 'active') {
                todos = this.todos.filter(function(item){
                    return !item.isCompleted;
                })
            }
            return todos;
        }
    },
    methods: {
        createTodo: function() {
            var todo = {
                content: this.newTodo,
                isCompleted: false
            }
            this.todos.unshift(todo);
            this.newTodo = "";
        },
        toggleTodo: function(index) {
            this.todos[index].isCompleted = !this.todos[index].isCompleted;
        },
        destroyTodo: function(index) {
            this.todos.splice(index, 1);
        }
    }
})