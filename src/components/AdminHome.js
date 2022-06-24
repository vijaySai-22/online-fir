import { Col, Row, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AdminHome(props) {
  const usertype = props.userType;
  return (
    <div>{props.userIn?<>
      {usertype == "admin" ? (
        <Container>
          <Row style={{ margin: "auto", marginTop: "5vh" }}>
            <Col>
              <Card style={{ width: "18rem", margin: "auto" }}>
                <Card.Body>
                  <Card.Title>Requests</Card.Title>
                  <p>See all requests here..</p>
                  <Button variant="primary" as={Link} to="/requests">
                    Requests
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem", margin: "auto", marginTop:'10px' }}>
                <Card.Body>
                  <Card.Title>Check FIR Status</Card.Title>
                  <p>Check FIR status here..</p>
                  <Button variant="primary" as={Link} to="/status">
                    Check
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <h3>You are not authorized</h3>
      )}</>:<h3>You are not authorized</h3>}
    </div>
  );
}
