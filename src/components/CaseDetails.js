import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Table, Button, Container } from "react-bootstrap";
import { useParams } from "react-router";

export default function CaseDetails(props) {
  const { id } = useParams();
  const [data, setData] = useState();
  const acpt = async () => {
    await updateDoc(doc(db, "cases", id), {
      accepted: true
    });
    alert("Case Accepted");
  };
  const pro = async () => {
    await updateDoc(doc(db, "cases", id), {
      processing: true
    });
    alert("Started Processing");
  };
  const com = async () => {
    await updateDoc(doc(db, "cases", id), {
      completed: true
    });
    alert("Case Completed");
  };
  useEffect(() => {
    async function fetched() {
      const docRef = doc(db, "cases", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
      } else {
      }
    }
    fetched();
  }, []);

  return (
    <div>{props.userIn?<>
      {
        (props.userType == "admin" ? (
          <Container>
            <h1>Case Details</h1>
            {data ? (
              <div>
                <Button style={{ margin: "10px" }} onClick={acpt}>
                  Accept
                </Button>
                <Button
                  variant="warning"
                  style={{ margin: "10px" }}
                  onClick={pro}
                >
                  Started Process
                </Button>
                <Button
                  variant="success"
                  style={{ margin: "10px" }}
                  onClick={com}
                >
                  Case Completed
                </Button>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <td>Accepted</td>
                      <td>
                        {data.accepted ? (
                          <Button variant="success"></Button>
                        ) : (
                          <Button variant="danger"></Button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Processing</td>
                      <td>
                        {data.processing ? (
                          <Button variant="success"></Button>
                        ) : (
                          <Button variant="danger"></Button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Completed</td>
                      <td>
                        {data.completed ? (
                          <Button variant="success"></Button>
                        ) : (
                          <Button variant="danger"></Button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>FIR Type</td>
                      <td>{data.firtype}</td>
                    </tr>
                    <tr>
                      <td>Complainer Name</td>
                      <td>{data.cname}</td>
                    </tr>
                    <tr>
                      <td>Complainer phno</td>
                      <td>{data.cphno}</td>
                    </tr>
                    <tr>
                      <td>Complainer District</td>
                      <td>{data.cdis}</td>
                    </tr>
                    <tr>
                      <td>Complainer Address</td>
                      <td>{data.cadd}</td>
                    </tr>
                    <tr>
                      <td>Accused Name</td>
                      <td>{data.aname}</td>
                    </tr>
                    <tr>
                      <td>Accused Address</td>
                      <td>{data.aadd}</td>
                    </tr>
                    <tr>
                      <td>Crime Time</td>
                      <td>{data.crimetime}</td>
                    </tr>
                    <tr>
                      <td>Crime Date</td>
                      <td>{data.crimedate}</td>
                    </tr>
                    <tr>
                      <td>Crime Location</td>
                      <td>{data.crimeLoc}</td>
                    </tr>
                    <tr>
                      <td>Crime Description</td>
                      <td>{data.des}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : null}
          </Container>
        ) : (
          <h3>You are not authorized</h3>
        ))
      }</>:<h3>You are not authorized</h3>}
    </div>
  );
}
