import React from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';
import brands from '@fortawesome/fontawesome-free-brands';
import { faEnvelopeSquare, faMapPin} from '@fortawesome/fontawesome-free-solid';

import classes from './UserProfile.css';

const config = {

    apiKey: "AIzaSyDfRWLuvzYmSV3TwmLOppZT0ZZbtIZRlrs",
    authDomain: "barterbuddy-4b41a.firebaseapp.com",
    databaseURL: "https://barterbuddy-4b41a.firebaseio.com",
    projectId: "barterbuddy-4b41a",
    storageBucket: "barterbuddy-4b41a.appspot.com",
    messagingSenderId: "879139739414"

};

let fb = firebase.initializeApp(config, 'userProfile');
let userInfo = fb.database().ref('userInfo/');

const userProfile = (props) => {
    

    const image = (
        {'background-image': 'url(' + props.profilePic + ')'}
    );

    // FILE UPLOADER HANDLERS
    const handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    const handleProgress = (progress) => this.setState({progress});
    const handleUploadError = (error) => {
        
        console.error(error);
    };
    const handleUploadSuccess = (filename) => {
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => {
            console.log(url)
            userInfo.child(props.userId).update({picture: url})
        });
    };

    return (

        <div className={classes.profileContainer}>
            <div className={classes.profPic} 
                style={image}>
                <div className={classes.FileLoader}>
                    <label>
                        <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                        <FileUploader
                            hidden
                            accept="image/*"
                            name="item"
                            randomizeFilename
                            storageRef={firebase.storage().ref('images')}
                            onUploadStart={handleUploadStart}
                            onUploadError={handleUploadError}
                            onUploadSuccess={handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                        </label>
                </div>
                
            </div>
            
            <p className={classes.userName}>{props.userName}</p>
            <div className={classes.infoBox}>
                <div className={classes.info}>
                    <p>
                        <FontAwesomeIcon icon="envelope" size="1x"/>
                        <span className={classes.infoText}>
                            {props.email}
                        </span>
                    </p>
                </div>
                <div className={classes.info}>
                    
                    <p>
                        <FontAwesomeIcon icon="map-marker" size="1x"/>
                        <span className={classes.infoText}>
                            {props.zipCode}
                        </span>
                    </p>
                </div>
                
                
            </div>
        </div>
        
        
    )
}
    

export default userProfile;