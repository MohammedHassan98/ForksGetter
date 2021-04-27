import React from 'react';
import './assets/css/App.css';
import MainPage  from "./views/MainPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
