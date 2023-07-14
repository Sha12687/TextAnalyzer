
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import  Plan   from './component/plan'; 
import { useState } from 'react';
function App() {
  const [plan,setPlan]=useState([]);
  const [text,setText]=useState("");
  const handleForm=(e)=>{
    setPlan((olditems)=>{
      return[...olditems,text];
    })
    setText("");
  }
  const removeCourseById=(id)=>{
    setPlan(plan=> plan.filter((s,i)=>(i != id)))
   }
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="todo col-sm-6 mx-auto shadow-lg p-3">
      <h1 className="text-center">Today's Plan</h1>
      <div className="row">
        <div className="col-9">
          <input type="text"
           placeholder='Write Today Plan'
           required
           className='form-control'
           onChange={(e)=>{
            setText(e.target.value)
           }}
          />
        </div>
        <div className="col-2">
          <button onClick={handleForm} className="btn btn-warning fw-bold px-5">Add</button>
        </div>
      </div>
      <div className="container-fluid m-3">
        <h1>Plans</h1>
        {
          plan.length>0? plan.map((item,i)=>
          <Plan key={i} id={i} item={item} update={removeCourseById} />):"No Plans"
        }
        
      </div>
      </div>
     
      </div>
     </div>
  );
}

export default App;
