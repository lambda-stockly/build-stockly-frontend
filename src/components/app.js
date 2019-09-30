import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Stockly from './StocklyApp';
import LogIn from './authentication/LogIn';
import Register from './authentication/Register';
import PrivateRoute from './authentication/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LogIn} />
        <PrivateRoute exact path="/" component={Stockly} />
      </div>
    </Router>
  );
}
export default App;
