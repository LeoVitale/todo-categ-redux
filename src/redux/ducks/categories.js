export const CREATE_CATEGORY = 'lumen5/todo/CREATE_CATEGORY';

const initialState = {
  list: ['General']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        list: createCategories(state.list, action.payload)
      };
    default:
      return state;
  }
};

export const createCategory = category => ({
  type: CREATE_CATEGORY,
  payload: category
});

const createCategories = (categories, categValue) => {
  const tempCategories = [...categories];
  if (!categories.includes(categValue)) {
    tempCategories.push(categValue);
  }
  return tempCategories;
};
