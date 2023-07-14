import {react , useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { propTypes ,PropTypes} from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';
function MyNavbar(props){
    return (
        <div>
        <Navbar className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode} `}>
      <Container fluid>
        <Navbar.Brand href="#">{props.title} </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#" >
             {props.about}
            </Nav.Link>
          </Nav>
          <Form  className={` text-${props.mode==='light'?'dark':'light'}`}>
            <Form.Check 
        onChange={props.toggleMode}
        type="switch"
        id="custom-switch"
        label="Enable DarkMode"
      />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
}
export default MyNavbar;
MyNavbar.defaultProps={
    title:'Set title here',
}
MyNavbar.propTypes={
    title:PropTypes.string,
    about:PropTypes.string,
}