import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./MenuBar.css";


const Menubar = () => {
    const logo = 'http://ary-themes.com/html/bold_touch/medicoz/images/logo.png';
    const {user, logOut} =useAuth();
    return (
        // <div className="menu-div">
        //     <div className="row menubar-container">
        //         <div className="col-md-2 col-lg-2 col-sm-12">
        //             <div className="logo p-3">
        //                 <img src={'http://ary-themes.com/html/bold_touch/medicoz/images/logo.png'} alt="" />
        //             </div>
        //         </div>
        //         <div className="col-md-10 col-lg-10 col-sm-12">
        //             <div className="menu-items me-5">
        //                 <ul className="d-flex align-items-end justify-content-end">
        //                     <li className="items m-2 p-2">Home</li>
        //                     <li className="items m-2 p-2">Shop</li>
        //                     <li className="items m-2 p-2">Contact</li>
        //                     <li className="items m-2 p-2">About</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
         
            <Navbar bg="white" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end mx-3">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/departments">Department</Nav.Link>
                        <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="primary">LogOut</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            
                        
                        <Navbar.Text>
                             <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                  
                </Container>
            </Navbar>

            
        </>
    );
};

export default Menubar;