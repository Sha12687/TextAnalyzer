import React from 'react'

const Navbar = ({filterItem,uniqueList}) => {
  return (
    < nav className="navbar navbar-expand-lg mt-3">
 <div className="btn-group" >
    {

       uniqueList.map((currEle,i)=>{
           return (<button className="btn-group_item" key={i} onClick={()=>filterItem(currEle)}>
        {currEle}
    </button> 
         ) ;})
    }
  
 </div>
  </nav>
  )
}

export default Navbar