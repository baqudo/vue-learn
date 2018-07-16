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
      .todo__list(
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      )
        TodoItem(
          v-for="(item, id) in todos"
          v-rainbow
          :todo="item"
          :key="id"
          @remove="removeTodo(id)"
          @complete="completeTodo(id, item)"
        )

</template>

<script>
  import axios from 'axios'
  import TodoItem from '~/components/TodoItem'

  import infiniteScroll from 'vue-infinite-scroll'
  const base = 'https://baqudo-vue.firebaseio.com/';
  const servUrl = 'http://localhost:3004';
  var count = 0;
  export default {
    name: 'todo',
    components: {
      TodoItem
    },
    data() {
      return {
        todos: [],
        newTodoTitle: '',
        data: [],
        busy: false
      }
    },
    created() {
      this.getTodos();
    },
    methods: {
      generateId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      },
      async completeTodo(id, item) {
        console.log(id, item);
        await axios.put(`${base}/todos/${id}.json`, item);

        this.getTodos();
      },
      async getTodos() {
        await axios.get(`${base}/todos.json`)
          .then(response => {
            console.log(response)
            this.todos = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },

      async addTodo() {
        console.log('addTodo');
        let newTodo = {
          title: this.newTodoTitle,
          isComplete: false
        }

        await axios.post(`${base}/todos.json`, newTodo);

        this.newTodoTitle = '';

        this.getTodos();
      },

      async removeTodo(id) {
        // console.log(item)
        // this.todos = this.todos.filter(todo => {
        //   return todo.id !== item.id
        // });
        await axios.delete(`${base}/todos/${id}.json`);

        this.getTodos();
      },
      loadMore: function() {
        this.busy = true;

        setTimeout(() => {
          for (var i = 0, j = 10; i < j; i++) {
            this.data.push({ name: count++ });
          }
          this.busy = false;
        }, 1000);
      }
    },
    directives: {
      infiniteScroll,
      rainbow: {
        // определение директивы
        inserted: function (el) {
          el.style.backgroundColor = "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
        }
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
