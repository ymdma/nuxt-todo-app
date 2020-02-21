<template>
  <div>

  </div>
</template>


<script>

  export default {
    created: function() {
      this.$store.dispatch('todos/init') //initの呼び出し
    }
  }
</script>

<style>

</style>script



// まずは、todos.jsのinitを呼び出して初期化する