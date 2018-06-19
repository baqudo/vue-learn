<template lang="pug">
  .todo
    .container
      h1 TODO
      input.todo-add(placeholder="What needs to be done?", v-model="todoVal" v-on:keyup.enter="addTodo(todoVal)")
      .todo-list
        TodoItem(v-for="item in todoList" :todo="item" :key="item.id")

</template>

<script>
  import TodoItem from '~/components/TodoItem'
  export default {
    name: 'todo',
    components: {
      TodoItem
    },
    data() {
      return {
        todoList: [],
        todoVal: '',
      }
    },
    methods: {
      addTodo(val) {
        this.todoList.push({
          id: 'id_' + this.todoList.length,
          value: val
        });
        // todoVal.clear();
        // console.log(this.todoVal);
        // return 'asd';
      }
    }

  }
</script>

<style lang="sass">
  .todo
    margin: 0 auto
    padding: 20px 0

  .todo-add
    width: 400px
    font-size: 20px
    padding: 10px
    border: 1px solid #ccc
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.5)
</style>
