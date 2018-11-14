<template>
    <div class="tasks-view">
      <h1>todo lists</h1>
      <div class="tasks-list-wrapper">
        <div class="tasks-column">
          <h2 class="task-status">
            <span class="task-text">todo</span>
          </h2>
          <ul class="task-list">
            <li v-for="task in tasks" :key="task.id">
              <TaskCard v-bind:task="task"/>
            </li>
          </ul>
        </div>

        <div class="tasks-column">
          <h2 class="task-status">
            <span class="task-text">in progress</span>
          </h2>
          <ul class="task-list">
            <li v-for="task in tasks" :key="task.id">
              <TaskCard v-bind:task="task"/>
            </li>
          </ul>
        </div>

        <div class="tasks-column">
          <h2 class="task-status">
            <span class="task-text">in review</span>
          </h2>
          <ul class="task-list">
            <li v-for="task in tasks" :key="task.id">
              <TaskCard v-bind:task="task"/>
            </li>
          </ul>
        </div>

        <div class="tasks-column">
          <h2 class="task-status">
            <span class="task-text">done</span>
          </h2>
          <ul class="task-list">
            <li v-for="task in tasks" :key="task.id">
              <TaskCard v-bind:task="task"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script lang='ts'>
import { mapState } from 'vuex';
import TaskCard from '@/components/molecules/TaskCard.vue';
export default {
  name: 'TodoList',
  components: {
    TaskCard,
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

<style scoped lang="stylus">
.tasks-list-wrapper {
  display: flex;
}

.tasks-column {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0 0.5em; /* 外枠と文字との距離 */
  margin: 0.5em 0.3em; /* 外枠からのmargin */
  background: #FFF;
  border: solid 3px rgb(143, 135, 135);/*線*/
  border-radius: 20px;/*角の丸み*/
}

.task-status {
  text-align: left;
}

.task-text {
  border-bottom: double 6px green;
}

.task-list {
  list-style: none;
  padding-left: 2px;
}
</style>