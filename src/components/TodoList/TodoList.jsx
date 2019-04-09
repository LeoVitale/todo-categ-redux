import React from 'react';
import Checkbox from '../Checkbox';
import TodoItem from '../TodoItem';

const TodoList = ({ list, toggleTodoComplete }) => {
  return list.map((todo, index) => {
    return <TodoItem key={index} todo={todo} onChange={toggleTodoComplete} />;
  });
};

export default TodoList;
