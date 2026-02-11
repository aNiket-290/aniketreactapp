
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter} from "react-router-dom";

function App() {

//making function to alert
  const [alert,setAlert]=useState(null);
  //method to show alert type and msg
  const showAlert=(message,type)=>{
    setAlert({ //delcaring setAlert type(object) and default parameters
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //making a toggle button for dark or light
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#012252';
      showAlert("Dark Mode is enabled","success"); //calling showAlert which automatically assign our message and type to setAlert
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","danger");
    }

  }

  return (
    <>
    
    <Router basename='/aniketreactapp'>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
     
       <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path='/' element={<Textform heading="Enter your text to analyse below"
              mode={mode} alert={alert} showAlert={showAlert}/>}>
          </Route>
        </Routes>
       
     </Router>
     
      
      
    </>
  );
}

export default App;
