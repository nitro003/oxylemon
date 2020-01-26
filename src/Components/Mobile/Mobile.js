import React from 'react'
import logo from '../images/oxylemon.png';
import './Mobile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export class Mobile extends React.Component {
    render(){
        return(
            <div>
                <Navbar className="mobile-nav" expand="sm" fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong>Oxylemon</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="Hi, Nurse Joy! " id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Scan QR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Special Button</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="login-btn"><strong>Search</strong></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <Container className="mobile-cards-container">
                    <Row>
                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                        <Col xs={12} className="mobile-card-seperator">
                            <div className="mobile-card-design mobile-room-card-container ">
                                <div className="mobile-wrapper-card">
                                    <div className="mobile-info-container">
                                        <h3>ROOM 201</h3>
                                        <span>Name: Juan Dela Cruz</span><br />
                                        <span>In Charge</span><br />
                                        <span>Nurse: Joy Legayada</span><br />
                                        <span>Doctor: Gamot Medina</span><br />
                                        <span>Last Changed</span><br />
                                        <span>Time: 18:00</span><br />
                                        <span>Date: 01/01/2020</span>
                                    </div>
                                    <div className="mobile-gauge-container">
                                        <CircularProgressbarWithChildren  
                                        styles={buildStyles({pathColor: `rgba(25, 168, 255, 100)`})}
                                        value={93}>

                                            <div style={{ fontSize: 35 }}>
                                                <strong>93%</strong>
                                            </div>
                                            <div style={{ fontSize: 14, margin: -5}}>
                                                <strong>Oxygen Level</strong>
                                            </div>
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </div>
                                
                            </div>
                        </Col>

                    </Row>
                </Container>

            </div>
            

            
        );
    }
}