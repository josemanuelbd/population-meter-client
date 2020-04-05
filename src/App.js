import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { getTimesByLocation } from './helper/locationTimes';
import './App.css';
import PopulationMeter from './components/PopulationMeter';

function App() {

  const [loading, setLoading] = useState(true);
  const [times, setTimes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const times = await getTimesByLocation();
      setTimes(times);
      setLoading(false);
    }

    fetchData();
  }, []);
  
  console.log(times);

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Population Meter Loading
        </p>
      </header>
    </div>
    {!loading ? <PopulationMeter times={times}></PopulationMeter> : null}
    </>
  );
}

export default App;
