import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const content = [
  {
    tab: "Section1",
    content: "content of the section 1"
  },
  {
    tab: "Section2",
    content: "content of the section 2"
  }
];

const useTabs = (initialtab, allTabs) => {
  //원하는 input이 아닐 땐 kill function
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialtab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  console.log("contents:", content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
