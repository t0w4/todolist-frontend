import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/templates/TodoList.vue';
import TodoListDetail from '@/components/templates/TodoListDetail.vue';

Vue.use(Router);

export default [
  {
    path: '/tasks',
    component: TodoList,
  },
  {
    path: '/tasks/:id',
    components: TodoListDetail,
  },
  {
    path: '*',
    redirect: '/',
  },
]