import { Table, Button } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Requests(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetched() {
      const querySnapshot = await getDocs(collection(db, "cases"));
      let d = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let x = doc.data();
        x.id = doc.id;
        d.push(x);
      });
      setData(d);
    }
    fetched();
  }, []);
  console.log(data);
  return (
    <div>{props.userIn?<>
      {props.userType == "admin" ? (
        <>
          <h1>Requests</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Case Id</th>
                <th>Name</th>
                <th>Problem</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.cname}</td>
                    <td>{e.firtype}</td>
                    <td>
                      <Button as={Link} to={`/crime/${e.id}`}>
                        View
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <h3>You are not authorized</h3>
      )}</>:<h3>You are not authorized</h3>}
    </div>
  );
}
