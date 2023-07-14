import React from "react";
import MyNavbar from "./component/Navbar";
import BasicExample from "./component/TextForm";
import Container from 'react-bootstrap/Container';
import About from './component/about'
import { useState } from "react";
import Alert  from "./component/AlertExample";
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);
  const [date,setDate] = useState(new Date().toDateString());
  const showAlert=(message,state)=>{
    console.log(alert);
  setAlert({
    msg:message,
    type:state,
  })
  setTimeout(() => {
    setAlert(null);
}, 2000);
  }
   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      console.log("tesitng")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enable","danger")
    }
  }
  return (
    <div>
<MyNavbar title="TextUtils" toggleMode={toggleMode} mode={mode} about={"AboutTextUtils"} />
<Alert alert={alert}  />
<div className="container my-3" >
  <BasicExample 
   heading="Try TextUtils - word counter, character counter, remove extra spaces"
   mode={mode}
   date={date}
   showAlert={showAlert}
   />
</div>

    </div>
  );
}
export default App;