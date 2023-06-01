import './styles.css';

function Calculator() {
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{' '}</div>
        <div className="current-operand">0</div>
      </div>
      <button type="button" className="normal">AC</button>
      <button type="button" className="normal">+/-</button>
      <button type="button" className="normal">%</button>
      <button type="button" className="operators">÷</button>
      <button type="button" className="normal">7</button>
      <button type="button" className="normal">8</button>
      <button type="button" className="normal">9</button>
      <button type="button" className="operators">x</button>
      <button type="button" className="normal">4</button>
      <button type="button" className="normal">5</button>
      <button type="button" className="normal">6</button>
      <button type="button" className="operators">-</button>
      <button type="button" className="normal">1</button>
      <button type="button" className="normal">2</button>
      <button type="button" className="normal">3</button>
      <button type="button" className="operators">+</button>
      <button type="button" className="span-two">0</button>
      <button type="button" className="normal">.</button>
      <button type="button" className="operators">=</button>
    </div>
  );
}

export default Calculator;
