import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarComponent from './Sidebar';
import Home from './Home'
import Settings from './Settings';
import Profile from './Profile';

function SuperAdminPanel() {
  return ( 
    <div>
        <Router>
            <SidebarComponent/> 
            <Switch>

              <Route path="/home" component={Home} /> 
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} /> 

              {/*<Route path="/signout" component={Signout} /> */}
            </Switch>
        </Router>
    </div>
  )
}

export default SuperAdminPanel
