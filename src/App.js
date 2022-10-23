import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const changeData = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    setData([...data, input]);
    setInput("");
  };

  const handleFilter = () => {};

  return (
    <div className="App">
      <h1> Todo List </h1>
      <input type="text" value={input} onChange={(e) => changeData(e)} />
      <button onClick={addItem}>Submit</button>
      {data.map((data) => (
        <li>{data}</li>
      ))}
      <button onClick={handleFilter}>Clear Completed</button>
    </div>
  );
}

export default App;
