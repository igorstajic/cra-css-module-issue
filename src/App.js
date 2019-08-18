import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './Test.module.css';

function App() {
const [loading, setLoading] = useState(true)
useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 1000);
}, []);

if (loading) {
  return <div>Loading...</div>
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.test}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
