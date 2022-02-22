import React, { useState } from "react";
import "./App.css"

const input = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

function Counter(props) {
  const { value, id, increase, decrease } = props;

  return (
    <div className="counter__item">
      <p className="value" data-testid="value">{value}</p>
      <div>
        <button
          className="counter__button increase"
          onClick={(event)=>increase(event)}
          data-testid="increase" 
          id={id}
        >
          +
        </button>
        <button
          className="counter__button decrease"
          onClick={(event) => decrease(event)}
          data-testid="decrease"
          id={id}
        >
          -
        </button>
      </div>
    </div>
  );
}

function App() {
  const [data, setData] = useState(input);
  const [total, setTotal] = useState(0);

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
    setTotal(total + 1);
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
    setTotal(total - 1);
  }

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1 className="title">Counters challenge</h1>
        </header>
        <div className="counters">
          {data.map((counter) => (
            <Counter
              key={counter.id}
              value={counter.value}
              id={counter.id}
              increase={increase}
              decrease={decrease}
            />
          ))}
        </div>
        <div className="total">
          <p className="total__text">Total count:</p>
          <p className="total__value" data-testid="total">{total}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
