import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/css/App.css';
import MainPage from "./views/MainPage";
import Navbar from "./components/Navbar";
import SearchResults from "./views/SearchResults";


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" >
          <MainPage />
        </Route>

        <Route exact path="/searchResults">
          <SearchResults />
        </Route>
      </Router>
    </div>
  );
}

export default App;
