import * as types from './mutation-types';
import { Task } from '../api';

export default {
  fetchTasks: ({ commit }) => {
    return Task.fetch()
      .then( ({ tasks }) => {
        commit(types.FETCH_ALL_TASKS, tasks)
      })
      .catch( (err) => { throw err })
  },

  createTask: ({ commit }) => {
    throw new Error('createTask action is not implemented');
  },

  updateTask: ({ commit }) => {
    throw new Error('updateTask action is not implemented');
  },

  deleteTask: ({ commit }) => {
    throw new Error('deleteTask action is not implemented');
  },
};
