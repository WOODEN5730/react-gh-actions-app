import { useState } from "react";
import Navigation from "../header/nav";

const Header = () => {
  let [] = useState("");
  const onClickHandler = () => {
    console.log("I was clicked");
  };
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <header>
      <div className="logo">Awesome News</div>
      <input onChange={onChangeHandler} />
      <Navigation />
    </header>
  );
};

export default Header;
