import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Inc</button>
      <button onClick={() => setValue(value - 1)}>Desc</button>
    </div>
  );
}

export default App;
