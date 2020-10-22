import React, { useState } from "react";

const UseStateCounter = () => {
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 500);
  };

  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>Количество кукишей</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          УБЕРЫ
        </button>
        <button className="btn" onClick={reset}>
          ГАСИ КАМПУТАР
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          ГОРЦАНИ
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>Расчет потяжелее</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          ГОРЦАНИ С ЗАДЕРЖКОЙ
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
