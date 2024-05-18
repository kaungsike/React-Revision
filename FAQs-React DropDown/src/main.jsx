import ReactDOM from "react-dom/client"
import App from "./App";
import "./style.css"


const rootElement = document.querySelector("#root");


const root = ReactDOM.createRoot(rootElement);

root.render(<App/>)