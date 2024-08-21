import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState("");
  const styleMenu = {
    textAlign: "center",
  };
  const styleButton = {
    justifyContent: "center",
    display: "flex",
    gap: "10px",
  };

  function nextCount() {
    setCount(count + 1);
  }
  function prevCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${count}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);

  return (
    <>
      <div style={styleMenu}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <p>
          <b>{count}</b>
        </p>
        <div style={styleButton}>
          <button onClick={nextCount}>Next</button>
          <button onClick={prevCount}>Prev</button>
        </div>
      </div>
    </>
  );
}

export default App;
