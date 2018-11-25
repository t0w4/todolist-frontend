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
    // state.board.tasks に配列でアクセスして更新すると画面に反映されないのでdelete, insert
    // 理由: https://jp.vuejs.org/2016/02/06/common-gotchas/
    state.board.tasks = state.board.tasks.filter((task) => {
      return task.uuid !== payload.uuid;
    });
    state.board.tasks.push(payload);
    state.board.tasks.sort((a, b) => {
      if ( a.id < b.id ) { return -1; }
      if ( a.id > b.id ) { return 1; }
      return 0;
    });
  },

  [types.DELETE_TASK](state, payload: string) {
    state.board.tasks = state.board.tasks.filter((task) => {
      return task.uuid !== payload;
    });
  },
};
