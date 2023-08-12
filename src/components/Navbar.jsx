import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function Navigation() {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./images/logo.svg"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto text-center nav-items">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Careers</Nav.Link>
            </Nav>
            <Nav className="nav-btn-parent">
              <Button
                variant="primary"
                size="md"
                className="custom-btn"
                onClick={handleClick}
              >
                Request Invite
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
