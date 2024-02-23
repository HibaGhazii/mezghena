import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarComponent from './Sidebar';
import Home from './Home'
import CourseList from './CourseList';
import Settings from './Settings';
import EditCourseModal from './EditCourseModal';
import AddLesson from './AddLesson';
import Profile from './Profile';

function StudentPanel() {
  return (
    <div>
        <Router>

            <SidebarComponent/>
            <Switch>
                
                <Route path="/home" component={Home} /> 
                <Route path="/courseList" component={CourseList} />
                <Route path="/editcourse" component={EditCourseModal} />
                <Route path="/settings" component={Settings} /> 
                <Route path="/addlesson" component={AddLesson} /> 
                <Route path="/profile" component={Profile} /> 
            
            {/*<Route path="/signout" component={Signout} /> */}
            </Switch>

        </Router>
    </div>
  )
}

export default StudentPanel
