import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Articles(){
    return(
     <div className="Articles">
            <Container className="Articles-section">
                <Row>
                    <Col lg={6} xs={12} md={12} className="articles-heading">
                     <div className="articles-intro">
                            <h1>Latest Articles</h1>
                     </div>
                    </Col>
                </Row>


                <Row className="articles-cards-parent g-0">
                    <Col lg={3} xs={12} md={12} className="articles-card">
                        <div className="articles-card-container">
                            <img src="../images/image-currency.jpg"></img>
                            <p className="writer">By Claire Robinson</p>
                            <p className="article-text-heading">Receive money in any currency with no fees</p>
                            <p className="article-text">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} md={12} className="articles-card">
                        <div className="articles-card-container">
                            <img src="../images/image-restaurant.jpg"></img>
                            <p className="writer">By Wilson Hutton</p>
                            <p className="article-text-heading">Treat yourself without worrying about money</p>
                            <p className="article-text">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} md={12} className="articles-card">
                        <div className="articles-card-container">
                            <img src="../images/image-plane.jpg"></img>
                            <p className="writer">By Wilson Hutton</p>
                            <p className="article-text-heading">Take your Easybank card wherever you go</p>
                            <p className="article-text">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                        </div>
                    </Col>
                    <Col lg={3} xs={12} md={12} className="articles-card">
                        <div className="articles-card-container">
                            <img src="../images/image-confetti.jpg"></img>
                            <p className="writer">By Claire Robinson</p>
                            <p className="article-text-heading">Our invite-only Beta accounts are now live!</p>
                            <p className="article-text">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </Col>
                </Row>
            </Container>
     </div>
    );
}

export default Articles;