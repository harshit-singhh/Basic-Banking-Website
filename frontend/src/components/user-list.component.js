import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import UserTableRow from "./userTableRow";


const userList =()=>{
    const [user, setUser] = useState([]);

    useEffect(()=>{
<<<<<<< HEAD
        axios
          .get(`${process.env.BACKEND_URL}users/`)
          .then(({ data }) => {
=======
        axios.get("https://basic-banking-website-wbll.onrender.com/users/").then(({data})=>{
>>>>>>> f8c7e145de8067818acf66979ba47b99f94bd23e
            setUser(data);
          })
          .catch((err) => {
            console.log(err);
          });
    },[]);
    
    const DataTable = () => {
        
        return user.map((res,i)=>{
            return <UserTableRow obj={res} key={i} />
        });
    };
    return (
        <div className="table-wrapper">
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    )
}
export default userList;
