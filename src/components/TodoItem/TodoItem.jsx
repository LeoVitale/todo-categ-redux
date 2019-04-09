import React from 'react';
import Checkbox from '../Checkbox';
import { Container, Tag } from './styles';

const TodoItem = ({ todo, onChange }) => {
  const { text, category, done, id } = todo;
  return (
    <Container done>
      <Checkbox
        name={id}
        label={text}
        checked={done || false}
        value={done || false}
        onChange={onChange(id)}
      />
      <Tag>{category}</Tag>
    </Container>
  );
};

export default TodoItem;
