<template>
  <div class="task-card">
    <div class="task-group card-element">
      <p class="task-group-element">{{ task.title }}</p>
      <p class="task-group-element">{{ task.created_at }}</p>
    </div>
    <TaskButton class="task-button card-element"></TaskButton>
  </div>
</template>

<script lang='ts'>
import TaskButton from '@/components/atoms/TaskButton.vue';

export default {
  name: 'TaskCard',

  components: {
    TaskButton,
  },

  props: {
    task: {
      type: Object,
    },
  },
};
</script>

<style scoped>
  .task-group {
    text-align: left;
    font-size: 17px;
  }
  .task-group-element {
    margin: 0.3em;
  }
  .task-button {
    margin: 0.7em;
  }
  .card-element {
    float: left;
  }
  .task-card {
    overflow: hidden;
    padding: 0.5em 1em; /* 外枠と文字との距離 */
    margin: 2em 0; /* 外枠からのmargin */
    font-weight: bold;
    color: #6091d3;/*文字色*/
    background: #FFF;
    border: solid 3px #6091d3;/*線*/
    border-radius: 10px;/*角の丸み*/
  }

  /* clearfix */
  .task-card:before,
  .task-card:after {
    content: "";
    display: table;
  }
</style>
