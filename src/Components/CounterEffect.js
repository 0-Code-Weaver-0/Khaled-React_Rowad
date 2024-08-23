import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CounterWithEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);

  const increment = () => setCount(count + 1);

  return (
    <div className="text-center my-5">
      <p className="h3">Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>+</button>
      <p className="h5 mt-3">Calculation: {calculation}</p>
    </div>
  );
}

export default CounterWithEffect;