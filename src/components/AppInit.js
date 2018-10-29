import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth'
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main' 

class AppInit extends Component {
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAB7idRvpraje9wjihtaFsyyxAkLPBoZio",
            authDomain: "managerpractice-c8d67.firebaseapp.com",
            databaseURL: "https://managerpractice-c8d67.firebaseio.com",
            projectId: "managerpractice-c8d67",
            storageBucket: "managerpractice-c8d67.appspot.com",
            messagingSenderId: "860834656775"
        }
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.alreadyLogin(user);
            }
            else{
                this.props.notLoginYet();
            }
        })
    }

    render(){
        return (
            <Main/>
        )
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);