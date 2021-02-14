import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useConfirm = (message = "", callback, rejection) => {
  if (!callback || typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const usePreventLeave = () => {
  const listener = (event) => {
    //여기에 event가 자동으로 들어가는 이유:
    // 이벤트가 발생하면 브라우져가 이벤트 정보를 담은 객체를 생성해 자동으로 전달해준
    event.preventDefault();
    event.returnValue = "";
  };
  const protect = () => window.addEventListener("before ", listener);
  const unprotect = () => window.removeEventListener("beforeUnload ", listener);
  return { protect, unprotect };
};

const App = () => {
  const deleteWord = () => console.log("Deleting the word...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  const { protect, unprotect } = usePreventLeave();

  return (
    <div className="App">
      <h1> Hooks </h1>
      <button onClick={confirmDelete}>Delete the word</button>
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>Unprotect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
