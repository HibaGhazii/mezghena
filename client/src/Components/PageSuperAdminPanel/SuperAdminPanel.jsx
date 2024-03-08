import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarComponent from './Sidebar';
import Home from './Home'
import Settings from './Settings';
import Profile from './Profile';
import Supervisors from './Supervisors';
import Students from './Students';
import Teachers from './Teachers';

function SuperAdminPanel() {
  return ( 
    <div>
        <Router>
            <SidebarComponent/> 
            <Switch>

              <Route path="/home" component={Home} /> 
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} /> 
              <Route path="/supervisors" component={Supervisors} /> 
              <Route path="/students" component={Students} />
              <Route path="/teachers" component={Teachers} />
              {/*<Route path="/signout" component={Signout} /> */}
            </Switch>
        </Router>
    </div>
  )
}

export default SuperAdminPanel
