import { useState } from "react";

function App(){
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");


   // Convert Celsius → Fahrenheit
  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);

    if (c === "" || isNaN(c)) {
      setFahrenheit("");
    } else {
      setFahrenheit(((parseFloat(c) * 9) / 5 + 32).toFixed(2));
    }
  };

  // Convert Fahrenheit → Celsius
  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);

    if (f === "" || isNaN(f)) {
      setCelsius("");
    } else {
      setCelsius((((parseFloat(f) - 32) * 5) / 9).toFixed(2));
    }
  };

   // Clear all fields
  const clearAll = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
 <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">🌡️ Temperature Converter</h2>

        <div className="mb-3">
          <label className="form-label">Celsius (°C)</label>
          <input
            type="number"
            className="form-control"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter Celsius"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Fahrenheit (°F)</label>
          <input
            type="number"
            className="form-control"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter Fahrenheit"
          />
        </div>
        <button className="btn btn-danger w-100 mt-3" onClick={clearAll}> Clear All </button>
      </div>
    </div>
  );
}

export default App;