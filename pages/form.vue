<template>
  <div class="container">
    <h1>form</h1>

    <v-input
      :label='input1.label'
      :value='input1.value'
    ></v-input>



  </div>
</template>

<script>
  import VInput from '~/components/VInput'

  export default {
    components: {
      VInput
    },
    data() {
      return {
        input1: {
          label: "First name",
          value: "Michael"
        }
      }
    }
  }
</script>
