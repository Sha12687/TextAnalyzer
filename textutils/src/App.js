import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Allcourse from './component/Allcourses';
import { Col, Container, Row } from 'reactstrap';
import Header from "./component/Header"
import Menus from './component/Menu';
import Update from './component/Update';
import Home from "./component/Home";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import AddCourses from './component/AddCourse';
function App() {
  const notify = () =>{ toast.success("Wow so easy!",{
    });
} ;
return(<>
      <Router>
        <ToastContainer />
        <Header  />
        <Container className='mt-4' >
          <Row >
            <Col  md={4}><Menus /></Col>
            <Col className='p-2' md={8}>
              <Routes >
              <Route  path="/" element={<Home />} exact />
              <Route path="/add-course" element={<AddCourses />} exact />
              <Route  path="/view-course" element={<Allcourse />} exact/>
              <Route path="/about" element={<AddCourses /> }  exact/>     
              <Route path="/update" element={<Update /> }  exact/>     
              </Routes>   
            </Col>

          </Row>
        </Container>
        </Router>
       </>
  );
}

export default App;
