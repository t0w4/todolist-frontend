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

        <TaskModal @close="closeModal" v-if="modal">
          <!-- header スロットコンテンツ -->
          <template slot="header">
            <div>タスク登録</div>
          </template>
          <!-- /header -->
          <!-- スロットコンテンツ -->
          <div>
            <input type="text" class="form-element input-title" v-model="task.title" placeholder="タイトル"/>
            <textarea class="form-element textarea-detail" v-model="task.detail" rows="8" placeholder="詳細"/>
          </div>
          <!-- footer スロットコンテンツ -->
          <template slot="footer">
            <button @click="doSend">登録</button>
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
      task: {
        title: '',
        detail: '',
        status: 'todo',
      },
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
    createTask(task: {title: string, detail: string, status: string}) {
      this.$store.dispatch('createTask', task)
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.task.title.length > 0 || this.task.detail.length > 0) {
        this.createTask(this.task);
        this.task.title = '';
        this.task.detail = '';
        this.task.status = 'todo';
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.form-element {
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	outline: none;
	display: block;
	width: 500px;
	padding: 7px;
	border: none;
	border-bottom: 1px solid #ddd;
	background: transparent;
	margin-bottom: 10px;
	font: 16px Arial, Helvetica, sans-serif;
}
.input-title {
	height: 45px;
}
.textarea-detail {
	overflow: hidden;
}
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