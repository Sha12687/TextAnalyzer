import React ,{useState}from 'react'
import Alert from 'react-bootstrap/Alert';

function AlertExample(props) {
    const [show, setShow] = useState(true);
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
<div >
<div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
      </div>
    
    )
}

export default AlertExample