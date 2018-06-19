<template lang="pug">
  .todo-item
    .todo-item__value {{ todo.value }}
    button.todo-item__close(@click="remove(todo.id)") x
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {}
  },
  data() {
    return {

    }
  },
  methods: {
    remove(id) {
      console.log(id);
    }
  }
};
</script>

<style lang="sass">
  .todo-item
    display: flex
    align-items: center
    justify-content: space-between
    margin: 10px auto
    padding: 5px
    border: 2px solid #ddd
    font-size: 18px
    &__close
      border-radius: 50%
      width: 20px
      height: 20px
      line-height: 20px

</style>
