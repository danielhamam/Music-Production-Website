import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='container'>
        <h1 className='text-center text-uppercase'> <strong> Dashboard </strong> </h1>
        <div className='d-flex justify-content-end align-items-center' > 
            <div className="btn btn-danger btn-small">
                Log Out
            </div>
        </div>
        <hr/>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem@lorem.com</td>
                        <td>Suject</td>
                        <td>100% done</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>    
);  
};

export default Dashboard;
