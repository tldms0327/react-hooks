import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// useEffect = ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

//reference : 우리의 component의 어떤 부분을 선택할 수 있게 하는,
//document.getElementByID()같은 것
// react의 모든 component는 reference element를 가지고 있다.

//useClick
const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    //componentDidmount 상태에서 동작 //element가 있는지 확인하기
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    //useEffect에서 return하는 함수는 componentWillUnMount때 호출된다!
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
    //dependency를 넘겨주지 않으면 update 될때마다 addEventListener가 생성되는 것이므로
    //이렇게 되는걸 원하지 않으니 Didmount될 때 한번만 실행하기 위해 dependency를 비워주자!
  }, []);
  return element;
};

const App = () => {
  const say = () => console.log("hi");
  const title = useClick(say);

  return (
    <div className="App">
      <h1> Hooks </h1>
      <h2 ref={title}>Hi</h2>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
