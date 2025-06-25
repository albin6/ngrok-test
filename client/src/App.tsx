import { useEffect, useState } from "react";
import "./App.css";

function App() {
  type Message = { _id: string; message: string };
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/hello") // will work because of proxy
      .then((res) => res.json())
      .then((data) => setMessages(data.messages));
  }, []);

  return (
    <div>
      <h1>
        {messages.length !== 0 ? (
          <>
            {messages.map((item) => (
              <div key={item._id}>{item.message}</div>
            ))}
          </>
        ) : (
          "Loading..."
        )}
      </h1>
    </div>
  );
}

export default App;
