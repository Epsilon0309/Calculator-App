import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { addition ,substraction, multiplication, division ,reset} from "./features/calculator/calculatorSlice";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [error, setError] = useState("");

  const count = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();

  function handleAdditionEvent() {
    setError("");
    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers");
      return;
    }
    const sum = {
      num1: parseFloat(num1) || 0,
      num2: parseFloat(num2) || 0,
    };
    dispatch(addition(sum));
  }
  function handleSubstractionEvent() {
    setError("");
    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers");
      return;
    }
    const sum = {
      num1: parseFloat(num1) || 0,
      num2: parseFloat(num2) || 0,
    };
    dispatch(substraction(sum));
  }
  function handleMultiplicationEvent() {
    setError("");
    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers");
      return;
    }
    const sum = {
      num1: parseFloat(num1) || 0,
      num2: parseFloat(num2) || 0,
    };
    dispatch(multiplication(sum));
  }
  function handleDivisionEvent() {
    setError("");
    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers");
      return;
    }
    if (parseFloat(num2) === 0) {
      setError("Division by zero is not allowed");
      return;
    }
    const sum = {
      num1: parseFloat(num1) || 0,
      num2: parseFloat(num2) || 0,
    };
    dispatch(division(sum));
  }
  function handleResetEvent(){
    setError("");
    setNum1(0);
    setNum2(0);
    dispatch(reset());
  } 

  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div className="input-group">
        <label htmlFor="num1">First Number:</label>
        <input
          id="num1"
          type="number"
          value={num1}
          placeholder="Enter first number"
          onChange={(e) => setNum1(e.target.value)}
          aria-label="First number"
        />
      </div>
      <div className="input-group">
        <label htmlFor="num2">Second Number:</label>
        <input
          id="num2"
          type="number"
          value={num2}
          placeholder="Enter second number"
          onChange={(e) => setNum2(e.target.value)}
          aria-label="Second number"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <h3>Result: {count}</h3>
      <button onClick={handleAdditionEvent} aria-label="Add numbers">
        Add Numbers
      </button>
      <button onClick={handleSubstractionEvent} aria-label="Substract numbers">
        Substract Numbers
      </button>
      <button onClick={handleMultiplicationEvent} aria-label="Multiply numbers">
        Multiply Numbers
      </button>
      <button onClick={handleDivisionEvent} aria-label="Divide numbers">
        Divide Numbers
      </button>
      <button onClick={handleResetEvent} aria-label="Divide numbers">
        Reset
      </button>
    </div>
  );
}

export default App;
