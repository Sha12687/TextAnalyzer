import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from 'reactstrap'
import base_url from "../api/bootapi";
const  Course=({Course,update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/deleteCourse/${id}` ).then(
            (response)=>{
                    toast.success("Course is deleted");
                    update(id);
            },
            (error)=>{
                    toast.error("Something went worng");
            }
        )
    };
  
return(
<div>
<Card >
    <CardBody>
<CardSubtitle className="fw-bold text-uppercase text-center ">
{Course.title}
</CardSubtitle>
<CardText className="text-center">{Course. desc}</CardText>
<Container className="text-center  " >
    <Button color="danger" onClick={()=>{
        deleteCourse(Course.id);
    }}>Delete</Button>
   <Link   to={"/editCourse/" + Course.id}> <Button color="warning"  className="ms-3">Update</Button></Link>
</Container>
</CardBody>
</Card>

</div>
);
}
export default Course;