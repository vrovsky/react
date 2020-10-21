import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Slava",
    age: 25,
    message: "random message",
  });
  const [name, setName] = useState("slava");
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello world" });
    setMessage("hello world");
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default UseStateObject;
