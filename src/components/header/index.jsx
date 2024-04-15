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
      <input
        type="text"
        onChange={onChangeHandler}
        id="name"
        name="name"
        autoComplete="name"
      />
      <Navigation />
    </header>
  );
};

export default Header;
