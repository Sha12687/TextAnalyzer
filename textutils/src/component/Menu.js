import React from "react";
import {  ListGroup} from "reactstrap";
import { Link} from "react-router-dom"

const Menus=()=>{
    return (
  <div>
<ListGroup>
    <Link className="list-group-item list-gourp-item-action" tag="a" to="/" action="true">
    Home
    </Link>
    <Link  className="list-group-item list-gourp-item-action" tag="a" to="/add-course" action="true">
        Add Course
    </Link>
    <Link className="list-group-item list-gourp-item-action" tag="a" to="/view-course" action="true">
        VIew Course
    </Link>
    <Link className="list-group-item list-gourp-item-action" tag="a" to="#" action="true">
        About
    </Link>
    <Link className="list-group-item list-gourp-item-action" tag="a" to="#" action="true">
        Contact 
    </Link>
</ListGroup>

  </div>

    );
}
export default Menus;