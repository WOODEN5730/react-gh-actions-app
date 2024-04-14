import { useState } from "react";

const StatePlayground = () => {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Super awesome hooks",
      body: "Everything is awesome when you are part of a team",
    },
  ]);

  const addOne = () => {
    setCount(count + 1);
  };
  const subOne = () => {
    setCount(count - 1);
  };
  const restOne = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const restCount = () => {
    setCount(initialCount);
  };

  const addOnePost = () => {
    let newPost = {
      id: 2,
      title: "React is great",
      body: "New learning experience",
    };

    setPosts([...posts, newPost]);
  };

  return (
    <>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>Add one + 1</button>
      <button onClick={restOne}>Rest one -1</button>
      <button onClick={restCount}>Reset</button>

      <hr />
      {posts.map((post) => (
        <div key={post.id}>
          <div>
            <b>{post.title}</b>
          </div>
          <div>{post.body}</div>
        </div>
      ))}
      <button onClick={addOnePost}>Add a post</button>
    </>
  );
};
export default StatePlayground;
