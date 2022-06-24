import { Col, Row, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ClientHome(props) {
  const usertype = props.userType;
  return (
    <div>{props.userIn?<>
      {usertype == "user" ? (
        <Container>
          <Row style={{ margin: "auto", marginTop: "5vh" }}>
            <Col>
              <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Body>
                  <Card.Title>Register FIR</Card.Title>
                  <p>Register a FIR here..</p>
                  <Button variant="primary" as={Link} to="/register">
                    Register
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", margin: "auto", marginTop:'10px' }}>
                <Card.Body>
                  <Card.Title>Check FIR Status</Card.Title>
                  <p>Check your FIR status here..</p>
                  <Button variant="primary" as={Link} to="/status">
                    Check
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", margin: "auto", marginTop:'10px' }}>
                <Card.Body>
                  <Card.Title>Your FIRs</Card.Title>
                  <p>See all your FIRs here..</p>
                  <Button variant="primary" as={Link} to="/check">
                    Check Your FIRs
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <h3>You are not logged in as client/user</h3>
      )}</>:<h3>You are not logged in as client/user</h3>}
    </div>
  );
}
