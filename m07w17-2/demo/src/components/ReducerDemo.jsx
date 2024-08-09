import {useReducer} from 'react';

import {reducer, defaultState} from './reducer';

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // dispatch makes a polite request to have the state updated in some way
  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementBy5 = () => {
    dispatch({ type: 'incrementByN', payload: 5 });
  };

  const incrementBy10 = () => {
    dispatch({ type: 'incrementByN', payload: 10 });
  };

  return (
    <div>
      <h2>Reducer Demo</h2>
      <h2>Current count is: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementBy5}>+5</button>
      <button onClick={incrementBy10}>+10</button>
    </div>
  );
};

export default ReducerDemo;
