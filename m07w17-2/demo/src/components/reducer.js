// make all updates to state
export const reducer = (state, action) => {
  if (action.type === 'increment') {
    // increment state and return it
    const copy = {
      ...state,
      count: state.count + 1,
    };
    return copy;
  }

  if (action.type === 'decrement') {
    // decrement state and return it
    const copy = {
      ...state,
      count: state.count - 1,
    };
    return copy;
  }

  if (action.type === 'incrementByN') {
    const copy = {
      ...state,
      count: state.count + action.payload,
    };

    return copy;
  }
};

// default state
export const defaultState = {
  count: 0,
  moreStuff: 'hello world'
};
