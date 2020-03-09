import React,{useState} from 'react'
import Notification from 'react-web-notification'
import mp3sound from '../images/sound.mp3'
import oggsound from '../images/sound.ogg'
import {sw} from './sw.js'

export class OxyLemNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          options:{
            "tag": Date.now(),
            "body": 'Please Check Mr./Ms. ' + this.props.roomydata.name,
            "icon": 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png',
            "lang": "en",
            "dir":  "ltr",
            "sound": "sound.mp3"  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
          },
          ignore: true
        };
        this.ringring = this.ringring.bind(this);
    }

    handlePermissionGranted(){
        console.log('Permission Granted');
        this.setState({
          ignore: false
        });
      }
      
      handlePermissionDenied(){
        console.log('Permission Denied');
        this.setState({
          ignore: true
        });
      }

      handleNotSupported(){
        console.log('Web Notification not Supported');
        this.setState({
          ignore: true
        });
      }
    
      handleNotificationOnClick(e, tag){
        console.log(e, 'Notification clicked tag:' + tag);
      }
    
      handleNotificationOnError(e, tag){
        console.log(e, 'Notification error tag:' + tag);
      }
    
      handleNotificationOnClose(e, tag){
        console.log(e, 'Notification closed tag:' + tag);
      }
    
      handleNotificationOnShow(e, tag){
        this.playSound();
        console.log(e, 'Notification shown tag:' + tag);
      }
    
//NOTIFICATION FUNCTION END HERE
    playSound(){
        console.log("playing....")
        document.getElementById('sound').play();
    }
    

    ringring(){
        if(this.state.ignore) {
            return;
          }
      
          const now = Date.now();
      
          const title = 'Room #' + this.props.roomydata.room + ' has reached its critical level as of' + now;
          const body = 'Hello' + new Date();
          const tag = now;
          const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
          // const icon = 'http://localhost:3000/Notifications_button_24.png';
      
          // Available options
          // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
          const options = {
            tag: tag,
            body: body,
            icon: icon,
            lang: 'en',
            dir: 'ltr',
            sound: 'sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
          }
          this.setState({
            title: title,
            options: options
          });
    }

    
    render() {
      const {options} = {
        tag: 'tag',
        body: 'body',
        icon: 'icon',
        lang: 'en',
        dir: 'ltr',
        sound: 'sound.mp3'  // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
      }
        return (
            <>
            { console.log("yeah ma boy",this.options) }
                <Notification 
                    timeout={10000}
                    ignore={this.state.ignore} 
                    title= {'Room #' + this.props.roomydata.room + ' has reached its critical level as of ' + this.now} 
                    options={this.state.options}
                    swRegistration = {sw} 
                    notSupported={this.handleNotSupported.bind(this)}
                    onPermissionGranted={this.handlePermissionGranted.bind(this)}
                    onPermissionDenied={this.handlePermissionDenied.bind(this)}
                    onShow={this.handleNotificationOnShow.bind(this)}
                    onClick={this.handleNotificationOnClick.bind(this)}
                    onClose={this.handleNotificationOnClose.bind(this)}
                    onError={this.handleNotificationOnError.bind(this)}
                />

                <audio id='sound' preload='auto'>
                    <source src={mp3sound} type='audio/mpeg' />
                    <source src={oggsound}  type='audio/ogg' />
                    <embed hidden={true} autostart='false' loop={false} src='./sound.mp3' />
                </audio>
          </>
        );
    }
}
