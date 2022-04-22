import Todo from "./TodoListAnt";
import { useState } from 'react';
import Loading from "./TodoListAnt/Loading";

function App() {

  const [load, setLoad] = useState(true);

  setTimeout(() => setLoad(false), 2000);

  return (
    load ? (<Loading/>) : (
    <div className="App">
    <Todo/>
  </div>
  )
  );
}

export default App;

