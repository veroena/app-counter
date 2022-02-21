import React, { useState } from "react";

const input = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

function Counter(props) {
  const { value, id, increase, decrease } = props;

  return (
    <div>
      <b data-testid="value">{value}</b>
      <div>
        <button onClick={(event) => decrease(event)} data-testid="decrease" id={id}>-</button>
        <button onClick={(event)=>increase(event)} data-testid="increase"  id={id}>+</button>
      </div>
    </div>
  );
}

function App() {
  const [data, setData] = useState(input);

  const increase = (event) => {
    const id = +event.currentTarget.id;
    let newData = data.map(item =>
      {
        if (item.id === id){
          return {...item, value: item.value + 1};
        }
        return item;
      });
    setData(newData);
  }

  const decrease = (event) => {
    const id = +event.currentTarget.id;
    let newData = data.map(item =>
      {
        if (item.id === id){
          return {...item, value: item.value - 1};
        }
        return item;
      });
    setData(newData);
  }

  return (
    <div>
      {data.map((counter) => (
        <Counter key={counter.id} value={counter.value} id={counter.id} increase={increase} decrease={decrease} />
      ))}
    </div>
  );
}

export default App;
