export const unique = array => {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
};

export const generateID = () => {
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
};

export const filterTodos = (todos, selectedCategory = '') => {
  if (!selectedCategory) {
    return todos;
  }
  return todos.filter(todo => todo.category === selectedCategory);
};
