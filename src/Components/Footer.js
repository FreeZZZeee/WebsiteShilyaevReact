import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Footer extends React.Component {
	getYear() {
    return new Date().getFullYear();
}
	render() {
		return (
			<>
			<footer className="footer fixed-bottom">			
				<Nav className="nav-foot mr-auto d-flex align-items-center">
            	<Nav.Link className="footer-head" href="/"> Главная </Nav.Link>
               <Nav.Link className="footer-head" href="/ourWorks"> Наши работы </Nav.Link>
               <Nav.Link className="footer-head" href="/contacts"> Контакты </Nav.Link>
               <Nav.Link className="footer-head" href="/about"> О нас </Nav.Link>
            </Nav>
            <hr/>
            <div className="d-flex justify-content-between align-items-end">
            <ul className="socialIcons">
  					<li><Nav.Link href="#" className="facebook"><i className="fa fa-facebook "></i></Nav.Link></li>
  					<li><Nav.Link href="#" className="twitter"><i className="fa fa-twitter"></i></Nav.Link></li>
  					<li><Nav.Link href="#" className="instagram"><i className="fa fa-instagram"></i></Nav.Link></li>
  					<li><Nav.Link href="#" className="vk"><i className="fa fa-vk"></i></Nav.Link></li>
  				<li><Nav.Link href="#" className="youtube"><i className="fa fa-youtube"></i></Nav.Link></li>
			</ul>
			<div className="footer-map">
			<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A12676bc76f3d682dee675e8cfdf8080a2a16900b345801649e5a06b7c5a19b10&amp;source=constructor" width="320" height="240" frameborder="0"></iframe>
			</div>
			</div>
				<hr/>
				<p className="footer-copy">Все права защищены &copy; {this.getYear()}</p>
       </footer>
			</>
		);
	}
}
