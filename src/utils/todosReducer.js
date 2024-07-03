import { useReducer } from 'react';

export const ACTION = {
  add: 'ADD',
  remove: 'REMOVE',
  toggle: 'TOGGLE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.add:
      return [...state, { name: action.payload.name, isComplete: false }];
    case ACTION.remove:
      return state.filter((ele) => ele.name !== action.payload.name);
    case ACTION.toggle:
      return state.map((ele) => {
        if (ele.name === action.payload.name)
          return { ...ele, isComplete: !ele.isComplete };
        return ele;
      });
    default:
      throw new Error('Action not found');
  }
};

const todosReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  return { todos, dispatch };
};

export default todosReducer;
