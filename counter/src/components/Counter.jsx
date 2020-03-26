import React from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

export const Counter = ({counter, dec, inc, rnd}) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={rnd}>RND</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);