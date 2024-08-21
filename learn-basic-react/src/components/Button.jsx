import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  let newCounter = 0;

  function onClickHandler() {
    newCounter = count + 1;
    console.log(`Saya cliked ${newCounter}`);
    setCount(newCounter);
  }

  return <button onClick={onClickHandler}>Saya di click {count}</button>;
}

export default Button;
