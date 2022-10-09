import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/fonts/ApercuArabicPro/style.css";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Apercu Arabic Pro; 
   
   
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <Global />
      <App />
    </React.StrictMode>
  </>
);
