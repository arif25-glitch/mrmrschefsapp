// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

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
      <div className='App'>
        <h1>test this react app</h1>
        <h1>Hello {data.username}</h1>
      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit this app
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
