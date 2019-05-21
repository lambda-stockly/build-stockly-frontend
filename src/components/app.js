import React from 'react';
import LogIn from './LogIn';
import Register from './Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Stockly from './StocklyApp/index';
import PrivateRoute from './auth/PrivateRoute';
function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="logo">Σtock.ly</h1>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <PrivateRoute exact path="/" component={Stockly} />
      </div>
    </Router>
  );
}
export default App;
