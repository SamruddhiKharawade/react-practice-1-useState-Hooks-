import React from "react";
import { useState } from "react"; 

const App = () => {

const [number, setNumber] = useState(0); //UseState is a Hook that lets you add React state to function components.

  return (
     <div>
      <h3>Number is: {number}</h3>
      <button onClick={
        () => {
          setNumber(number + 1);
        }
      }>Increment</button>
      <button onClick={
        () => {
          setNumber(number - 1);
        }
      }>Decrement</button>
     </div>
    );
};

export default App;
