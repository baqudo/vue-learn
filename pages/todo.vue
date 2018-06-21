<template lang="pug">
  .todo
    .container
      // form.todo__form(@submit.prevent)
      h1 TODO
      label.todo__label What needs to be done?
      input.todo__add(
        placeholder="What needs to be done?",
        v-model="newTodoTitle",
        @keypress.enter="addTodo"
      )
      .todo__list
        TodoItem(
          v-for="(item, index) in todos"
          :todo="item"
          :index="index"
          :key="item.id"
          @remove="removeTodo(item)"
        )

</template>

<script>
  import axios from 'axios'
  import TodoItem from '~/components/TodoItem'

  const servUrl = 'http://localhost:3004';

  export default {
    name: 'todo',
    components: {
      TodoItem
    },
    data() {
      return {
        todos: [],
        newTodoTitle: '',
      }
    },
    created() {
      this.getTodos();
    },
    methods: {
      getTodos() {
        axios.get(`${servUrl}/todos`)
          .then(response => {
            this.todos = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      createTodo() {
        console.log('createTodo');
        let newTodo = {
          id: ++this.todos.length,
          title: this.newTodoTitle
        }
        console.log(this.todos.length, newTodo);
        return newTodo;
      },
      addTodo() {
        console.log('addTodo');
        let newTodo = this.createTodo();
        console.log(newTodo);

        // axios.post(`${servUrl}/todos`, newTodo)
        axios.delete(`${servUrl}/todos`, {
          params: this.todos
        })
        // this.todos.push({
        //   id: this.todos.length,
        //   title: this.newTodoTitle
        // })
        this.newTodoTitle = ''
      },
      async removeTodo(item) {
        // this.todos = this.todos.filter(todo => {
        //   return todo.id !== item.id
        // });
        await axios.delete(`${servUrl}/todos/${item.id}`);

        this.getTodos();
      }
    }

  }
</script>

<style lang="sass">
  .todo
    margin: 0 auto
    padding: 20px 0
    max-width: 500px
  .todo-add
    width: 100%
    font-size: 20px
    padding: 10px
    border: 1px solid #ccc
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.5)
</style>
