import {React , useEffect, useState } from "react";
import Course from "./Course"
import AddCourses from "./AddCourse"
import { Button } from "reactstrap";
import axios  from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const Allcourse=()=>{
    useEffect(()=>{
       document.title="All Courses1"
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
     const[ courses,setCourses]=useState([]);
    const removeCourseById=(id)=>{
      setCourses(courses.filter((c)=>c.id!=id));
    };
   // const obj= {title:"Bitter Gaurd",description:"We give you some amazing benefits of bitter gourd."};
    return(
        <div>
            {/* <Button onClick={()=>{
            console.log("testing-2");
            setCourses([...courses,{
                title:"How Does it Works ? ",
                description:"Spring Boot automatically configures your application based on the dependencies you have added to the project by using @EnableAutoConfiguration annotation."
            }])
            }} >Test</Button> */}
            <h1 >All courses</h1>
            <p> List of courses are follows</p>
           {
            courses.length>0 ? courses.map((item)=> <Course  Course={item} update={removeCourseById} />)   
                :" No Courses"
                 } 
                      </div>
    );
}
export default Allcourse;
