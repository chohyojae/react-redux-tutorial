import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => {
//   return { number: state.counter.number };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//   };
// };

export default connect(
  (state) => {
    return { number: state.counter.number };
  },
  { increase, decrease },
)(CounterContainer);