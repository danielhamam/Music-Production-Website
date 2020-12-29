import React from "react";
import "./Dashboard.css";
import { removeToken } from "../../utils/authManager";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "../../config/";
import { getToken } from "../../utils/authManager";
import Swal from "sweetalert2";

const Dashboard = () => {
  const history = useHistory();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}contact/`)
      .then(async (response) => {
        setContacts(response.data);
      })
      .catch((err) => {
        Swal.fire("Something went wrong", "", "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    await removeToken();
    history.push("/");
  };
  return (
    <div className="container">
      <h1 className="text-center text-uppercase">
        {" "}
        <strong> Dashboard </strong>{" "}
      </h1>
      <div className="d-flex justify-content-end align-items-center">
        <div className="btn btn-danger btn-small" onClick={handleLogout}>
          Log Out
        </div>
      </div>
      <hr />
      <div className="table">
        {loading && (
          <div className="w-100 d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
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
            {contacts.map((contact, i) => (
              <tr key={i}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
