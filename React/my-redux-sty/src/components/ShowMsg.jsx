import React, { Component } from 'react';
import { connect } from 'react-redux';
import { delMsg } from '../actions/actions';

class ShowMsg extends Component {
  constructor(props) {
    super(props);
  }
  DelTest = e => {
    let tag = e.target,
      id = +tag.getAttribute('data-id');
    // console.log(id);
    this.props.dispatch(delMsg(id));
    // console.log(this);
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.MyMSG.map((value, key) => (
            <li key={key}>
              {value.text}
              <button onClick={this.DelTest} data-id={key}>
                del msg
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    MyMSG: state.MyMSG,
  };
};
ShowMsg = connect(mapStateToProps)(ShowMsg);
export default ShowMsg;
