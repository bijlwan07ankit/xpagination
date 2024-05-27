import React from 'react'
import {useState, useEffect} from "react";
import styles from "./Pagination.module.css"
import axios from "axios" ;
import Footer from './footer';
function Pagination() {
const [data, setData] = useState([]);
const [currentPage,setCurrentPage]=useState(1);
const [recordPerPage , setRecordPerPage]=useState(10);
const [indexOfLastrecord, setIndexOfLastrecord]=currentPage*recordPerPage();
const [indexOfFirstrecord, setIndexOfFirstRecord]=indexOfLastrecord-recordPerPage   


useEffect(()=>{
    
    fetchData();
},[])

const fetchData=( async ()=>{
    try{
        const res = await axios.get(" https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json") ;
        setData(res.data);
console.log(data);
    }
    catch(error){
        console.log("can not fetch Api ", error)
    }
})
const currentRecords=data.slice(indexOfFirstrecord,indexOfLastrecord);
const npages=Math.ceil(data.length/recordPerPage);

    return (
<>
<h1 >Employee Data Table</h1> 
<table className={styles.table}>
    
    <thead className={styles.head}>
<tr>
    <td>ID</td>
    <td>Name</td>
    <td>Email</td>
    <td>role</td>
</tr>
    </thead>
    
    <tbody id={styles.tbody}>
       {currentRecords.map((person)=>{
            return (
                <tr>
        <th>{person.id}</th>
        <th>{person.name}</th>
        <th>{person.email}</th>
        <th>{person.role}</th>
 </tr>
        )
        })}
    </tbody>    
</table>
<Footer
        nPages={npages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />


</>
   
  )
}

export default Pagination