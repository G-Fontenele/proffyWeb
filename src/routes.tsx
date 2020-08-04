import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Error from './pages/Error';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function Routes() {
    return (
        <Router>
            <Switch>
                <Route path = '/' exact component = {Landing} />
                <Route path = '/study' component = {TeacherList} />
                <Route path = '/give-classes' component = {TeacherForm} />
                <Route component = {Error} /> 
            </Switch>
        </Router>
    );
}

export default Routes;