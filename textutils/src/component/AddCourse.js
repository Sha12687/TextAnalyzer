import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import base_url from "../api/bootapi";
const AddCourses = (props) => {
    console.log(props)
    useEffect(() => {
        document.title = "Add Course"
    }, []);
    const [course, setCourses] = useState({})
    // form handler
    const handleForm = (e) => {
        console.log(course);
        postDataOnServer(course);
    }
    const postDataOnServer=(data)=>{
        axios.post(`${base_url}/addCourse`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Your Course is added");
                setCourses({id:"",title:"",desc:""})
            },
            (error)=>{
                console.log(error);
                toast.error("something went wrong");
            },
        )
    }
    return (<Fragment >
        <h2>Add Course</h2>
        <Form onSubmit={handleForm} >
            <FormGroup >
                <Label name="CourseId"></Label>
                <Input type="text"
                    placeholder="Enter course id"
                    name="courseId"
                    id="courseId"
                    onChange={(e) => {
                        setCourses({ ...course, id: e.target.value });
                    }}></Input>
            </FormGroup>
            <FormGroup >
                <Label for="courseTitle">Couese Title</Label>
                <Input type="text" placeholder="Enter course title" name="courseTitle" id="courseTitle"
                    onChange={(e) => {
                        setCourses({ ...course, title: e.target.value });
                    }} />
            </FormGroup>
            <FormGroup >
                <Label for="description">Course Descripion</Label>
                <Input type="textarea"
                    placeholder="Enter course description"
                    name="descripton"
                    id="desc"
                    onChange={(e) => {
                        setCourses({ ...course, desc: e.target.value });
                    }}
                ></Input>
            </FormGroup>
            <Container className="text-center m-3" >
                <Button w="" type="submit" color="success" >Add Course</Button>
                <Button type="reset" color="warning" className="ms-3">Clear Course</Button>
            </Container>
        </Form>
    </Fragment>
    );
}
export default AddCourses;