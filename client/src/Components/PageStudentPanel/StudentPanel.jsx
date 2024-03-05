import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarComponent from './Sidebar';
import Home from './Home'
import CourseList from './CourseList';
import Settings from './Settings';
import AddLesson from './AddLesson';
import Profile from './Profile';
import ResumeCourse from './EditCourseModal';
import AccountInfo from './AccountInfo';

function StudentPanel() {
  return ( 
    <div>
        <Router>
            <SidebarComponent/> 
            <Switch>  
              <Route path="/home" component={Home} /> 
              <Route path="/courseList" component={CourseList} />
              <Route path="/resumecourse" component={ResumeCourse} />
              <Route path="/settings" component={Settings} /> 
              <Route path="/addlesson" component={AddLesson} />
              <Route path="/profile" component={Profile} /> 
              <Route path="/accountinfo" component={AccountInfo} />
              {/*<Route path="/signout" component={Signout} /> */}
            </Switch>
        </Router>
    </div>
  )
}

export default StudentPanel
