import { createElement } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");

const tasks = ["eat less", "read DOC", "sleep early"];

// const x = tasks.forEach((el) => console.log(el))
// console.log(x);

// const x = tasks.map((el,index) => console.log(el,index))
// console.log(x)

// const heading = document.createElement("h1");
// heading.innerText = "Hello React";

// rootElement.append(heading)
 const root = createRoot(rootElement);
root.render(
  createElement(
    "div",
    null,
    createElement("h1", null, "Todo App"),
    createElement("input", null, null),
    createElement("button", null, "Add New"),
    createElement(
      "ul",
      null,
      tasks.map((task,index) => createElement("li",{key:index,className: "list"},task))
    )
  )
);
