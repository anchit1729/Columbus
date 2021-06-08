import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Footer, Home, About, Login, Register, Stay } from './components';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/about' exact component={() => <About />} />
          <Route path='/login' exact component={() => <Login />} />
          <Route path='/register' exact component={() => <Register />} />
          <Route path='/stay' exact component={() => <Stay />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
