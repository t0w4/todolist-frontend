import * as types from './mutation-types';

// 短縮メソッド定義:      https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/Method_definitions
// 計算されたプロパティ名: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer
export default {
  [types.FETCH_ALL_TASKS](state: any, payload: any[]) {
    state.board.tasks = payload;
  },

  [types.CREATE_TASK](state, payload) {
    state.board.tasks.push(payload);
  },

  [types.UPDATE_TASK](state, payload) {
    throw new Error('UPDATE_TASK mutation is not implemented');
  },

  [types.DELETE_TASK](state, payload: string) {
    state.board.tasks = state.board.tasks.filter((task) => {
      return task.uuid !== payload;
    });
  },
};
