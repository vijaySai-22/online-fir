import {
    DropdownButton,
    Dropdown,
    Row,
    Container,
    Col,
    Button
  } from "react-bootstrap";
  import { addDoc, collection } from "@firebase/firestore";
  import { db } from "./firebase";
  import { useState } from "react";
  export default function Register(props) {
    const districts = [
      "Anantapur",
      "Chittoor",
      "East",
      "Godavari",
      "Guntur",
      "Krishna",
      "Kurnool",
      "Prakasam",
      "Srikakulam",
      "Nellore",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "Kadapa"
    ];
    const firTypes = [
      "Rape",
      "Murder",
      "Drug Trafficing",
      "Kidnap",
      "Robbery",
      "Child Trafficking",
      "Others"
    ];
    const [firtype, setFirtype] = useState("FIR Type");
    const [cdis, setCdis] = useState("Your District");
    const [firId, setFirId] = useState();
    const [data, setData] = useState({
      firtype: "",
      cname: "",
      cphno: "",
      cdis: "",
      cadd: "",
      aname: "",
      aadd: "",
      crimetime: "",
      crimedate: "",
      crimeLoc: "",
      des: ""
    });
    const {
      cname,
      cphno,
      cadd,
      aname,
      aadd,
      crimetime,
      crimedate,
      crimeLoc,
      des
    } = data;
    const change = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
    async function send() {
      try {
        const docRef = await addDoc(collection(db, "cases"), {
          firtype: firtype,
          cname: cname,
          cphno: cphno,
          cdis: cdis,
          cadd: cadd,
          aname: aname,
          aadd: aadd,
          crimetime: crimetime,
          crimedate: crimedate,
          crimeLoc: crimeLoc,
          des: des,
          accepted: false,
          processing: false,
          completed: false
        });
        // setFirId(docRef.id);
        try {
          await addDoc(collection(db, `${props.uid}cases`), {
            firid: docRef.id,
            firtype: firtype,
            cname: cname,
            cphno: cphno,
            cdis: cdis,
            cadd: cadd,
            aname: aname,
            aadd: aadd,
            crimetime: crimetime,
            crimedate: crimedate,
            crimeLoc: crimeLoc,
            des: des
          });
          alert("success");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      } catch (e) {
        console.log(e);
      }
    }
    return (
      <div>
        {(props.userIn) ? <>{
          props.userType == "user"?
          <Container>
            <h1>Register</h1>
            <hr />
            <div
              style={{
                border: "1px solid black",
                textAlign: "left",
                padding: "3px"
              }}
            >
              <h2>FIR No 1</h2>
              <Row md={2} sm={2} xs={2}>
                <h6>FIR type</h6>
                <DropdownButton id="dropdown-basic-button" title={firtype}>
                  {firTypes.map((e) => {
                    return (
                      <Dropdown.Item id={e} onClick={() => setFirtype(e)}>
                        {e}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </Row>
              <h2>Complainer Details</h2>
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6> Name</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={cname} name="cname" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6> Contact no.</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={cphno} name="cphno" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6>District</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <DropdownButton id="dropdown-basic-button" title={cdis}>
                    {districts.map((e) => {
                      return (
                        <Dropdown.Item id={e} onClick={() => setCdis(e)}>
                          {e}
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6> Address</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={cadd} name="cadd" />
                </Col>
              </Row>
              <br />
              <h2>Accused Details</h2>
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6> Name</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={aname} name="aname" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6> Address</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={aadd} name="aadd" />
                </Col>
              </Row>
              <br />
              <h2>Crime Details</h2>
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6> Time</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input
                    type="time"
                    onChange={change}
                    value={crimetime}
                    name="crimetime"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6>Date</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input
                    type="date"
                    onChange={change}
                    value={crimedate}
                    name="crimedate"
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6>Location</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={crimeLoc} name="crimeLoc" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={4} md={6} xs={4}>
                  <h6>Description</h6>
                </Col>
                <Col sm={8} md={6} xs={8}>
                  <input onChange={change} value={des} name="des" />
                </Col>
              </Row>
              <br />
              <div style={{ margin: "auto", alignContent: "center" }}>
                <Button variant="success" onClick={send}>
                  Submit
                </Button>
                {"  "}
                <Button variant="danger">Cancel</Button>
              </div>
            </div>
          </Container>
         : <h3>Your are not logged in as user</h3>
        }</>:<h3>Your are not logged in as user</h3>}
      </div>
    );
  }
  