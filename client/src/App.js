// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/PageAcceuil/HomePage';
import Login from './Components/PageLogin/login';
import SignUp from './Components/PageLogin/SignUp';
import Contact from './Components/ContactForm/Contact';
import Courses from './Components/Pagecours/Courses';

function App() {
  return (
    <div className="App">
    
      <Router>
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/courses' component={Courses}/>
        </Switch>
        
    </Router>
    </div>
  );
}

export default App;
