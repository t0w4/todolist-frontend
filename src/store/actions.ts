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

  createTask: ({ commit }, task: {title: string, detail: string, status: string}) => {
    return Task.create(task)
      .then( (created_task) => {
        commit(types.CREATE_TASK, created_task);
      })
      .catch( (err) => {
        throw err;
      });
  },

  updateTask: ({ commit }, task: {uuid: string, title: string, detail: string, status: string}) => {
    return Task.update(task)
      .then( (updated_task) => {
        commit(types.UPDATE_TASK, updated_task);
      })
      .catch( (err) => {
        throw err;
      });
  },

  deleteTask: ({ commit }, uuid: string) => {
    return Task.delete(uuid)
      .then( () => {
        commit(types.DELETE_TASK, uuid);
      })
      .catch( (err) => {
        throw err;
      });
  },
};
