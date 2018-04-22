import { combineReducers } from 'redux';
import { ADD_MSG, DEL_MSG } from '../actions/actions';

const initState = [{ text: 'my msg' }];
function MyMSG(state = initState, action) {
  switch (action.type) {
    case ADD_MSG:
      return [
        ...state,
        {
          text: action.text,
        },
      ];
    case DEL_MSG:
      return state.filter((val, key) => {
        //console.log(action.id, key);
        return action.id !== key;
      });
    default:
      return state;
  }
}
const Messes = combineReducers({
  MyMSG,
});

export default Messes;
