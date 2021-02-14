import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// useEffect = ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  //title이 바뀔 때만 위의 내용을 trigger
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  //title의 default값 설정
  const titleUpdater = useTitle("Loading...");
  //시간 지연 설정(로딩하고 5초 후에 title이 바뀌게 해보자)
  setTimeout(() => titleUpdater("home"), 5000);

  return (
    <div className="App">
      <h1> Hooks </h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
