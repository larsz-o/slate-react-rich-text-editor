import React, { Component } from 'react';
import { TextEditor } from './components'; 
import QuillEditor from './components/QuillEditor'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextEditor/>
        <div className="separator"></div>
        <QuillEditor/>
      </div>
    );
  }
}

export default App;
