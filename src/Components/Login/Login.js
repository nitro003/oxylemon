import React from 'react'
import {browserHistory} from 'react-router';
import logo from '../images/oxylemon.png';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Form from 'react-bootstrap/Form'
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'

export class Login extends React.Component {

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

        this.login_now = this.login_now.bind(this);
    }

    handleSubmit = (event) =>{
        event.preventDefault()

    }

    handleInputChange = (event) =>{
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login_now(){
        if(this.state.username === 'monitor'){
            browserHistory.push("/roomdashboard")
        }
        console.log('username: ',this.state.username);
    }

    render(){
        return(
            
            <div className="wrapper">
                <div className="container center-content">
                    <div className="login-box">
                        <div className="software-brand">
                            <img width="50" height="50" src={logo} alt="software brand missing" />
                            <b> Oxylemon</b>
                        </div>

                        <section class="message">
                            <span className="login-header"><b>Welcome Back</b></span>
                            <p>Please Sign In To Continue</p>
                        </section>

                        <section className="loginForm">
                            <Form onSubmit={this.handleSubmit} >
                                <Form.Group controlid="formUsername" >
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup  controlid="inptGrpUsername">
                                        <Form.Control className="input_box_size" onChange={this.handleInputChange} name="username" type="email" placeholder="juandelacruz@wewinasone.com" />
                                    </InputGroup >
                                </Form.Group>
                                
                                <Form.Group controlid="formBasicPassword" >
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup  controlid="inptGrpPassword">
                                        <Form.Control onChange={this.handleInputChange} name="password" className="input_box_size" type="password" placeholder="••••••••••••••••••••••••••••••••••" />
                                    </InputGroup >
                                </Form.Group>
                                <Button className="login-btn" onClick={this.login_now}>
                                    <b>LOGIN</b>
                                    {/* {this.state.login_loading ? "LOADING" : "LOGIN"} */}
                                </Button>
                            </Form>
                        </section>
                        

                    </div>
                    
                </div>
            </div>
        );
    }
}