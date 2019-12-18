import { createStore } from 'redux';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: state.todos.concat(action.todo) };
    case 'REVERSE_TODOS':
      return { todos: state.todos.slice().reverse() };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  { todos: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
