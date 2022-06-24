import { Col, Row, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Welcome(props) {
  return (
    <div>
      {!props.userIn ? (
        <Container>
          <Row style={{ margin: "auto", marginTop: "5vh" }}>
            <Col>
              <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Body>
                  <Card.Title>
                    <h2>Admin Login</h2>
                  </Card.Title>
                  <p>Hello! Admin <br/> Login here!</p>
                  <Button variant="primary" as={Link} to="/admin">
                    Login
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", margin: "auto", marginTop:'10px' }}>
                <Card.Body>
                  <Card.Title>
                    <h2>Sign In</h2>
                  </Card.Title>
                  <p>Already have an account? <br/> Login now!</p>
                  <Button variant="primary" as={Link} to="/signin">
                    Signin
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", margin: "auto", marginTop:'10px' }}>
                <Card.Body>
                  <Card.Title>
                    <h2>Sign Up</h2>
                  </Card.Title>
                  <p>Don't have account? <br/>Create new one now!</p>
                  <Button variant="primary" as={Link} to="/signup">
                    Signup
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", margin: "auto", marginTop:'10px' }}>
                <Card.Body>
                  <Card.Title>
                    <h2>Status</h2>
                  </Card.Title>
                  <p>Check Your FIR status <br/> Without login</p>
                  <Button variant="primary" as={Link} to="/status">
                    Check Status
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <h3>Goto Home</h3>
      )}
    </div>
  );
}
