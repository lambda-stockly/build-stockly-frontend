import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Stockly from './StocklyApp/index';
import PrivateRoute from './auth/PrivateRoute';
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Σtock.ly</h1>
        <Link to="/login" style={{ textAlign: 'center', display: 'block' }}>
          Login
        </Link>
        <Link to="/register" style={{ textAlign: 'center', display: 'block' }}>
          Register
        </Link>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <PrivateRoute exact path="/home" component={Stockly} />
      </div>
    </Router>
  );
}

export default App;
