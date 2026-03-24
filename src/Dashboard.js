import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "kundli"),
          where("userId", "==", auth.currentUser.uid)
        );

        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => doc.data());

        setData(results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>📊 Your Predictions</h2>

      {data.length === 0 && <p>No history yet</p>}

      {data.map((item, index) => (
        <div key={index} className="card">
          <p><strong>Name:</strong> {item.form?.name}</p>
          <p>{item.result}</p>
        </div>
      ))}
    </div>
  );
}
