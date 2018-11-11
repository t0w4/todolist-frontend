import * as types from './mutation-types';

// 短縮メソッド定義:      https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions_and_function_scope/Method_definitions
// 計算されたプロパティ名: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer
export default {
  [types.FETCH_ALL_TASKS](state, payload) {
    throw new Error('FETCH_ALL_TASKS mutation is not implemented');
  },

  [types.CREATE_TASK](state, payload) {
    throw new Error('CREATE_TASK mutation is not implemented');
  },

  [types.UPDATE_TASK](state, payload) {
    throw new Error('UPDATE_TASK mutation is not implemented');
  },

  [types.DELETE_TASK](state, payload) {
    throw new Error('DELETE_TASK mutation is not implemented');
  },
};
