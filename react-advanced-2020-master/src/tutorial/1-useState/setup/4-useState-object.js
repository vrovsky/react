import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Slava",
    age: 24,
    message: "random message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello world" });
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default UseStateObject;
