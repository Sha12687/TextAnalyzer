import  { React,useState } from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export default function About() {
    const [btn,setBtn]=useState("Enable light mode");
    const  [myStyle,setMyStyle]= useState({
        color:'white',
        background:'black',
})
const ToggleStyle=()=>{
if(myStyle.color=='white')
{
    setMyStyle({
        color:'black',
        background:'white'
})
setBtn("Enable dark mode")
}
else{
    setMyStyle({
        color:'white',
        background:'black'
})
setBtn("Enable light mode");
}
}

  return (
    <div>  
    <Accordion defaultActiveKey="0" style={myStyle} className="ps-2 pe-2" flush >
    <h2>About Us</h2>
      <Accordion.Item eventKey="0" style={myStyle} >
        <Accordion.Header  style={{ backgroundColor: '#343a40' }}  >Accordion Item #1</Accordion.Header>
        <Accordion.Body   >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={myStyle} >
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <div className='container my-3'>
      <Button  onClick={ToggleStyle} >{btn}</Button>
    </div>
    </Accordion>
    
      </div>
  );
}