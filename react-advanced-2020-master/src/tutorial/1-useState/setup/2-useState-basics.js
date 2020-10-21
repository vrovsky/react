import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Хочешь КУКИШЬ?");
  const [buttonTitle, setButtonTitle] = useState("Ну конечно!!!");
  const handleClick = () => {
    if (text === "Хочешь КУКИШЬ?") {
      setText("KUKISH(заморский)");
      setButtonTitle("УБЕРИ СВАИ КУКИШЫ");
    } else {
      setButtonTitle("Ну конечно!!!");
      setText("Хочешь КУКИШЬ?");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        {buttonTitle}
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
