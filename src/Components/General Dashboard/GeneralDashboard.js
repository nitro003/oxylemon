import React,{useState} from 'react'
import logo from '../images/oxylemon.png';
import './GeneralDashboard.css'
import Papa from 'papaparse';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {OxygenInfoCard} from '../OxygenInfoCard/OxygenInfoCard'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import {Mobile} from  '../Mobile/Mobile'
import {RoomDashboard} from '../RoomDashboard/RoomDashboard'

export class GeneralDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
          csvfile: undefined,
          csvfiledata: [],
          modalUploadShow: false,
          displayFloor: [],
          currFloor: 'All Rooms Are Being Displayed'
        };
        this.updateData = this.updateData.bind(this);
    }

    ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
    }
    
    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };
    
    importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            header: true
        });
    };
    
    updateData(result) {
        var data = result.data;
        this.setState({
            csvfiledata: result.data
        });
        console.log(data);
    }

    setModalUploadShow(status){
        this.setState({
            modalUploadShow: status
        })
    }

    importModalClose(){
        this.setModalUploadShow(false);
        this.importCSV()
    }

    linkShowModalUpload(e,show){
        this.setModalUploadShow(show);
    }

    setDisplayFloor(e,pFloor){
        // this.setState({
        //     displayFloor: floor
        // })
        let displayingFloors = []
        let currFlooring = ''
        if(pFloor > 0){
            displayingFloors = this.state.csvfiledata.filter(
                (csvdata) => {
                    return csvdata.floor.indexOf(pFloor) >= 1
            })
        }else{
            displayingFloors = this.state.csvfiledata;
        }

        console.log("Displayin Data Floor " + pFloor + ": ",displayingFloors)
        if(pFloor !== 0){
            currFlooring = 'You Now Are in ' + this.ordinal_suffix_of(pFloor) + ' floor'
        }
        else{
            currFlooring = 'All Rooms Are Being Displayed'
        }
        this.setState({
            displayFloor: displayingFloors,
            currFloor : currFlooring 
        })

    }
    
    render() {
        return (
            <>
                <Modal show={this.state.modalUploadShow} onHide={e => this.linkShowModalUpload(e,false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Upload Your Data Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline>
                            <FormControl type="file" placeholder="Choose File" className="mr-sm-2" onChange={this.handleChange} />
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={e => this.linkShowModalUpload(e,false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={e => this.importModalClose()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Navbar className="mobile-nav" expand="sm" fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <strong>Oxylemon Aid</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Select Floor " id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={e => this.setDisplayFloor(e,0)}>View All</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => this.setDisplayFloor(e,1)}>1st Floor</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => this.setDisplayFloor(e,2)}>2nd Floor</NavDropdown.Item>
                                <NavDropdown.Item onClick={e => this.setDisplayFloor(e,3)}>3rd Floor</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            <Nav.Link onClick={e => this.linkShowModalUpload(e,true)}>Upload File
                            </Nav.Link>
                        </Nav>
                        
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2 gendash-search" />
                            <Button className="login-btn"><strong>Search</strong></Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <BrowserView>
                    <div className="container-fluid content-dashboard">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>{this.state.currFloor}</h1>
                            </div>
                        </div>
                        <div className="row">
                                {this.state.displayFloor.map((floor,index) => (<div key={index} className="col-sm-4 card-row-sep"> 
                                    <OxygenInfoCard key={index} roomData={floor} /> 
                                    </div>) )
                                }  
                        </div>
                    </div>
                </BrowserView>
          </>
        );
    }
}