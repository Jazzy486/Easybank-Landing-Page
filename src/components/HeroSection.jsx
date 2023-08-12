import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroSection() {
  return (
    <>
      <Container fluid className="hero-section">
        <Row>
          <Col lg={6} xs={12} md={12} className="hero-text-container">
            <div className="hero-text">
              <h1>Next generation digital banking</h1>
              <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
              </p>
              <button className="hero-btn">Request Invite</button>
            </div>
          </Col>
          <Col lg={6} xs={12} md={12} className="hero-img">
            <div className="hero-img-container">
              <img id="image-back" src="../images/bg-intro-desktop.svg"></img>
              <img id="image-front" src="../images/image-mockups.png"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSection;
