import { connect } from 'react-redux';
import TodosRedux from './TodosRedux';
import { createCategory } from '../../redux/ducks/categories';
import { createTodo, toggleTodoComplete } from '../../redux/ducks/todos';

const mapStateToProps = state => {
  return {
    categories: state.categories.list,
    todos: state.todos.list
  };
};

const mapDispatchToProps = {
  createCategory,
  createTodo,
  toggleTodoComplete
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosRedux);
