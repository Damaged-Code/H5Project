import React from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../actions/actions';

let AddMsg = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addMsg(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddMsg = connect()(AddMsg);

export default AddMsg;
