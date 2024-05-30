import React from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { createStore } from 'redux';

// Define your initial state and reducer
const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENT_BY':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

// Create the Redux store
const store = createStore(reducer);

const handleIncrement = () => {
  store.dispatch({ type: 'INCREMENT' });
};

const handleDecrement = () => {
  store.dispatch({ type: 'DECREMENT' });
};

const handleIncrementBy = (value) => {
  store.dispatch({ type: 'INCREMENT_BY', payload: value });
};

function App() {
  const count = useSelector((state) => state.count);

  return (
    <>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => handleIncrementBy(5)}>Increment by 5</button>
        <p>count is {count}</p>
      </div>
    </>
  );
}

function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ReduxApp;
