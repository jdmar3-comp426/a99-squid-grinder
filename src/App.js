import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import power_button from './power-button.jpeg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';  

function App() {
  const [isHome, setIsHome] = useState(true);

  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route>
            </Route>
            <Route path="/clicker">
              <img src={power_button} className="App-logo" alt="logo" />
              <Counter />
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
