// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './homepage/Header';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/api/user?userid=qfQOv3LAWeZPrOXa')
    .then((response) => response.json())
    .then(({ data }) => {
      setData(data);
    })
  }, []);

  return (
    <>
      <Header/>
        <h1>Hello { data.username }</h1>
    </>
  );
}

const Test = (props) => {
  const shout = (a) => {
    alert(`Your shout at me ${a}`);
  }

  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>感じだから</h1>
      <p>Hi { props.name }</p>
      <button onClick={() => shout('baka')}>Take this</button>
      <App/>
    </>
  )
}

export { App, Test };
