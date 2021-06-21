import React from 'react';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Home />
    </div>
  );

}

export default App;
