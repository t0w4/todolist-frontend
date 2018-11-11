<template>
    <div class="tasks-view">
      <h1>todo lists</h1>
      <TaskBoard />
      <TaskBoard />
    </div>
</template>

<script lang='ts'>
import TaskBoard from '@/components/molecules/TaskBoard.vue';
export default {
  name: 'TodoList',
  components: {
    TaskBoard,
  },
};
</script>
