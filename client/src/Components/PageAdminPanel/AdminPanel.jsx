import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarComponent from './Sidebar'
import Home from './Home'
import Students from './Students';
import CourseList from './CourseList';
import Settings from './Settings';

const AdminPanel = () => {
  return (
    <div>
      

      <Router>

        <SidebarComponent/>
        <Switch>
          <Route path="/home" component={Home} /> 
          <Route path="/students" component={Students} />
          <Route path="/courseList" component={CourseList} />
          <Route path="/settings" component={Settings} />
           {/*<Route path="/signout" component={Signout} /> */}
        </Switch>
        
    </Router>
    </div>
  )
}

export default AdminPanel
