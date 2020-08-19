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

        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "-25px",
          }}
          className='d-none d-md-block'
        >
          *Audio files and contracts are delivered upon payment completion. All
          sales are final and non-refundable. By purchasing you agree to these
          terms.
        </div>
      </>
    );
  }
}

export default BeatsCatalogue;
