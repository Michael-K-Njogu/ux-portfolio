import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero bg-light text-center">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <h1 className="display-5 fw-bold mb-3">Hi, I’m Michael. 👋</h1>
            <p className="lead mb-4">
              I’m a UX designer passionate about creating human-centered digital experiences.
              Explore my latest case studies or learn more about my journey and design approach.
            </p>

            <div>
              <Button
                as={Link}
                to="/about"
                variant="primary"
                size="lg"
                className="me-3"
              >
                About Me
              </Button>

              <Button
                as={Link}
                to="/case-studies"
                variant="outline-primary"
                size="lg"
              >
                View My Work
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;