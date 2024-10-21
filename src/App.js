import { useState } from 'react';
import GoogleAnalyticsProvider from './providers/GoogleAnalyticsProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [value, setValue] = useState(0)
  return (
    <Router>
      <GoogleAnalyticsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <p>{value}</p>
                <button onClick={() => setValue(value + 1)}>Inc</button>
                <button onClick={() => setValue(value - 1)}>Desc</button>
              </div>
            }
          />
        </Routes>
      </GoogleAnalyticsProvider>
    </Router>
  );
}

export default App;
