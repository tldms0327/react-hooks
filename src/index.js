import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// useEffect = ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

//reference : 우리의 component의 어떤 부분을 선택할 수 있게 하는,
//document.getElementByID()같은 것
// react의 모든 component는 reference element를 가지고 있다.

const App = () => {
  const ref_ex = useRef();
  //getElementById 역할
  setTimeout(() => console.log(ref_ex.current), 3000);
  setTimeout(() => ref_ex.current.focus(), 3000);

  return (
    <div className="App">
      <h1> Hooks </h1>
      <input ref={ref_ex} placeholder="la" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
