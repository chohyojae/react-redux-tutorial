import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = ({
  input, //input 텍스트박스에 입력되는 값
  todos, //할 일 목록을 담은 객체
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({ input: todos.input, todos: todos.todos }),
  { changeInput, insert, toggle, remove },
)(TodosContainer);
