import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ip, setIp] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/ip')
      .then((res) => res.json())
      .then((data) => setIp(data.ip));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Your IP Address is:</h1>
        <h2 className="ip">{ip}</h2>
      </div>
    </div>
  );
}

export default App;