import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//update an iniput
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  //function
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    //validator로서 함수가 들어왔을 때만 동작
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  //bool을 리턴하는 함수 정의
  const maxLen = (value) => value.length <= 10;

  const name = useInput("Mr.", maxLen);

  return (
    <div className="App">
      <h1> Hello </h1>
      <h2> Hook </h2>
      {/* ...을 쓰면 원소의 모든 내용을 unpacking */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
