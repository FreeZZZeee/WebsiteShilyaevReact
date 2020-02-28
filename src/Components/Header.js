import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import OurWorks from "../Pages/OurWorks";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
// import logo from './logo192.png'

export default class Header extends Component {
    render() {
        return (
            <>
            <header>
            <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="white">
                <Container>
                    {/* <Navbar.Brand href="/">
                    <img 
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block aligin-top"
                        alt="Logo"
                    />
                    </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto d-flex justify-content-around">
                        <Nav.Link className="head-link" href="/"> Главная </Nav.Link>
                        <Nav.Link className="head-link" href="/ourWorks"> Наши работы </Nav.Link>
                        <Nav.Link className="head-link" href="/contacts"> Контакты </Nav.Link>
                        <Nav.Link className="head-link" href="/about"> О нас </Nav.Link>
                        </Nav>                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/ourWorks" component={OurWorks} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>        
            </>
        );
    }
}
