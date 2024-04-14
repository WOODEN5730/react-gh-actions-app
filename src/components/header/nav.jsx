import NavListItems from "assert/strict";
import NavItems from "../../components/utils/data";

const nav = () => {
  return (
    <nav className="mainNav">
      <ul>
        {NavItems.map((item) => (
          <li className="navItem" key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default nav;
