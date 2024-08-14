import { useState, useEffect } from "react";
import "./App.css";
import Tables from "./Tables";

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const intervalid = setInterval(() => {
      setDate(new Date());
    }, 1000);
    // return () => clearInterval(intervalid);
  }, []);
  return (
    <>
      <center>
        <div className="ttlPage">
          <h2>Team Report</h2>
          <p style={{ color: "yellow", textAlign: "left" }}>
            Class(Level 1-6), Satistical Time{date.toLocaleDateString()}
          </p>
          <Tables />
        </div>
      </center>
    </>
  );
}

export default App;
