import { Button, Card, Container } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { auth, db } from "./firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    phno: ""
  });
  const { email, password, name, phno } = data;
  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [gen, setGen] = useState("");
  async function signup() {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((user) =>
        console.log(user)
      );
      try {
        await setDoc(doc(db, "users", `${email}`), {
          email: email,
          name: name,
          phno: phno,
          gender: gen,
          type: "user"
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (e) {
      alert(e.message);
    }
    setData({ email: "", password: "", name: "", address: "" });
  }
  return (
    <div>
      {!props.userIn ? (
        <Container>
          <Card style={{ width: "18rem", margin: "auto", marginTop: "5vh" }}>
            <Card.Body>
              <Card.Title>Signup</Card.Title>
              <hr />
              <h5>Full Name</h5>
              <input
                onChange={change}
                value={name}
                name="name"
                type="text"
                placeholder="Enter Name"
              />
              <br />
              <h5>Contact</h5>
              <input
                onChange={change}
                value={phno}
                name="phno"
                type="number"
                placeholder="Enter number"
              />
              <br />
              <h5>Email</h5>
              <input
                onChange={change}
                value={email}
                name="email"
                type="email"
                placeholder="Enter mail"
              />
              <br />
              <h5>Password</h5>
              <input
                onChange={change}
                value={password}
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <br />
              <h5>Gender</h5>
              <input
                type="radio"
                name="gender"
                value="male"
                onClick={() => setGen("male")}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={() => setGen("female")}
              />
              Female
              <br />
              <br />
              <p>
                Already an acccount <a href="/signin">Login</a>{" "}
              </p>
              <Button variant="primary" onClick={signup}>
                Signup
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
