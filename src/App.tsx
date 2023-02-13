import React, { useState } from 'react';
import Home from './Pages/Home';

function App() {

  const [profileView, setProfileView] = useState<boolean>(false);

  return (
    <div className="App">
      <Home profileView={profileView} setProfileView={setProfileView} />
    </div>
  );
}

export default App;
