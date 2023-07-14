import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuCard = (props) => {
    console.log(props)
  return (
    <>
     <section className="main-card--cointainer">
      {

        props.menuData.map((currElement,i)=>{ 
          const{id,name,category,image,description}=currElement;
            return( <>
            <div className="card-container px-auto" key={i} >
            <div className="card shadow" >
                <div className="card-body ">
                <span className="card-number round-circle d-block subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">
                   {description}
                </span>
                <div className="card-read ">         
                  Read</div>
                  <img src={currElement.image} alt="images" className="card-media" />
            </div>
            <span className="card-tag ">Order Now</span>
        </div>
          </div></>)
        })
    }
  </section>
    </>
  )
}

export default MenuCard