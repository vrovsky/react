import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  useEffect(() => {
    if (value > 0) document.title = `New messages(${value})`;
  });
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
