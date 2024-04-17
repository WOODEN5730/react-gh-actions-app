import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NewsList from "./components/header/news_list";
import Header from "./components/header/index";
import "./components/styles/styles.css";
import StatePlayground from "./components/playground/state";
import { newsData } from "./components/utils/data.js";

function App() {
  let [news, setNews] = useState(newsData);

  const getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = newsData.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    });
    setNews(filtered);
  };
  return (
    <>
      <Header getKeywords={getKeywords} />
      <div>
        {/* <StatePlayground /> */}
        <NewsList news={news}>
          <br />
          <h1>I am a children</h1>
        </NewsList>
      </div>
    </>
  );
}
export default App;
