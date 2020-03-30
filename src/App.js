import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/header';
import FormAssistance from './components/formAssistance';

function App() {
  return (
    <div className="App">
      <Header/>
      <FormAssistance/>
    </div>
  );
}

export default App;
