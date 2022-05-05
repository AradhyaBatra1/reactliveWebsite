import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import art from "./art.jpg";

import reportWebVitals from "./reportWebVitals";
import Cards from "./Cards";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Cards imgsrc={art} titile="A Netflix Original Series" sname="DARK" />
    <Cards imgsrc={art} titile="A Netflix Original Series" sname="DARK" />
    <Cards imgsrc={art} titile="A Netflix Original Series" sname="DARK" />
    <Cards imgsrc={art} titile="A Netflix Original Series" sname="DARK" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
