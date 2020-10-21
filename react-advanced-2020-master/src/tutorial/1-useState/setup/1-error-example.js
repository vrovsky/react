import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = () => {
    title = "Hello Slava";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
