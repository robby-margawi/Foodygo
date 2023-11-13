import { useState, useEffect } from "react"
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navLinks'
import { useNavigate } from 'react-router-dom'

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false)

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY > 10 ? true : false);
  }

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor)
  })
  
  let navigate = useNavigate();

  return (
  <div>
    <Navbar className={changeColor ? "color-active" : ""} expand="lg">
      <Container>
        <Navbar.Brand className='fs-3 fw-bold' href="./">Foodygo.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className='nav-link' key={link.id}>
                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "" } 
                    to={link.path} end>{link.name}</NavLink>
                </div>
              );
            })}
          </Nav>
          <div className='text-center'>
            <button className='btn btn-outline-danger rounded-1'onClick={() => {navigate('/login')}} >Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default NavbarComponent