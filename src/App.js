import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'

import {Router,browserHistory} from 'react-router'
import { Route, Link, BrowserRouter } from 'react-router-dom'

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {Login} from './Components/Login/Login'
import {Mobile} from './Components/Mobile/Mobile'
import {RoomDashboard} from './Components/RoomDashboard/RoomDashboard'


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        username: '',
        password: '',
        token: null,
        credError: false,
        login_loading: false,
        auth_msg: ''
    }
  }
  render(){
    return(
      <Router history = {browserHistory}>
        <Route path = "/" component =  {Login} />
        <Route path = "/roomdashboard" component =  {RoomDashboard} />
        <Route path = "/mobile" component =  {Mobile} />
      </Router>
    );
  }
}

