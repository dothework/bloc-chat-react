import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/roomlist'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCMFcVk19VGAorAbgrDK0--xsRUyaYFLVU",
  authDomain: "blocchatreact.firebaseapp.com",
  databaseURL: "https://blocchatreact.firebaseio.com",
  projectId: "blocchatreact",
  storageBucket: "blocchatreact.appspot.com",
  messagingSenderId: "649547051502"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bloc Chat</h1>
        </header>
        <div className="App-intro">
          <RoomList firebase={ firebase }/>
        </div>
      </div>
    );
  }
}

export default App;
