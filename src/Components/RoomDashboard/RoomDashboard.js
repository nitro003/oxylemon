import React from 'react'
import logo from '../images/oxylemon.png';
import './RoomDashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export class RoomDashboard extends React.Component {
    render(){
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
                            <div className="col-sm-3 card-design">
                                <div className="room-card-container ">
                                    <div className="info-container">
                                        <h2>ROOM 101</h2>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 50 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 22, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-sm-3 card-design">
                                <div className="room-card-container ">
                                    <div className="info-container">
                                        <h2>ROOM 102</h2>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(251, 236, 6, 100)`})}
                                        value={55}>
                                            <div style={{ fontSize: 50 }}>
                                                <strong>55%</strong>
                                            </div>
                                            <div style={{ fontSize: 22, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-3 card-design">
                                <div className="room-card-container ">
                                    <div className="info-container">
                                        <h2>ROOM 103</h2>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(255, 25, 25, 100)`})}
                                        value={31}>
                                            <div style={{ fontSize: 50 }}>
                                                <strong>31%</strong>
                                            </div>
                                            <div style={{ fontSize: 22, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-3 card-design">
                                <div className="room-card-container ">
                                    <div className="info-container">
                                        <h2>ROOM 104</h2>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(255, 25, 25, 100)`})}
                                        value={31}>
                                            <div style={{ fontSize: 50 }}>
                                                <strong>31%</strong>
                                            </div>
                                            <div style={{ fontSize: 22, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                    
                </div>
            </div>
        );
    }
}