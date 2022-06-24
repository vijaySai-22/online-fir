import { Button, Table } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export default function Status() {
  const [acpt, setAcpt] = useState();
  const [pro, setPro] = useState();
  const [com, setCom] = useState();
  const [show, setShow] = useState(false);
  const id = useRef();
  const check = async () => {
    let firid = id.current.value;
    const docRef = doc(db, "cases", firid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setAcpt(docSnap.data().accepted);
      setPro(docSnap.data().processing);
      setCom(docSnap.data().completed);
    } else {
    }
    setShow(true);
  };
  return (
    <div>
      <h1>Check Status</h1>
      <input type="text" ref={id}></input>
      <br />
      <br />
      <Button onClick={check}>Check</Button>
      <br />
      <Table striped bordered hover style={{ width: "200px", margin: "auto" }}>
        <thead>
          <tr>
            <th>Status Type</th>
            <th>Status</th>
          </tr>
        </thead>
        {show ? (
          <tbody>
            <tr>
              <td>Accepted</td>
              <td>
                {acpt ? (
                  <Button variant="success"></Button>
                ) : (
                  <Button variant="danger"></Button>
                )}
              </td>
            </tr>
            <tr>
              <td>Processing</td>
              <td>
                {pro ? (
                  <Button variant="success"></Button>
                ) : (
                  <Button variant="danger"></Button>
                )}
              </td>
            </tr>
            <tr>
              <td>Completed</td>
              <td>
                {com ? (
                  <Button variant="success"></Button>
                ) : (
                  <Button variant="danger"></Button>
                )}
              </td>
            </tr>
          </tbody>
        ) : null}
      </Table>
    </div>
  );
}
