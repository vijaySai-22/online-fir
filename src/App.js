import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Welcome from "./components/Welcome";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ClientHome from "./components/ClientHome";
import AdminHome from "./components/AdminHome";
import Register from "./components/Register";
import Status from "./components/Status";
import Admin from "./components/Admin";
import Requests from "./components/Requests";
import CaseDetails from "./components/CaseDetails";
import CheckYourFir from "./components/CheckYourFir";

import { doc, getDoc } from "@firebase/firestore";
import { auth, db } from "./components/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "@firebase/auth";

export default function App() {
  const [userIn, setUserIn] = useState(false);
  const [userType, setUserType] = useState(null);
  const [uid, setUid] = useState();
  useEffect(() => {
    function fetched() {
      const check = onAuthStateChanged(auth, (user) => {
        if (user != null) {
          setUid(user.email);
          setUserIn(true);
        } else {
          setUserIn(false);
        }
      });
      return check;
    }
    fetched();
  }, []);

  const signout = async () => {
    setUserType(null);
    setUserIn(false);
    await signOut(auth);
    console.log(userIn,userType)
  };
  useEffect(() => {
    async function fetched() {
      const docRef = doc(db, "users", `${uid}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        if (docSnap.data().type === "user") {
          setUserType("user");
        } else if (docSnap.data().type === "admin") {
          setUserType("admin");
        }
      } else {
        // doc.data() will be undefined in this case
        setUserType(null);
      }
    }
    fetched();
  }, [userIn, signout, uid]);
  return (
    <div
      className="App"
      style={{ minHeight: "100vh", backgroundColor: "#509ef2" }}
    >
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <b>FIR</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Welcome</Nav.Link>
                {userIn ? (
                  <>
                    {userType === "user" && (
                      <>
                        <Nav.Link as={Link} to="/chome">
                          {" "}
                          Home
                        </Nav.Link>
                        <Button onClick={signout} variant="danger">
                          Logout
                        </Button>
                      </>
                    )}
                    {userType === "admin" && (
                      <>
                        <Nav.Link as={Link} to="/ahome">
                          {" "}
                          Home
                        </Nav.Link>

                        <Button onClick={signout} variant="danger">
                          Logout
                        </Button>
                      </>
                    )}
                  </>
                ) : null}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Welcome userIn={userIn} />} />
          <Route path="/chome" element={<ClientHome userType={userType} userIn={userIn} />} />
          <Route path="/ahome" element={<AdminHome userType={userType} userIn={userIn} />} />
          <Route path="/signin" element={<Signin userIn={userIn} />} />
          <Route path="/signup" element={<Signup userIn={userIn} />} />
          <Route
            path="/register"
            element={<Register uid={uid} userType={userType} userIn={userIn} />}
          />
          <Route path="/status" element={<Status />} />
          <Route path="/admin" element={<Admin userIn={userIn} />} />
          <Route path="/requests" element={<Requests userType={userType} userIn={userIn} />} />
          <Route
            path="/crime/:id"
            element={<CaseDetails userType={userType} userIn={userIn} />}
          />
          <Route
            path="/check"
            element={<CheckYourFir uid={uid} userType={userType} userIn={userIn}/>}
          />
          <Route path="*" element={<h3>Error 404</h3>} />
        </Routes>
      </Router>
      <footer style={{marginTop:'5vh'}}>Copyright &copy; 2022 Online FIR</footer>
    </div>
  );
}
