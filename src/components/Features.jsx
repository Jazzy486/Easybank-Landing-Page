import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Features() {
  return (
    <div className="features">
      <Container  className="features-section">
        <Row>
          <Col lg={6} xs={12} md={12} className="hero-text-container">
            <div className="features-intro">
              <h1>Why choose Easybank?</h1>
              <p>
              We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="feature-cards-parent">
            <Col lg={3} xs={12} md={12} className="features-card">
                <div className="features-card-container">
                    <img src="../images/icon-online.svg"></img>
                    <h3>Online Banking</h3>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
            </Col>
            <Col lg={3} xs={12} md={12} className="features-card">
                <div className="features-card-container">
                    <img src="../images/icon-budgeting.svg"></img>
                    <h3>Simple Budgeting</h3>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>
            </Col>
            <Col lg={3} xs={12} md={12} className="features-card">
                <div className="features-card-container">
                    <img src="../images/icon-onboarding.svg"></img>
                    <h3>Fast Onboarding</h3>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
            </Col>
            <Col lg={3} xs={12} md={12} className="features-card">
                <div className="features-card-container">
                    <img src="../images/icon-api.svg"></img>
                    <h3>Open API</h3>
                    <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
