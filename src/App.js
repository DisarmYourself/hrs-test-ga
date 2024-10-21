import { useState } from 'react';
import GoogleAnalyticsProvider from './providers/GoogleAnalyticsProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { sendCustomGaEvent } from './hooks/useGoogleAnalytics';
import { events } from './hooks/events';

function App() {
  const [value, setValue] = useState(0)

  const handleIncrement = () => {
    setValue(value + 1)
    sendCustomGaEvent(events.pressIncrementBtn)
  }

  const handleDecrement = () => {
    setValue(value - 1)
    sendCustomGaEvent(events.pressIncrementBtn)
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
                <button onClick={handleIncrement}>Inc</button>
                <button onClick={handleDecrement}>Dec</button>
              </div>
            }
          />
        </Routes>
      </GoogleAnalyticsProvider>
    </Router>
  );
}

export default App;
