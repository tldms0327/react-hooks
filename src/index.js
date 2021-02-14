import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//update an iniput
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  //function
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setValue(value);
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  //Mr.가 useInput내로 전달
  const name = useInput("Mr.");

  return (
    <div className="App">
      <h1> Hello </h1>
      <h2> Hook </h2>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      {/* ...을 쓰면 원소의 모든 내용을 unpacking */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
