import React from "react";

let data1 = [
  { id: 1, name: "Bertie Yates", age: 29 },
  { id: 2, name: "Hester Hogan", age: 32 },
  { id: 3, name: "Larry Little", age: 36 },
];

const UseStateArray = () => {
  //   const removeItem = (id) => {
  //     let newPeople = people.filter((person) => person.id !== id);
  //     setPeople(newPeople);
  //   };

  const [data, setData] = React.useState(data1);

  return (
    <div>
      <h3>{data.length} birthdays today</h3>
      {data.map((person) => {
        const { id, name, age } = person;
        return (
          <section key={id} className="item">
            {name}, {age}
          </section>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setData([]);
        }}
      >
        Clear all items
      </button>
    </div>
  );
};

export default UseStateArray;
