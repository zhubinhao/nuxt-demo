<template>
  <div>
    <div v-for="(item, index) in $store.state.list" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>

</style>
