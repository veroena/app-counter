import React, { useState } from "react";

const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

function Counter(props) {
  const { value } = props;
  const [counter, setCounter] = useState(value);

  const increase = () => {
    setCounter(value => value + 1)
  }
  const decrease = () => {
    setCounter(value => value - 1)
  }

  return (
    <div>
      <b data-testid="value">{counter}</b>
      <div>
        <button onClick={decrease} data-testid="decrease">-</button>
        <button onClick={increase} data-testid="increase">+</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      {data.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </div>
  );
}

export default App;
