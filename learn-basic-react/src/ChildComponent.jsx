import { memo } from "react";

function ChildComponent(props) {
  console.log(`rendered`);
  return (
    <>
      <h1>Ini dari {props.name}</h1>
    </>
  );
}

export default memo(ChildComponent);
