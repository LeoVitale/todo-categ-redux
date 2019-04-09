import { generateID } from '../../utils';

export const CREATE_TODO = 'lumen5/todo/CREATE_TODO';
export const TOGGLE_TODO = 'lumen5/todo/TOGGLE_TODO';

const initialState = {
  list: [
    {
      id: generateID(),
      text: 'Test Todo Redux',
      category: 'General',
      done: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: todo
});

export const toggleTodoComplete = todos => ({
  type: TOGGLE_TODO,
  payload: todos
});
