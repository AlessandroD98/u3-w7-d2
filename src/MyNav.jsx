import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Allthebook from './AlltheBooks';
import Welcome from './Welcome';



function MyNav() {
    return (
      <>
          <Navbar bg="primary" expand="lg">
            <Container>
              <Navbar.Brand href="#">Book Shelf</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#">About</Nav.Link>
                  <Nav.Link href="#">Browser</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Welcome />
      <Allthebook />
            <div className="MyFooter">
    <div><p>&copy; Book Shelf</p></div>
    <div><a href="#top"><Button className='FooterButton'>&uarr;</Button></a ></div>
        </div>
      </>
    );
  }
  export default MyNav;