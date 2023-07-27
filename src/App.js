import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import "./App.css";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from './components/About';
// import { BrowserRouter as Router,  Route, Routes, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // it is show weather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#085584";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" About="About  TextUtils" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element= { <About />}/>
            <Route exact path="/" element={}/>
              
          </Routes>
        
        
      </Router> */}
      {/* <About/> */}
      <TextForm
                showAlert={showAlert}
                heading="Enter your text here"
                mode={mode}
              />
</div>
    </>
  );
}

export default App;
