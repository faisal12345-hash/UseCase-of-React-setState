import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';

function App() {
  const [mode,setMode] =useState("light");
  const toggleMode =()=> {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#042343";
      showAlert("Dark mode has been enabled","success")
    }else {
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success")
    }
  }

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=> {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500)
  }

  return (
    <>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text here below..." mode={mode} />
      </div>
      <div className='container'>
        <About />

      </div>
    </>
  );
}

export default App;
