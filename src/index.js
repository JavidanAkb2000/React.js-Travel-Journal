import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App";
import {createRoot} from "react-dom/client"


const root = document.getElementById("root");
const reactRoot = createRoot(root);
reactRoot.render(
    <App />
)
