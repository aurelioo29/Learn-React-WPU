/* eslint-disable react/prop-types */
import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Header({ name }) {
  return <h1>Belajar React {name ? name : "None"} 🛹</h1>;
}

function App() {
  const [likes, setLikes] = useState(0);

  function HandleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header />
      <button onClick={HandleClick}>Like ({likes})</button>
    </div>
  );
}

export default App;
