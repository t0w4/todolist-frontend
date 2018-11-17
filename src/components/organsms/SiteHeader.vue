<template>
  <div class="site-header">
    <a class="top-link" href="/tasks">todo lists</a>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'SiteHeader',
};
</script>

<style scoped lang="stylus">
.site-header {
  font-size: 2em;
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: skyblue;

  .top-link {
    text-decoration: none;
  }
}
</style>