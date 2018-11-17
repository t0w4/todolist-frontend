<template>
    <div class="tasks-view">
      <SiteHeader />
      <div class="tasks-list-wrapper">
        <TaskColumn v-bind:tasks="tasks_todo">todo</TaskColumn>
        <TaskColumn v-bind:tasks="tasks_in_progress">in progress</TaskColumn>
        <TaskColumn v-bind:tasks="tasks_in_review">in review</TaskColumn>
        <TaskColumn v-bind:tasks="tasks_done">done</TaskColumn>
      </div>
    </div>
</template>

<script lang='ts'>
import { mapState } from 'vuex';
import SiteHeader from '@/components/organsms/SiteHeader.vue';
import TaskColumn from '@/components/organsms/TaskColumn.vue';
export default {
  name: 'TodoList',
  components: {
    SiteHeader,
    TaskColumn,
  },

  computed: {
    ...mapState({
      tasks: state => state.board.tasks,
      tasks_todo: state => state.board.tasks.filter((task) => {
        return task.status === 'todo';
      }),
      tasks_in_progress: state => state.board.tasks.filter((task) => {
        return task.status === 'in_progress';
      }),
      tasks_in_review: state => state.board.tasks.filter((task) => {
        return task.status === 'in_review';
      }),
      tasks_done: state => state.board.tasks.filter((task) => {
        return task.status === 'done';
      }),
    }),
  },

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

<style scoped lang="stylus">
.tasks-list-wrapper {
  display: flex;
  padding-top: 50px;
}
</style>