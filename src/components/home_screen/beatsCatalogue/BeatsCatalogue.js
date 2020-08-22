import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// import PlayButton from './PlayButton.js';

export class BeatsCatalogue extends Component {
  render() {
    return (
      <>
        <div id="beats_catalogue_container">
          {/* <Paper className= "paperWrap" variant="outlined" >

      </Paper> */}
          <iframe
            src="https://player.beatstars.com/?storeId=113600"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        < br />
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "-15px",
            color: "#5F5E61",
          }}
          className='d-none d-md-block'
        >
          
          <i> * Audio files are delivered upon completion of payment. For exclusive rights and custom beats, please reach out to me! * </i>
          {/* * FOR THE PURCHASE OF EXCLUSIVE RIGHTS OR CUSTOM BEATS, REACH OUT TO ME THROUGH THE CONTACT SECTION OR THROUGH SOCIAL MEDIA * */}
        </div>
      </>
    );
  }
}

export default BeatsCatalogue;
