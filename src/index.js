import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import r2wc from "@r2wc/react-to-web-component";
import FastMenuItems from "./FastMenuItems";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const FastMenuItemsWidget = r2wc(FastMenuItems, {
  props: {
    subdomain: "string",
  },
});

customElements.define("fastmenu-widget", FastMenuItemsWidget);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
