import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/header/header';
import FormAssistance from './components/form/formAssistance';
import Logo from './components/logo/logo';


function App() {
  return (
    <div className="App">
      <Header/>
        <Logo/>
      <FormAssistance/>
    </div>
  );
}

export default App;
