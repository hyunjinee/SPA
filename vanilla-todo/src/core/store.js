import { observable } from './observer.js';
import TodoService from '../services/TodoService.js';

export const createStore = (reducer) => {
  const state = observable(reducer());

  const dispatch = (action) => {
    const newState = reducer(state, action);

    for (const [key, value] of Object.entries(newState)) {
      if (!state.hasOwnProperty(key)) continue;
      state[key] = value;
    }
  };

  const getState = () => {
    const frozenState = new Proxy(
      { ...state },
      {
        get(obj, prop) {
          return obj[prop];
        },
        set() {
          return false;
        },
      }
    );

    return frozenState;
  };

  return { dispatch, getState };
};

export const todoService = new TodoService();

const initState = {
  todos: todoService.todos,
  editingId: null,
};

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_EDITING = 'SET_EDITING';
export const SET_EDITING_NULL = 'SET_EDITING_NULL';

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: action.payload };
    case DELETE_TODO:
      return { ...state, todos: action.payload };
    case TOGGLE_TODO:
      return { ...state, todos: action.payload };
    case EDIT_TODO:
      return { ...state, todos: action.payload };
    case SET_EDITING:
      return { ...state, editingId: action.payload };
    case SET_EDITING_NULL:
      return { ...state, editingId: null };
    default:
      return state;
  }
});
