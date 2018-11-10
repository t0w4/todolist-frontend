import TodoList from '@/components/templates/TodoList.vue';
import TodoListDetail from '@/components/templates/TodoListDetail.vue';

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
    redirect: '/tasks',
  },
]