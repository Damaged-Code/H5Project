/* 
配置要做的行为
*/

export const ADD_MSG = 'ADD_MSG';

export const DEL_MSG = 'DEL_MSG';

export function addMsg(text) {
  return { type: ADD_MSG, text };
}

export function delMsg(id) {
  return { type: DEL_MSG, id };
}
