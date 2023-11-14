/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function DarkNavbar({userName}) {
  return (

    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Foodygo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
            Wellcome, {userName}
        </Navbar.Text>
      </Container>
    </Navbar>

    // <>
    //   <Navbar className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
    //     <Container>
    //         <Navbar.Brand href="/">Foodygo</Navbar.Brand>
    //         <Nav className="me-auto">
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#features">Features</Nav.Link>
    //             <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         </Nav>
    //         <Navbar.Toggle />
    //         <Navbar.Collapse className="justify-content-end">
    //         <Navbar.Text>
    //             Wellcome, {userName}
    //         </Navbar.Text>
    //         </Navbar.Collapse>
    //     </Container>
    //   </Navbar>     
    // </>
  );
}
export default DarkNavbar;