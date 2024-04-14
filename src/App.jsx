import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NewsList from "./components/header/news_list";
import Header from "./components/header/index";
import "./components/styles/styles.css";
import StatePlayground from "./components/playground/state";

function App() {
  return (
    <>
      <Header />
      <div className="container">{/* <StatePlayground /> */}</div>
    </>
  );
}
export default App;
