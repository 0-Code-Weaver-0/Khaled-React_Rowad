import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  function decrement () {
    if(count>0){ 
    setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="text-center my-5">
      <h1 className="text-danger">{count}</h1>
      <div className="btn-group">
        <button className="btn btn-primary" onClick={increment}>+</button>
        <button className="btn btn-primary" onClick={decrement}>-</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;