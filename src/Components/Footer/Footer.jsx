import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
function Footer() {
  return (
    <div>
        <Navbar className="bg-info shadow">
        <Container>
          <Navbar.Brand href="#home">
          <p>All Rights are Reserved under Resto Cafe &copy; restocafe@gmail.com</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer