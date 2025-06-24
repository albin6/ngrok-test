import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello") // will work because of proxy
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App
