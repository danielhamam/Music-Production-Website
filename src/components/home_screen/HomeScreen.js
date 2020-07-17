import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import MotionPicture from './MotionPicture';

export class HomeScreen extends Component {

    render() {

        return (
    
          <div id="home_screen">
              <Navbar />
              <MotionPicture />
          </div>
        );
    }
}

export default HomeScreen