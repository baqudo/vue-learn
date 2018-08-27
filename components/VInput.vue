<template>
    <!-- begin v-input -->
    <label class="v-input">
      <div class="v-input__label">{{ label }}</div>    
      <input
        class="v-input__field"
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >
    </label>
    <!-- end v-input -->
  
</template>

<script>
export default {

  name: 'VInput',
  data () {
    return {
      inheritAttrs: false,
      props: ['label', 'value'],
      computed: {
        inputListeners: function () {
          var vm = this
          // `Object.assign` merges objects together to form a new object
          return Object.assign({},
            // We add all the listeners from the parent
            this.$listeners,
            // Then we can add custom listeners or override the
            // behavior of some listeners.
            {
              // This ensures that the component works with v-model
              input: function (event) {
                vm.$emit('input', event.target.value)
              }
            }
          )
        }
      },
    }
  }
}
</script>

<style lang="sass">

.v-input
    &__field
      width: 279px
      height: 42px
      border: 1px solid #c2c2c2
      background-color: #ffffff
      color: #606060
      font-family: Lato, sans-serif
      font-size: 12px
      font-weight: 400
      line-height: 43px
      letter-spacing: 0.6px

    &__label
        color: #606060
        font-family: Lato, sans-serif
        font-size: 12px
        font-weight: 400
        line-height: 43px
        text-transform: uppercase
        // Text style for "First name"
        letter-spacing: 0.6px
</style>