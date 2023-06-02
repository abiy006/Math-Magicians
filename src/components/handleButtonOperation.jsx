import { useState } from 'react';
import calculate from '../logic/calculate';

function handleButtonOperation() {
  const [currentState, setCurrentState] = useState({ total: 0, next: null, operation: null });

  const addDigit = (buttonName) => {
    setCurrentState(calculate(currentState, buttonName));
  };

  return [currentState, addDigit];
}

export default handleButtonOperation;
