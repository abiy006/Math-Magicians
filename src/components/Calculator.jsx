import { useState } from 'react';
import './styles.css';
import calculate from '../logic/calculate';

function useHandleButtonOperation() {
  const [currentState, setCurrentState] = useState({ total: 0, next: null, operation: null });

  const addDigit = (buttonName) => {
    setCurrentState(calculate(currentState, buttonName));
  };

  return [currentState, addDigit];
}

function Calculator() {
  const [currentState, addDigit] = useHandleButtonOperation();
  return (
    <div className="calc-main">
      <div className="math-desc">Let&#39;s do some math!</div>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{' '}</div>
          <div className="current-operand">{' '}</div>
          {currentState.next || currentState.total || '0'}
        </div>
        <button type="button" className="normal" onClick={() => addDigit('AC')}>AC</button>
        <button type="button" className="normal" onClick={() => addDigit('+/-')}>+/-</button>
        <button type="button" className="normal" onClick={() => addDigit('%')}>%</button>
        <button type="button" className="operators" onClick={() => addDigit('÷')}>÷</button>
        <button type="button" className="normal" onClick={() => addDigit('7')}>7</button>
        <button type="button" className="normal" onClick={() => addDigit('8')}>8</button>
        <button type="button" className="normal" onClick={() => addDigit('9')}>9</button>
        <button type="button" className="operators" onClick={() => addDigit('x')}>x</button>
        <button type="button" className="normal" onClick={() => addDigit('4')}>4</button>
        <button type="button" className="normal" onClick={() => addDigit('5')}>5</button>
        <button type="button" className="normal" onClick={() => addDigit('6')}>6</button>
        <button type="button" className="operators" onClick={() => addDigit('-')}>-</button>
        <button type="button" className="normal" onClick={() => addDigit('1')}>1</button>
        <button type="button" className="normal" onClick={() => addDigit('2')}>2</button>
        <button type="button" className="normal" onClick={() => addDigit('3')}>3</button>
        <button type="button" className="operators" onClick={() => addDigit('+')}>+</button>
        <button type="button" className="span-two" onClick={() => addDigit('0')}>0</button>
        <button type="button" className="normal" onClick={() => addDigit('.')}>.</button>
        <button type="button" className="operators" onClick={() => addDigit('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
