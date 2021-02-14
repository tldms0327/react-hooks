import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// useEffect = ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

const App = () => {
  const say1 = () => console.log("say1");
  const say2 = () => console.log("say2");

  // 아직 변수가 선언되기 전이라 작동하지 않음
  useEffect(say1, [number]);
  const [number, setNumber] = useState(0);
  const [anumber, setaNumber] = useState(0);

  //useEffect(함수, dependency) -> dependency에 선언한 값이 변할 때만 함수 실행 => componentWillUpdate
  useEffect(say1, [number]);
  //dependency가 없을 땐 모든 값이 변할 때마다 실행
  useEffect(say2);

  return (
    <div className="App">
      <h1> Hooks </h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setaNumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
