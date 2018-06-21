<template lang="pug">
  .todo
    .container
      // form.todo__form(@submit.prevent)
      label.todo__label TODO:
      input.todo__add(
        placeholder="What needs to be done?",
        v-model="newTodoTitle",
        @keypress.enter="addTodo"
      )
      button.todo__submit(
        @click="addTodo"
      ) Add
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
      generateId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      },

      getTodos() {
        axios.get(`${servUrl}/todos`)
          .then(response => {
            this.todos = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      async addTodo() {
        console.log('addTodo');
        let newTodo = {
          id: this.generateId(),
          title: this.newTodoTitle
        }

        await axios.post(`${servUrl}/todos/`, newTodo);

        this.newTodoTitle = '';

        await this.getTodos();
      },

      async removeTodo(item) {
        // this.todos = this.todos.filter(todo => {
        //   return todo.id !== item.id
        // });
        await axios.delete(`${servUrl}/todos/${item.id}`);

        await this.getTodos();
      }
    }

  }
</script>

<style lang="sass">
  .todo
    margin: 0 auto
    padding: 20px 0
    max-width: 500px
    &__label
      margin-bottom: 10px
    &__add
      width: 100%
      font-size: 20px
      margin: 10px 0
      padding: 10px
      border: 1px solid #ccc
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.5)
</style>
