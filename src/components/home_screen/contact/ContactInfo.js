import React, { Component } from 'react';

export class ContactInfo extends Component {

render() {
  return (
        <div id="contact_info_container">
            <div id="contact_information"> 
                <form> 

                <label> Your Name: </label>
                <input type="text" name="fname" />
                <label> Your Email: </label>
                <input type="text" />
                <label> Subject: </label>
                <input type="text" />
                <label> Your Message: </label>
                <input type="text" />
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