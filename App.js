import React, { useState } from "react";
import axios from "axios";

function App() {
  const [form, setForm] = useState({});
  const [result, setResult] = useState("");

  const generate = async () => {
    const res = await axios.post("https://YOUR_FUNCTION_URL", form);
    setResult(res.data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AstroAI</h1>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <button onClick={generate}>Generate</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
