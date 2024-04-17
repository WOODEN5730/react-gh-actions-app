import { useState } from "react";
import Navigation from "../header/nav";

const Header = (props) => {
  let [active, setActive] = useState(false);
  let [keywords, setKeywords] = useState("");
  let imagePath = "src/assets/BlueMW.jpg";
  let imageMW = "src/assets/mw-logo-vector.jpg";

  const onClickHandler = () => {
    console.log("I was clicked");
  };

  // const onChangeHandler = (event) => {
  //   const value = event.target.value === "" ? false : true;
  //   setKeywords(event.target.value);
  //   setActive(value);
  // };

  return (
    <header style={{ background: `${active ? "green" : "blue"}` }}>
      <div className="container">
        <div>
          <img src={imageMW} alt="Hello" width="250" height="200"></img>
        </div>
      </div>
      <div className="logo">Front End News</div>
      <input
        type="text"
        onChange={props.getKeywords}
        id="name"
        name="name"
        autoComplete="name"
      />
      {/* The keywords are: {keywords} */}
      <Navigation />
    </header>
  );
};

export default Header;
