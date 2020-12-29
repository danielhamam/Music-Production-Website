import React, { Component } from "react";
// import axios from "axios";
// import { API_URL } from "../../../config/";
// import Swal from "sweetalert2";

export class ContactInfo extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  render() {
    const { name, email, subject, message, loading } = this.state;

    return (
      <div id="contact_info_container">
        <div id="contact_information">
          <form onSubmit={this.handleSubmitForm}>
            <label> Your Name (required) </label>
            <input
              id="contact_name"
              type="text"
              name="fname"
              required
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label> Your Email (required) </label>
            <input
              id="contact_email"
              type="email"
              required
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label> Subject </label>
            <input
              id="contact_subject"
              type="text"
              value={subject}
              onChange={(e) => this.setState({ subject: e.target.value })}
            />
            <label> Your Message </label>
            <textarea
              id="contact_message"
              cols="10"
              rows="10"
              type="text"
              value={message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
            <br />
            <br />
            <input id="contact_submit_button" type="submit" value={loading ? "Loading..." : "SEND"} />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
