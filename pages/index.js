import { useState } from "react";
function Home() {
  const [num, setNum] = useState(1);
  function count() {
    setNum(num + 1);
  }
  return (
    <div>
      <h1>EU AMO JESUS CRISTO</h1>
      <h2>Nosso criador e salvador, nele confio</h2>
      <button onClick={count}>Contador: {num}</button>
    </div>
  );
}
export default Home;
