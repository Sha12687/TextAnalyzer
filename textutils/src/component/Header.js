import React from "react";
import { CardBody ,Card, Row, Col} from "reactstrap";

function Header({name,title}){
    return(
        <div className="ms-5 me-5" >
            
        <Card className="ms-5 me-5 bg-warning">
           <CardBody>
            <h1 className="text-center " >Welcome to Course Applicaion</h1>
            </CardBody>
            </Card>
        </div>
    );
}
export default Header;