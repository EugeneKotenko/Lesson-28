import React from "react";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import "./app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
