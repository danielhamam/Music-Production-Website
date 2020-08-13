import React, { Component } from 'react';

export class ContactInfo extends Component {

render() {
  return (
        <div id="contact_info_container">
            <div id="contact_information"> 
            <form> 

            <label> Your Name: </label>
            <input id="contact_name" type="text" name="fname" />
            <label> Your Email: </label>
            <input id="contact_email" type="text" />
            <label> Subject: </label>
            <input id="contact_subject" type="text" />
            <label> Your Message: </label>
            <textarea id="contact_message" cols="10" rows="10" type="text" />
            <br />
            <br />
            <input id="contact_submit_button" type="submit" value="SEND" />

            </form>


            </div>

        </div>  
  );
          }
          }

export default ContactInfo