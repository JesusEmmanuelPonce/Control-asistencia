import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/header';
import Clock from './components/clock/Clock';
import FormAssistance from './components/form/formAssistance';


function App() {
  return (
    <div className="App">
      <Header/>
        <Clock/>
      <FormAssistance/>
    </div>
  );
}

export default App;