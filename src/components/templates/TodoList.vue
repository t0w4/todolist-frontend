<template>
    <div class="tasks-view">
      <h1>todo lists</h1>
      <ul class="task-list">
        <li v-for="task in tasks" :key="task.id">
          <TaskBoard v-bind:task="task"/>
        </li>
      </ul>
    </div>
</template>

<script lang='ts'>
import { mapState } from 'vuex';
import TaskBoard from '@/components/molecules/TaskBoard.vue';
export default {
  name: 'TodoList',
  components: {
    TaskBoard,
  },

  computed: mapState({
    tasks: state => state.board.tasks,
  }),

  created() {
    this.loadTasks();
  },

  methods: {
    loadTasks() {
      this.$store.dispatch('fetchTasks')
    },
  },
};
</script>

<style scoped>
.task-list {
  list-style: none;
}
</style>