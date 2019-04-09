import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';
import { generateID, filterTodos } from '../../utils';
import { Container, ContainerInput, ContainerSelect } from './styles';

class TodosRedux extends Component {
  state = {
    categValue: '',
    textValue: '',
    selectedCateg: ''
  };

  createTodo = e => {
    const { textValue, categValue } = this.state;
    if (textValue) {
      const { createCategory, createTodo } = this.props;
      const todo = {
        id: generateID(),
        text: textValue,
        category: categValue || 'General'
      };
      createTodo(todo);
      createCategory(categValue);
      this.setState(() => ({ categValue: '', textValue: '' }));
    }
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  toggleTodoComplete = todoId => () => {
    const { toggleTodoComplete } = this.props;
    toggleTodoComplete(todoId);
  };

  render() {
    console.log('render');

    const { categValue, textValue, selectedCateg } = this.state;
    const { todos, categories } = this.props;

    return (
      <Container>
        <h1>Todo List Using Redux</h1>
        <Row>
          <Col sm={8}>
            <TodoList
              list={filterTodos(todos, selectedCateg)}
              toggleTodoComplete={this.toggleTodoComplete}
            />
          </Col>
          <Col sm={4}>
            <ContainerSelect>
              <Select
                name="selectedCateg"
                onChange={this.onInputChange}
                options={categories}
              />
            </ContainerSelect>
          </Col>
        </Row>
        <ContainerInput>
          <Button onClick={this.createTodo}>
            <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678092-sign-add-512.png" />
          </Button>
          <Input
            placeholder="Task"
            name="textValue"
            value={textValue}
            onChange={this.onInputChange}
          />
          <Input
            placeholder="Category"
            name="categValue"
            value={categValue}
            onChange={this.onInputChange}
          />
        </ContainerInput>
      </Container>
    );
  }
}

export default TodosRedux;
