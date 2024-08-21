import { useEffect, useState } from "react";

function ButtonEffect() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    console.log(`Wahhh like nya ${like} / ${dislike}`);
  }, []);

  return (
    <>
      <button onClick={() => setLike(like + 1)}>{like} Like</button>
      <button onClick={() => setDislike(dislike + 1)}>{dislike} DisLike</button>
    </>
  );
}

export default ButtonEffect;
