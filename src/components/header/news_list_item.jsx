import React from "react";
//import NavItems from "./components/utils/data";

export const NewsListItem = ({ item }) => (
  <div key={item.id}>
    <h3>{item.title}</h3>
    <div>{item.feed}</div>
    <hr />
  </div>
);
export default NewsListItem;
