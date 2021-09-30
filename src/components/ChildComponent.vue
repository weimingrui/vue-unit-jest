<template>
  <div>
    <button @click=onCustomHandle></button>
  </div>
</template>

<script>

  export default {
    name: 'ChildComponent',
    data() {
      return {
        emitted: false
      }
    },
    methods: {
      onCustomHandle() {
        this.$emit('custom')
      }
    }
  }
</script>