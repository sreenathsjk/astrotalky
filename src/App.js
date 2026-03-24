import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    time: "",
    place: ""
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://YOUR_FIREBASE_FUNCTION_URL", // 🔥 REPLACE THIS
        form
      );

      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      setResult("❌ Error fetching prediction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🔮 AstroAI</h1>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />

      <input
        placeholder="Time (HH:MM)"
        onChange={(e) => setForm({ ...form, time: e.target.value })}
      />

      <input
        placeholder="Place"
        onChange={(e) => setForm({ ...form, place: e.target.value })}
      />

      <button onClick={generate}>
        {loading ? "Generating..." : "Generate Prediction"}
      </button>

      <div className="card">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
