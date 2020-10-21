import React, { Fragment } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const [people, setPeople] = React.useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>delete</button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear all items
      </button>
    </div>
  );
};

export default UseStateArray;
