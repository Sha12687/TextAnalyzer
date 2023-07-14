import { css, event } from "jquery";
import  {React,useRef, useState}from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input, Label } from "reactstrap";
 
function BasicExample(props) {
   const changetoUpcase=()=>{
        console.log("uppcase was clicked");
        let newTemp=temp.toUpperCase();
        props.showAlert("Converted to uppercase!", "success");
        setTemp(newTemp);
    }
    const changetoLocase=()=>{
        console.log("Locase was clicked");
        let newTemp=temp.toLocaleLowerCase();
        props.showAlert("Converted to lowercase!", "success");
        setTemp(newTemp);
    }
    const clear=()=>{
        console.log("Clear was clicked");
        let newTemp="";
        props.showAlert("Text Cleared!", "success");
        setTemp(newTemp);
    }
    const handleOnchange=(event)=>{
 setTemp(event.target.value)
    }
    const handleCopy=(event)=>{
      let copy=document.getElementById("exampleText");
     navigator.clipboard.writeText(copy.value);
     props.showAlert("Copied to Clipboard!", "success");
    }
    const removeSpace=(event)=>{
      let originalSentence=temp.split(/[ ]+/);
      console.log(originalSentence);
       setTemp(originalSentence.join(" "));
       props.showAlert("Extra spaces removed!", "success");
    }
   const [temp,setTemp]=useState("Enter text here");
  return (
    <div className={`ms-5 me-5 text-${props.mode==='light'?'dark':'light'}`}>
      <div className=" row ">
      <h2 className={`col-10`}>Enter the text to analyze below</h2>
      <Label className={`col-2 fw-bold text-${props.mode}=='light'?'dark':'light'`} >{props.date}</Label>
      </div>
    <Form >
        <h2>{props.title}</h2>
      <Form.Group className="mb-3 text" controlId="formBasicPassword">
        <Input type="textarea" 
        value={temp}
        row={7}
        onChange={handleOnchange}
        name="text" id="exampleText" />
      </Form.Group>
      <Button   onClick={changetoUpcase}>Change to Uppercase</Button>
      <Button className="ms-3"  onClick={changetoLocase}>Change to Lowercase</Button>
      <Button className="ms-3"  type="reset" onClick={clear}>Clear</Button>
      <Button className="ms-3"  type="reset" onClick={removeSpace}>Remove Extra Space</Button>
      <Button className="ms-3"  type="reset" onClick={handleCopy}>Copy</Button>
    </Form>
    <div className="container my-3">
    <h3>Your text summary</h3>
    <p>{temp.split(" ").length}  words and { temp.length} character </p>
  <h3>Preview</h3>
  <p>{temp}</p>
    </div>
    </div>
  );
}

export default BasicExample;