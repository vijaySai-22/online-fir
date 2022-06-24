import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
export default function CheckYourFir(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetched() {
      const querySnapshot = await getDocs(collection(db, `${props.uid}cases`));
      let d = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        d.push(doc.data());
      });
      setData(d);
    }
    fetched();
  }, []);
  return (
    <div>
      {props.userIn?<>
      {props.userType == "user" ? (
        <>
          <h1>Check All FIRs</h1>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>FIR ID</th>
                  <th>Complainer Name</th>
                  <th>Date</th>
                  <th>Crime Location</th>
                </tr>
              </thead>
              <tbody>
                {data.map((e) => {
                  return (
                    <tr>
                      <td>{e.firid}</td>
                      <td>{e.cname}</td>
                      <td>{e.crimedate}</td>
                      <td>{e.crimeLoc}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </>
      ) : (
        <h3>You are not logged in as user</h3>
      )}</>:<h3>You are not logged in as user</h3>}
    </div>
  );
}
