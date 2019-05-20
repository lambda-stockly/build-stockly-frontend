import React from 'react';
import LogIn from './LogIn';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Σtock.ly</h1>
        <Link
          to="/auth/login"
          style={{ textAlign: 'center', display: 'block' }}
        >
          Login
        </Link>
        <Route path="/auth/login" component={LogIn} />
      </div>
    </Router>
  );
}

export default App;
