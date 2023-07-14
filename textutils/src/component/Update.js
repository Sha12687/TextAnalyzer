import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import base_url from "../api/bootapi";
import axios  from "axios";
 export const Update = () => {
   const{id}=useParams();
   useEffect(()=>{
    document.title="All Courses1"
    console.log("update")
 },[]);
 // function to call serever
 const getAllCoursesFromServer=()=>{
     axios.get(`${base_url}/courses`).then(
       (response)=>{
         console.log(response.data);
         toast.success("Course has been loaded");
         setCourses(response.data);
       },
     (error)=>{
         toast.error("Something went worng");
     })
  };
useEffect(()=>{
     getAllCoursesFromServer();
 },[]);
  const[ courses,setCourses]=useState([
 ]);
 const tempCourse = courses.find((course) => course.id === id);
 console.log(tempCourse);
  return (
    <Fragment >
    <h2>Add Course</h2>
    <Form  >
        <FormGroup >
            <Label name="CourseId"></Label>
            <Input type="text"
                placeholder="Enter course id"
                name="courseId"
                id="courseId"
                onChange={(e) => {
                }}></Input>
        </FormGroup>
        <FormGroup >
            <Label for="courseTitle">Couese Title</Label>
            <Input type="text" placeholder="Enter course title" name="courseTitle" id="courseTitle"
                onChange={(e) => {
                   
                }} />
        </FormGroup>
        <FormGroup >
            <Label for="description">Course Descripion</Label>
            <Input type="textarea"
                placeholder="Enter course description"
                name="descripton"
                id="desc"
                onChange={(e) => {
                  
                }}
            ></Input>
        </FormGroup>
        <Container className="text-center m-3" >
            <Button w="" type="submit" color="success" >Add Course</Button>
            <Button type="reset" color="warning" className="ms-3">Clear Course</Button>
        </Container>
    </Form>
</Fragment>
  )
}
