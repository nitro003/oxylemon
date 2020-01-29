import React,{useState} from 'react'
import logo from '../images/oxylemon.png';
import './RoomDashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {OxygenInfoCard} from '../OxygenInfoCard/OxygenInfoCard'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export class RoomDashboard extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
      }
 
    render(){
        // const [message, setMessage] = useState( '' );
        return(
            <div className ="room_dashboard_wrapper">
                <div className="roomdashboard-header-controls">
                    <div className="brand-dash">
                        <img width="50" height="50" src={logo} alt="software brand missing" />
                        <b> Oxylemon</b>
                    </div>

                    <div className="header-form-group">
                        <i class="fa fa-search search-icon-header">   </i>
                        <input id="top-search" name="top-search" type="search" placeholder="Search Room Number or Patient Name Here" />
                    </div>
                </div>

                <div className="roomdashboard-content">
                    <h1>First Floor Monitoring Dashboard</h1>
                    <div className="container-fluid cards-container">
                        <div className="row">
                            <div className="col-sm-4 ">
                                <OxygenInfoCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}