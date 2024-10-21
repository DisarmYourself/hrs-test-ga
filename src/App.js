import { useState } from 'react';
import GoogleAnalyticsProvider from './providers/GoogleAnalyticsProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { sendCustomGaEvent } from './hooks/useGoogleAnalytics';

function App() {
  const [value, setValue] = useState(0)

  const incValue = () => {
    setValue(value + 1)
    console.log(value);
    sendCustomGaEvent('increment_cte')
  }

  const decValue = () => {
    setValue(value - 1)
    console.log(value);
    sendCustomGaEvent('decrement_cte')
  }

  return (
    <Router>
      <GoogleAnalyticsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <p>{value}</p>
                <button onClick={incValue}>Inc</button>
                <button onClick={decValue}>Dec</button>
              </div>
            }
          />
        </Routes>
      </GoogleAnalyticsProvider>
    </Router>
  );
}

export default App;
