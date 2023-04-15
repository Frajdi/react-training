import React, { useState } from 'react'

const FilterList = () => {
    const fruits = ["orange", "apple", "bannana", "pineapple", "lemon"];
  const [searchValue, setSearchValue] = useState("");
  const result = fruits.filter((fruit) =>
    fruit.includes(searchValue.toLowerCase())
  );
  function handleChange(event) {
    setSearchValue(event.target.value);
  }
  return (
    <div>
      {" "}
      <label>Search:</label>{" "}
      <input
        onChange={(event) => {
          handleChange(event);
        }}
        type="text"
      ></input>{" "}
      <ul>
        {" "}
        {result.map((item) => {
          return <li key={item}> {item}</li>;
        })}
      </ul>{" "}
    </div>
  );
}

export default FilterList