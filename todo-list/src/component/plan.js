import React from 'react'

 const plan = (props) => {
  return (
    <>
    <div className='row'>
      <li className='shadow p-2 my-2 col-5'>
        {props.item}
        </li>
        <button onClick={()=>{
          props.update(props.id)}} className='btn btn-danger my-2 col-2 offset-1'>Delete</button>
        </div>
    </>
  )
}
export default plan;