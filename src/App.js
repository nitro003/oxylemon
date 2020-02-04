import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'

import {Router,hashHistory} from 'react-router'
import {HashRouter, Route, Link, BrowserRouter } from 'react-router-dom'

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {Login} from './Components/Login/Login'
import {Mobile} from './Components/Mobile/Mobile'
import {RoomDashboard} from './Components/RoomDashboard/RoomDashboard'
import {GeneralDashboard} from './Components/General Dashboard/GeneralDashboard'


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
      <HashRouter history={hashHistory} basename={process.env.PUBLIC_URL}>
        <Route exact path = "/" component =  {Login} />
        <Route path = "/gendash" component =  {GeneralDashboard} />
      </HashRouter>
    );
  }
}

