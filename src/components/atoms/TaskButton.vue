<template>
  <button type="button"><slot></slot></button>
</template>

<script lang='ts'>
export default {
  name: 'TaskButton',
};
</script>

<style scoped lang="stylus">
  button {
    border: none;
  }
</style>
