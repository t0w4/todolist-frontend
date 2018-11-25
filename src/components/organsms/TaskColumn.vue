<template>
  <div class="tasks-column">
    <h2 class="task-status">
      <span class="task-text"><slot></slot></span>
    </h2>
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        <a class="task-card-button" @click="setDefaultValue(task);openModal();">
          <TaskCard v-bind:task="task"/>
        </a>
        <TaskModal @close="closeModal" v-if="modal && task.uuid == clicked_task.uuid">
          <!-- header スロットコンテンツ -->
          <template slot="header">
            <div>タスク更新</div>
          </template>
          <!-- /header -->
          <!-- スロットコンテンツ -->
          <div>
            <input type="text" class="form-element input-title" v-model="clicked_task.title" placeholder="タイトル"/>
            <select  class="form-element select-status" required v-model="clicked_task.status">
            	<option value="" hidden>{{ clicked_task.status }}</option>
            	<option>todo</option>
            	<option>in_progress</option>
            	<option>in_review</option>
            	<option>done</option>
            </select>
            <textarea class="form-element textarea-detail" v-model="clicked_task.detail" rows="8" placeholder="詳細"/>
          </div>
          <!-- footer スロットコンテンツ -->
          <template slot="footer">
            <button @click="doSend">更新</button>
          </template>
          <!-- /footer -->
        </TaskModal>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import TaskCard from '@/components/molecules/TaskCard.vue';
import TaskModal from '@/components/organsms/TaskModal.vue';
export default {
  name: 'TaskColumn',
  components: {
    TaskCard,
    TaskModal,
  },

  data() {
    return {
      modal: false,
      clicked_task: {
        uuid: '',
        title: '',
        detail: '',
        status: '',
      },
    }
  },

  props: {
    tasks: {
      type: Array,
    },
  },

  methods: {
    setDefaultValue(task) {
      this.clicked_task.uuid = task.uuid
      this.clicked_task.title = task.title
      this.clicked_task.detail = task.detail
      this.clicked_task.status = task.status
    },
    resetDefaultValue() {
      this.clicked_task.uuid = '';
      this.clicked_task.title = '';
      this.clicked_task.detail = '';
      this.clicked_task.status = '';
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.clicked_task.title.length > 0 && this.clicked_task.detail.length > 0 && this.isPermmitedStatus(this.clicked_task.status)) {
        this.updateTask(this.clicked_task);
        this.resetDefaultValue()
        this.closeModal()
      } else {
        alert('メッセージを入力してください')
      }
    },
    isPermmitedStatus(status) {
      const permmited_status = ['todo', 'in_progress', 'in_review', 'done']
      return permmited_status.includes(status)
    },
    updateTask(task) {
      this.$store.dispatch('updateTask', task );
    }
  },
};
</script>

<style scoped lang="stylus">
.tasks-column {
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

.task-card-button {
  padding: 0;
  width: 100%;
  border: none;
  outline: none;
}

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

.select-status {
  margin: 20px 0;
}
</style>