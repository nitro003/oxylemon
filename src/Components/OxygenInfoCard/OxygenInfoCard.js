import React,{useState} from 'react'
import logo from '../images/oxylemon.png';
import './OxygenInfoCard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export class OxygenInfoCard extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    percentageColor(){
        let retRGBcolor = `rgba(25, 168, 255, 100)`
        if(this.props.roomData.oxygenlevel >= 0 && this.props.roomData.oxygenlevel <= 30){
            retRGBcolor = `rgb(252, 3, 3,100)`
        }else if(this.props.roomData.oxygenlevel >= 31 && this.props.roomData.oxygenlevel <= 50){
            retRGBcolor = `rgb(252, 206, 3,100)`
        }else if(this.props.roomData.oxygenlevel >= 51 && this.props.roomData.oxygenlevel <= 100){
            retRGBcolor = `rgba(25, 168, 255, 100)`
        }
        return retRGBcolor

    }

    render(){
        // const [message, setMessage] = useState( '' );
        return(
            <>
            <div className="card-design-info">
                <div className="info-container">
                    <h2>Room {this.props.roomData.room}</h2>
                    <span>Name: {this.props.roomData.name}</span><br />
                    <span>In Charge</span><br />
                    <span>Nurse: {this.props.roomData.nurse}</span><br />
                    <span>Doctor: {this.props.roomData.doctor}</span><br />
                    <span>Last Changed</span><br />
                    <span>Time: {this.props.roomData.time}</span><br />
                    <span>Date: {this.props.roomData.date}</span>
                </div>
                <div className="gauge-container">
                    <CircularProgressbarWithChildren  
                    styles={buildStyles({pathColor: this.percentageColor()})}
                    value={this.props.roomData.oxygenlevel}>
                        <div style={{ fontSize: 50 }}>
                            <strong>{this.props.roomData.oxygenlevel}%</strong>
                        </div>
                        <div style={{ fontSize: 22, margin: -5}}>
                            <strong>Oxygen Level</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
            </>
        );
    }

}