import React, { Component } from 'react';
import axios from 'axios';
// import { API_URL } from "../../../config/";
// import Swal from "sweetalert2";
import emailjs from 'emailjs-com';

export class ContactInfo extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    loading: false,
    sent : false,
    sentMessage : ""
  };


  handleSubmitForm = (e) => {
    this.setState({loading : true})

    e.preventDefault();
    this.setState({loading : true})
    emailjs.sendForm("service_ID", "template_zm6it7f", e.target, "user_RoFdpEIjph8WBvUX1knWs")
      .then((result) => { 
          this.resetForm()
      }, (error) => {
        console.log("message not sent")
      });

    // console.log("Handling form...");
    // e.preventDefault();
    // let data = {
    //   name : this.state.name,
    //   email : this.state.email,
    //   subject : this.state.subject,
    //   message: this.state.message
    // }
    // axios.post('/api/forma', data)
    // .then(res => {
    //   this.setState({
    //     sent : true,
    //     sentMessage : "Message has successfully been sent!"
    //   }, this.resetForm())
    // }).catch(() => {
    //   console.log("message not sent")
    // })
  }

  // For resetting initial data
  resetForm = () => {
    this.setState({ name : "" })
    this.setState({ email : "" })
    this.setState({ subject : "" })
    this.setState({ message : "" })
    this.setState({ sentMessage : "Message has successfully been sent!" }) 
    this.setState({ loading : false})

    setTimeout( () => {
      this.setState({ 
        sent : false,
        sentMessage : ""
      })
    }, 15000);
  }


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
              name="name"
              required
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label> Your Email (required) </label>
            <input
              id="contact_email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label> Subject </label>
            <input
              name="subject"
              id="contact_subject"
              type="text"
              value={subject}
              onChange={(e) => this.setState({ subject: e.target.value })}
            />
            <label> Your Message </label>
            <textarea
              name="message"
              id="contact_message"
              cols="10"
              rows="10"
              type="text"
              value={message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
            <br />
            <br />
            <input disabled={loading ? true : false} id={loading ? "contact_submit_button_loading": "contact_submit_button"} type="submit" value={loading ? "SENDING" : "SEND"} />
            <div className="msg"> {this.state.sentMessage} </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
