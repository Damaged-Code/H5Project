import { createStore } from 'redux';
import Messes from '../reducers/reducers';
/* 
创建数据仓库
*/
let store = createStore(
  Messes,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
