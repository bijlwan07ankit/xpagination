import { useEffect, useState } from "react";
import "./Styles.css";
import axios from "axios";
import Pagination from "../src/Components/Pagination";
export default function App() {
  let api =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  let [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(api);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(alert("failed to fetch data"));
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  return (
    <div className="App">
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr className="main-col">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody id="tableBody">
        {currentRecords.map((person) => {
            return (
              <tr>
                <th>{person.id}</th>
                <th>{person.name}</th>
                <th>{person.email}</th>
                <th>{person.role}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}