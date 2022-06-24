import React, { useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin(props) {
  const emailref = useRef();
  const passwordref = useRef();
  async function signin() {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordref.current.value
      );
    } catch {
      alert("Invalid Details");
    }
    emailref.current.value = "";
    passwordref.current.value = "";
  }

  return (
    <div>
      {!props.userIn ? (
        <Container>
          <Card style={{ width: "20rem", margin: "5vh auto" }}>
            <Card.Body>
              <Card.Title>Sign In</Card.Title>
              <hr />
              <h5>Email</h5>
              <input
                placeholder="Enter MailId"
                type="email"
                ref={emailref}
                required
              />
              <h5>Password</h5>
              <input
                placeholder="Enter Password"
                type="password"
                ref={passwordref}
                required
              />
              <br />
              <br />
              <p>
                Create an acccount <a href="/signup">Signup</a>{" "}
              </p>
              <Button variant="primary" onClick={signin}>
                Sign In
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ) : (
        <div>
          <h3>Logged in Succesful</h3>
          <Button as={Link} to="/chome">
            Goto Home
          </Button>
        </div>
      )}
    </div>
  );
}
