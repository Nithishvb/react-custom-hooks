import React from 'react'
import "./styles.css";
import CustomHooks from './CustomHooks'

export default function App() {

  const [joke] = CustomHooks('https://jsonplaceholder.typicode.com/todos'); 

  return (
    <div className="App">
      {
        joke.map((data) => {
          return <h1>{data.title}</h1>
        })
      }
    </div>
  );
}
