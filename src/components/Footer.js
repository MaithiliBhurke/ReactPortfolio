import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Container"
import logo from "../assets/imgs/logo.svg";
import navIcon1 from "../assets/imgs/nav-icon1.svg";
import navIcon2 from "../assets/imgs/nav-icon2.svg";
import navIcon3 from "../assets/imgs/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className='footer'>
       <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  )
}

export default Footer
