import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css'

function ColorSchemesExample() {
  return (
   
      <Navbar bg='dark' variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center ">
            <img
              src="/sage.png"
              alt="Sage Logo"
              className="mr-2"
              style={{ width: "250px", height: "200px" }} // Set your desired width and height
            />
            VALSKINZ
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Buy</Nav.Link>
            <Nav.Link href="#pricing">Sell</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default ColorSchemesExample;