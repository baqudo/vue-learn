<template lang="pug">
  .todo-item
    label.todo-item__selected
      input(
        type="checkbox"
        v-model="completed"
      )
    .todo-item__title
      span.todo-item__id {{ index }}:
      | {{ todo.title }}
    button.todo-item__close(@click.prevent="$emit(\'remove\')")
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {},
    index: Number
  },
  data() {
    return {
      completed: {
        type: Boolean,
        default: false
      }
    }
  },
  methods: {
    someFn(ev) {
      console.log('someFN ', ev);
    }
  }
};
</script>

<style lang="sass">
  .todo-item
    position: relative
    display: flex
    margin: 10px auto
    padding: 5px 30px 5px 5px
    border: 2px solid #ddd
    font-size: 18px
    &__id
      margin-right: 10px
    &__selected
      display: block
      margin-right: 16px
    &__close
      position: absolute
      top: 50%
      right: 0
      transform: translate(0, -50%)
      margin: 0 5px
      border: 1px solid #222
      background: none
      border-radius: 50%
      width: 20px
      height: 20px
      line-height: 20px
      &:before, &:after
        content: ''
        position: absolute
        top: 50%
        left: 50%
        width: 75%
        height: 2px
        background-color: #222
      &:before
        transform: translate(-50%, -50%) rotate(45deg)
      &:after
        transform: translate(-50%, -50%) rotate(-45deg)
        // transform: translate
</style>
