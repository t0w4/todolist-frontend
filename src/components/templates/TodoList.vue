<template>
    <div class="tasks-view">
      <SiteHeader />
      <div class="tasks-list-wrapper">
        <TaskColumn v-bind:tasks="tasks_todo">todo</TaskColumn>
        <TaskColumn v-bind:tasks="tasks_in_progress">in progress</TaskColumn>
        <TaskColumn v-bind:tasks="tasks_in_review">in review</TaskColumn>
        <TaskColumn v-bind:tasks="tasks_done">done</TaskColumn>
      </div>

      <div class="example-modal-window">
        <p>ボタンを押すとモーダルウィンドウが開きます</p>
        <button class="add-circle-button" @click="openModal">
          <img class="add-circle-img" src="@/assets/add_circle.svg">
        </button>

        <!-- コンポーネント MyModal -->
        <TaskModal @close="closeModal" v-if="modal">
          <!-- default スロットコンテンツ -->
          <p>Vue.js Modal Window!</p>
          <div><input v-model="message"></div>
          <!-- /default -->
          <!-- footer スロットコンテンツ -->
          <template slot="footer">
            <button @click="doSend">送信</button>
          </template>
          <!-- /footer -->
        </TaskModal>
      </div>
    </div>
</template>

<script lang='ts'>
import { mapState } from 'vuex';
import SiteHeader from '@/components/organsms/SiteHeader.vue';
import TaskModal from '@/components/organsms/TaskModal.vue';
import TaskColumn from '@/components/organsms/TaskColumn.vue';
export default {
  name: 'TodoList',
  components: {
    SiteHeader,
    TaskModal,
    TaskColumn,
  },

  data() {
    return {
      modal: false,
      message: '',
    }
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
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.add-circle-button {
  background-color: transparent;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: none;
  outline: none;
}
.add-circle-button:active {
  bottom: 9px;
  right: px;
}
.add-circle-img {
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.6));
}

.tasks-list-wrapper {
  display: flex;
  padding-top: 50px;
}
</style>